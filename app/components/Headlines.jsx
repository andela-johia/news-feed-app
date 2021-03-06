import React from 'react';
import PropTypes from 'prop-types';
import HeadlineStore from '../stores/HeadlineStore';
import NewsAction from '../action/NewsAction';
import Signout from './Signout.jsx';
import Previous from './Previous.jsx';

/**
 *This component renders the news articles for different news sources.
 Using the source id and sortby parameter the articles are retrieved by making
  an api call.
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
  }

  /**
   * This function mounts the getNewsHeadlines action function when it is about
   *to be rendered on the DOM. Props are passed to the action method and an
   API call is made.
   * @return {void} sets the current state
   * @memberof Headlines
   */
  componentDidMount() {
    NewsAction.getNewsHeadlines(this.state.sourceId, this.state.sortBy);
    HeadlineStore.on('change', this.updateArticles);
  }

  /**
   *This function unmounts the rendered component using the removeListener
   method and updates the
   *state of articles.
   * @return {void} sets the updated state
   * @memberof Headlines
   */
  componentWillUnmount() {
    HeadlineStore.removeListener('change', this.updateArticles);
  }

  /**
   *This function is reponsible for updating the state of the article prop when
   the component is rendered.
   * @return {object} updated state of articles
   * @memberof Headlines
   */
  updateArticles() {
    this.setState({
      articles: HeadlineStore.fetchArticles(),
    });
  }

  render() {
    const sortBy = this.state.sortBy.toUpperCase();
    const sourceName = this.state.sourceId;
    const newsName = sourceName.toUpperCase().replace('-', ' ');

    return (
      <div >
        <Signout />
        <div id="loginHeader">
        <br /><h4 id="headerStyle">{sortBy}{' News from '}{newsName}</h4>
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
                <div className="card large grey lighten-4">
                  <div className="card-image">
                    <img
src={item.urlToImage} alt={item.title}
                      id="cardStyle" />
                  </div>
                  <div className="card-content">
                    <span className="card-title">{item.title}</span>
                    <p>{item.description}</p>
                  </div>
                  <div className="card-action">
                    <a href={item.url} target={'#'}>{'Read More'}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
