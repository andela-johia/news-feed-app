import { expect } from 'chai';
import Dispatcher from '../../dispatcher/dispatcher';
import SourceStore from '../../stores/SourceStore';
import sinon from 'sinon';
import getSources from '../../action/NewsAction';
import rewire from 'rewire';
import getSource from '../testdata/mockStoreData';

const store = rewire('../../stores/SourceStore');
const registerSpy = sinon.spy(Dispatcher, 'register');

describe('Source Store', () => {

    Dispatcher.dispatch ({
      type: 'GET_SOURCES',
      data: getSource,
    });
  beforeEach(() => {
    Dispatcher.register(store);
  });

  afterEach(() => {
    registerSpy.restore();
  });

  it('Should register a callback with the dispatcher', () => {
    expect(registerSpy.callCount).to.equal(1);
  });
  it('Should register an object containing the actionType and the payload', () => {
    SourceStore.fetchSources;
    expect(registerSpy).to.be.called;

  });
  it('Should have an emit change event listener method', () => {
    expect(SourceStore.emit).to.be.defined;
  });
  it('Should have a remove listener method present', () => {
    expect(SourceStore.removeListener).to.be.defined;
  });
  it('Should have an on function present', () => {
    expect(SourceStore.on).to.be.defined;
  });
  it('Should recieve the payload from the dispatcher', () => {
     const source = getSource;
     const actualSource = SourceStore.fetchSources();
     expect(source).to.equal(actualSource);
  });

});
