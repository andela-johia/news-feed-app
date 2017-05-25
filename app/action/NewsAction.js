import Dispatcher from '../dispatcher/dispatcher';
import Api from '../components/Api';

class Action {
  /**
   * This function get the news source from the api function a dispatcher
   *  dispatches to the store.
   * @export
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
   * @export
   * @param {string} source - name of the source
   * @param {array} sortBy - sort by parameter (top or latest)
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

export default Action;

