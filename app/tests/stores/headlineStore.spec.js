import { expect } from 'chai';
import Dispatcher from '../../dispatcher/dispatcher';
import HeadlineStore from '../../stores/HeadlineStore';
import sinon from 'sinon';
import getSources from '../../action/NewsAction';
import rewire from 'rewire';
import getHeadline from '../testdata/mockStoreData';

const store = rewire('../../stores/HeadlineStore');
const registerSpy = rewire('../../dispatcher/dispatcher');


describe('Headline Store', () => {
    Dispatcher.dispatch ({
      type: 'GET_ARTICLES',
      data: getHeadline,
  });

  it('Should register an object containing the actionType and the payload', () => {
    HeadlineStore.fetchArticles;
    expect(registerSpy).to.be.called;

  });
  it('Should have an emit change event listener method', () => {
    expect(HeadlineStore.emit).to.be.defined;
  });
  it('Should have a remove listener method present', () => {
    expect(HeadlineStore.removeListener).to.be.defined;
  });
  it('Should have an on function present', () => {
    expect(HeadlineStore.on).to.be.defined;
  });
  it('Should recieve the payload from the dispatcher', () => {
     const articles = getHeadline;
     const actualHeadline = HeadlineStore.fetchArticles();
     expect(articles).to.equal(actualHeadline);
  });

});
