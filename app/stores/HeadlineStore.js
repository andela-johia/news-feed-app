import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/dispatcher';

/**
 *Listens and stores data from the action according to their action type
 * @class HeadlineStore
 * @extends {EventEmitter}
 */
class HeadlineStore extends EventEmitter {
  constructor() {
    super();
    this.articles = [];
  }
/**
 * Returns a change in the news article data upon mounting in the headline
 *  component.
 * @returns {object} - updated articles props
 * @memberof FeedStore
**/
  fetchArticles() {
    return this.articles;
  }

/**
 * This function listens for payLoad from the action and stores them
 * according to their action type.
 * @param {object} action - payload from the getNewsHeadline Action function
 * @return {object} updated news articles from the action
 * @memberof HeadlineStore
 */
  handleArticles(action) {
    if (action.type === 'GET_ARTICLES') {
      this.articles = action.payLoad;
      this.emit('change');
    }
  }
}

const headlineStore = new HeadlineStore();
Dispatcher.register(headlineStore.handleArticles.bind(headlineStore));

export default headlineStore;

