import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/dispatcher';

class HeadlineStore extends EventEmitter {
  constructor() {
    super();
    this.articles = [];
  }
/**
   * Returns a change in the news article data upon mounting in the headline
   *  component.
   *
   * @returns
   *
   * @memberof FeedStore
**/
  fetchArticles() {
    return this.articles;
  }

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

