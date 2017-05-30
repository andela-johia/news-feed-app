
import { expect } from 'chai';
import Action from '../../action/NewsAction';
import Dispatcher from '../../dispatcher/dispatcher';
import mockNewsData from '../testdata/mockActionData';
import sinon, { mock } from 'sinon';
import axios from './mockAxios';
import headlineResults from '../testdata/mockActionData';

describe('News Actions', () => {
  let dispatcherSpy,
    apiStub;

  beforeEach(() => {
    dispatcherSpy = sinon.spy(Dispatcher, 'dispatch');
    apiStub = sinon.mock(axios, () => axios);
  });

  afterEach(() => {
    dispatcherSpy.restore();
    apiStub.restore();
  });

  describe('getSources',() => {

    it('Should dispatch the news sources to the store', () => {
      Action.getSources().then(() => {
        expect(dispatcherSpy.apiStub).to.have.callCount(1);
        expect(dispatcherSpy).to.have.been.calledWith({
          type: 'GET_SOURCES',
          payLoad: mockNewsData,
        });
      });

  });
  it('Should be a function', () => {
    expect(Action.getSources).to.be.a('function');
  });
});

  describe('getNewsHeadline', () => {

    it('Should dispatch the news articles when called', () => {
      Action.getNewsHeadlines().then(() => {
        expect(dispatcherSpy.apiStub).to.have.callCount(1);
        expect(dispatcherSpy).to.have.been.calledWith({
          type: 'GET_ARTICLES',
          payLoad: headlineResults,
        })
      });
    });

    it('should be a function', () => {
      expect(Action.getNewsHeadlines).to.be.a('function');
    });
  });
});


