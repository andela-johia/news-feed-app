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
    this.updateSortByAvailables = this.updateSortByAvailables.bind(this);
  }

  componentDidMount() {
    actionSource.getNewsHeadlines(this.state.sourceId, '');
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
  updateSortByAvailables(event) {
    const sortStatus = event.target.value;
    if (sortStatus === 'top') {
      actionSource.getNewsHeadlines(this.state.sourceId, sortStatus);
      HeadlineStore.on('change', this.updateArticles);
    } else if (sortStatus === 'latest') {
      actionSource.getNewsHeadlines(this.state.sourceId, sortStatus);
      HeadlineStore.on('change', this.updateArticles);
    }

    event.preventDefault();
  }
  render() {
    const buttonStyle = {
      marginRight: 20,

    };
    const headerStyle = {
      marginLeft: 450,
    };
    const buttonAlign = {
      marginRight: '50px',
      marginLeft: '35px',
    };
    const sourceName = this.state.sourceId;
    const newsName = sourceName.toUpperCase().replace('-', ' ');
    const links = this.state.sortBy.split('+').map(link => (
      <button
        key={link}
        id="sort" className="btn waves-effect waves-light" value={link}
        onClick={this.updateSortByAvailables} style={buttonStyle}
      >{link}</button>
    ));

    return (
      <div>
        <Signout />

        <br /><h4 style={headerStyle}>{'News from '}{newsName}</h4>
        <br /> <br />
        <div className="container">
          <div className="row">
            <div className="col m4">
              <Previous /></div>
            <div className="col m4" style={buttonAlign}>
              {links}</div>
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
