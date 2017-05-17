
import { expect } from 'chai';
import * as Actions from '../action/NewsAction';
import Dispatcher from '../dispatcher/dispatcher';
import apiCall from './mockData';
import axios from 'axios';
import sinon from 'sinon';

const dispatcher = sinon.spy(Dispatcher, 'dispatch');



describe('getSources action method using Promises', () => {
  it('should have the dispatcher called ', (done) => {
    Actions.getSources;
    setTimeout(() => {
      expect(dispatcher).to.have.been.called;
      done();
    }, 0);
  });

  it('Should get the news source event when called', () => {
    Actions.getSources;
    setTimeout(() => {
      expect(dispatcher, {
        type: 'GET_SOURCES',
        data: 'result',
      });
    }, 0);
  });
});

describe('Get news headline action method with promises', () => {
  it('should have the dispatcher called', () => {
    Actions.getNewsHeadlines();
    setTimeout(() => {
      expect(dispatcher).to.have.been.called;
      done();
    });
  }, 0);

  it('Should get the news articles when called', () => {
    Actions.newsHeadlines;
    setTimeout(() => {
      expect(dispatcher, {
        type: 'GET_ARTICLES',
        data: articles,
      });
      done();
    }, 0);
  });
});

