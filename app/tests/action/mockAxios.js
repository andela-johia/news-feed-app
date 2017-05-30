import * as mock from '../testData/mockActionData';

const mockApiCall = {
  get() {
    return Promise.resolve(mock.mockNewsData);
  },

  get() {
    return Promise.resolve(mock.headlineResults);
  }
}
