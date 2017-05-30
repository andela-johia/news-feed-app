import * as mock from '../testdata/mockActionData';

const mockApiCall = {
  get() {
    return Promise.resolve(mock.mockNewsData);
  },

  get() {
    return Promise.resolve(mock.headlineResults);
  }
}
