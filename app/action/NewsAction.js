import Dispatcher from '../dispatcher/dispatcher';
import * as api from '../components/Api';


/**
 * This function get the news source from the api function a dispatcher dispatches to the store.
 * @export
 */
const getSources = () => {
  api.getNewsFeed().then((result) => {
    Dispatcher.dispatch({
      type: 'GET_SOURCES',
      payLoad: result,
    });
  });
};

/**
 *
 *This function get the headlines JSON data from the api function
 * @export
 * @param {string} source - name of the source
 * @param {array} sortBy - sort by parameter (top or latest)
 */
const getNewsHeadlines = (source, sortBy) => {
  api.getHeadLines(source, sortBy).then((articles) => {
    Dispatcher.dispatch({
      type: 'GET_ARTICLES',
      payLoad: articles,
    });
  });
};

export { getSources, getNewsHeadlines };

