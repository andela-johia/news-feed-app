import Dispatcher from '../dispatcher/dispatcher';
import Api from '../components/Api';

/**
 * Gets the new sources and news headline from the API and the dispatcher
 * dispatches it to the store.
 * @class Action
 */
class NewsAction {

  /**
   *
   *This function gets the sources JSON data from the api function
   * @static
   * @returns {array} sources - returns an array of sources
   * @memberof Action
   */
  static getSources() {
    return Api.getNewsFeed().then((result) => {
      Dispatcher.dispatch({
        type: 'GET_SOURCES',
        payLoad: result,
      });
    });
  }

  /**
   *
   *This function get the headlines JSON data from the api function
   * @static
   * @return {array} articles - dispatches an array of articles
   * @param {string} source - name of the source
   * @param {array} sortBy - sort by parameter (top or latest)
   * @memberof Action
   */
  static getNewsHeadlines(source, sortBy) {
    return Api.getHeadLines(source, sortBy).then((articles) => {
      Dispatcher.dispatch({
        type: 'GET_ARTICLES',
        payLoad: articles,
      });
    });
  }
}

export default NewsAction;

