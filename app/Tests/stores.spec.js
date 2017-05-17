import { expect } from 'chai';
import Dispatcher from '../dispatcher/dispatcher';
import FeedStore from '../stores/SourceStore';
import sinon from 'sinon';
import getSources from '../action/NewsAction';
import rewire from 'rewire';

const store = rewire('../stores/SourceStore');
const registerSpy = sinon.spy(Dispatcher, 'register');

describe('GET_SOURCES', () => {

  const actionSources = () => ({
    action: {
      type: 'GET_SOURCES',
      data: [{
        id: 'abc-news-au',
        name: 'ABC News (AU)',
        description: "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
        url: 'http://www.abc.net.au/news',
        category: 'general',
        language: 'en',
        country: 'au',
        sortBysAvailable: [
          'top',
        ],
      }],
    },
  });
  beforeEach(() => {
    Dispatcher.register(store);
  });
  afterEach(() => {
    registerSpy.restore();
  });

  it('should register a callback with the dispatcher', () => {
    expect(registerSpy.callCount).to.equal(1);
  });
  it('Should register an object containing the actionType and the payload', () => {
    store.actionSources;
    setTimeout(() => {
      expect(registerSpy).to.be.called;
    }, 0);
  });
});
