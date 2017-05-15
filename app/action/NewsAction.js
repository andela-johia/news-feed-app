import Dispatcher from '../dispatcher/dispatcher';
import * as api from '../components/Api';


/**
 * This function get the news source from the api function a dispatcher dispatches to the store.
 *
 * @export
 */
export function getSources() {
  api.getNewsFeed().then((result) => {
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
 * @param {any} source - name of the source
 * @param {any} sortBy - sort by parameter (top or latest)
 */
export function newsHeadlines(source, sortBy) {
  api.getHeadLines(source, sortBy).then((articles) => {
    Dispatcher.dispatch({
      type: 'GET_ARTICLES',
      payLoad: articles,
    });
  });
}

