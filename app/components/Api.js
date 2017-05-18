import axios from 'axios';


const baseUrl = 'https://newsapi.org/v1/';
  /**
   *Gets the news sources from the Newsapi url and returns the JSON data as a promise value
   *
   * @export
   * @returns - returns different news sources in a JSON object
   */
const getNewsFeed = () => {
  const encodedURI = `${baseUrl}sources?language=en`;
  return axios.get(encodedURI)
    .then((res) => {
      return res.data.sources;
    }).catch((error) => {
      return error;
    });
};
  /**
   *Gets the news articles for a particular source-id and returns it as a promise value.
   *
   * @export
   * @param {string} source - source-id for a particular news source
   * @param {array} sortBy - sortBy parameter.
   * @returns - returns an array of articles for each news source
   */
const getHeadLines = (source, sortBy) => {
  const url = `${baseUrl}articles?source=${source}&sortBy=${sortBy}&apiKey=${process.env.API_KEY}`;
  return axios.get(url)
    .then((res) => {
      return res.data.articles;
    }).catch((error) => {
      return error;
    });
};

export { getNewsFeed, getHeadLines };

