import * as mock from './mockData';

const mockApiCall = {
  get() {
    return Promise.resolve(mock.mockNewsData);
  },

  get() {
    return Promise.resolve(mock.headlineResults);
  }
}
