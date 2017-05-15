import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/dispatcher';

/**
 *Listens and stores data from the action
 * @class FeedStore
 * @extends {EventEmitter}
 */
class FeedStore extends EventEmitter {
  constructor() {
    super();
    this.sources = [];
    this.articles = [];
  }

  /**
   * stores and returns a change in the news sources data from the action upon
   *  mounting in the source component.
   *
   * @returns
   *
   * @memberof FeedStore
   */
  fetchSources() {
    return this.sources;
  }

  /**
   * Returns a change in the news article data upon mounting in the headline
   *  component.
   *
   * @returns
   *
   * @memberof FeedStore
   */
  fetchArticles() {
    return this.articles;
  }

  /**
   * This function listens for payLoad from the action and stores them
   * according to their action type.
   *
   * @param {any} action - The payload delivered by the dispatcher to the store.
   *
   * @memberof FeedStore
   */
  handleSourcesArticles(action) {
    switch (action.type) {
      case 'GET_SOURCES': {
        this.sources = action.payLoad;
        this.emit('change');
        break;
      }
      case 'GET_ARTICLES': {
        this.articles = action.payLoad;
        this.emit('change');
        break;
      }
    }
  }
}
const feedstore = new FeedStore();

Dispatcher.register(feedstore.handleSourcesArticles.bind(feedstore));

export default feedstore;
