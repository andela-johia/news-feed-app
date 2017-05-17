import axios from 'axios';


  /**
   *Gets the news sources from the Newsapi url and returns the JSON data as a promise value
   *
   * @export
   * @returns - returns different news sources in a JSON object
   */
const getNewsFeed = () => {
  const encodedURI = 'https://newsapi.org/v1/sources?language=en';
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
   * @param {any} source - source-id for a particular news source
   * @param {any} sortBy - sortBy parameter.
   * @returns
   */
const getHeadLines = (source, sortBy) => {
  const url = `https://newsapi.org/v1/articles?source=${source}&sortBy=${sortBy}&apiKey=${process.env.API_KEY}`;
  return axios.get(url)
    .then((res) => {
      return res.data.articles;
    }).catch((error) => {
      return error;
    });
};

export { getNewsFeed, getHeadLines };

