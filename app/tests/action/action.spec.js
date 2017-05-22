
import { expect } from 'chai';
import * as Actions from '../../action/NewsAction';
import Dispatcher from '../../dispatcher/dispatcher';
import*  as api from './mockData';
import axios from 'axios';
import sinon from 'sinon';

const dispatcher = sinon.spy(Dispatcher, 'dispatch');
const response = api.apiCall;
const headlineRes = api.headlineApi;


describe('getSources action method using Promises', () => {

  it('Should dispatch the news source event when called', () => {
      expect(dispatcher, {
        type: 'GET_SOURCES',
        payLoad: response,
      });
  });
  it('Should be a function', () => {
    expect(Actions.getSources).to.be.a('function');
  });
});

describe('Get news headline action method with promises', () => {

  it('Should dispatch the news articles when called', () => {
      expect(dispatcher, {
        type: 'GET_ARTICLES',
        payLoad: headlineRes,
      });
  });

  it('should be a function', () => {
    expect(Actions.getNewsHeadlines).to.be.a('function');
  });
});

