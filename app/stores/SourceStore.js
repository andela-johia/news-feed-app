import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/dispatcher';
/**
 *Listens and stores data from the action
 * @class FeedStore
 * @extends {EventEmitter}
 */
class SourceStore extends EventEmitter {
  constructor() {
    super();
    this.sources = [];
  }

  /**
   * stores and returns a change in the news sources data from the action upon
   * mounting in the source component.
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
   * @returns
   *
   * @memberof FeedStore
   */

  /**
   * This function listens for payLoad from the action and stores them
   * according to their action type.
   *
   * @param {object} action - The payload delivered by the dispatcher to the store.
   *
   * @memberof FeedStore
   */
  handleSources(action) {
    if (action.type === 'GET_SOURCES') {
      this.sources = action.payLoad;
      this.emit('change');
    }
  }

}
const sourcestore = new SourceStore();

Dispatcher.register(sourcestore.handleSources.bind(sourcestore));

export default sourcestore;
