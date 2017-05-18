
import { expect } from 'chai';
import * as Actions from '../../action/NewsAction';
import Dispatcher from '../../dispatcher/dispatcher';
import apiCall from './mockData';
import axios from 'axios';
import sinon from 'sinon';

const dispatcher = sinon.spy(Dispatcher, 'dispatch');



describe('getSources action method using Promises', () => {
  it('should have the dispatcher called ', () => {
    Actions.getSources;
      expect(dispatcher).to.have.been.called;
  });

  it('Should get the news source event when called', () => {
    Actions.getSources;
      expect(dispatcher, {
        type: 'GET_SOURCES',
        data: 'result',
      });
  });
});

describe('Get news headline action method with promises', () => {
  it('should have the dispatcher called', () => {
    Actions.getNewsHeadlines;
      expect(dispatcher).to.have.been.called;
    });

  it('Should get the news articles when called', () => {
    Actions.getNewsHeadlines;
      expect(dispatcher, {
        type: 'GET_ARTICLES',
        data: 'articles',
      });
  });
});

