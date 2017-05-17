import React from 'react';
import PropTypes from 'prop-types';
import HeadlineStore from '../stores/HeadlineStore';
import * as actionSource from '../action/NewsAction';
import Signout from './Signout';
import Previous from './Previous';

/**
 *This component renders the news articles for different news sources.
 Using the source id and sortby parameter the articles are retrieved by making an api call.
 *
 * @class Headlines
 * @extends {React.Component}
 */
export default class Headlines extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sourceId: props.match.params.source,
      sortBy: props.match.params.sortBy,
      articles: [],
    };

    this.updateArticles = this.updateArticles.bind(this);
    // this.updateSortByAvailables = this.updateSortByAvailables.bind(this);
  }

  componentDidMount() {
    actionSource.getNewsHeadlines(this.state.sourceId, this.state.sortBy);
    HeadlineStore.on('change', this.updateArticles);
  }

  componentWillUnmount() {
    HeadlineStore.removeListener('change', this.updateArticles);
  }

  updateArticles() {
    this.setState({
      articles: HeadlineStore.fetchArticles(),
    });
  }

  /**
   * This function changes the state of the sortby params on clicking.
   * The headline component is unmounted and remounted during a change in event.
   *
   * @param {any} event - This event retrieves the value of sortBy params
   * when clicked inorder to obtain news articles for that particular param
   *
   * @memberof Headlines
   */
  render() {
    const sortBy = this.state.sortBy.toUpperCase();
    const headerStyle = {
      marginLeft: 300,
    };
    const sourceName = this.state.sourceId;
    const newsName = sourceName.toUpperCase().replace('-', ' ');

    return (
      <div>
        <Signout />

        <br /><h4 style={headerStyle}>{sortBy}{' News from '}{newsName}</h4>
        <br /> <br />
        <div className="container">
          <div className="row">
            <div className="col m4">
              <Previous /></div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            {this.state.articles.map(item => (
              <div className="col m6" key={item.title}>
                <div className="card small grey lighten-4">
                  <div className="card-image">
                    <img src={item.urlToImage} alt={item.title} />
                    <span className="card-title">{item.title}</span>
                  </div>
                  <div className="card-content">
                    <p>{item.description}</p><br />{'Published at:  '}{item.publishedAt}
                  </div>
                  <div className="card-action">
                    <a href={item.url} target={'#'}>{'Read More'}</a>
                  </div>
                </div>
              </div>
            ))};
          </div>
        </div>
      </div>
    );
  }
}


Headlines.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      sortBy: PropTypes.string,
      source: PropTypes.string,
    }),
  }),
};

Headlines.defaultProps = {
  match: {
    params: {
      sortBy: 'top',
      source: 'abc',
    },
  },
};
