import axios from 'axios';

const baseUrl = 'https://newsapi.org/v1/';

/**
 * Gets news sources and new headline from the api
 * @class Api
 */
class Api {
  /**
   *Gets the news sources from the Newsapi url and returns the JSON
   data as a promise value
   * @export
   * @returns {object | error} - returns different news sources in a JSON object
   */
  static getNewsFeed() {
    const encodedURI = `${baseUrl}sources?language=en`;
    return axios.get(encodedURI)
      .then(res => res.data.sources).catch(error => error);
  }
  /**
   *Gets the news articles for a particular source-id and returns it as
    a promise value.
   * @export
   * @param {string} source - source-id for a particular news source
   * @param {array} sortBy - sortBy parameter.
   * @returns {array| error} - returns an array of articles for each news source
   */
  static getHeadLines(source, sortBy) {
    const encodedUrl = `${baseUrl}articles?source=${source}`;
    const url = `${encodedUrl}&sortBy=${sortBy}&apiKey=${process.env.API_KEY}`;
    return axios.get(url)
      .then(res => res.data.articles).catch(error => error);
  }
}

export default Api;

