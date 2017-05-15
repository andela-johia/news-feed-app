import axios from 'axios';

 /**
  *Gets the news sources from the Newsapi url and returns the JSON data as a promise value
  *
  * @export
  * @returns - returns different news sources in a JSON object
  */
export function getNewsFeed() {
  const encodedURI = 'https://newsapi.org/v1/sources';
  return axios.get(encodedURI)
    .then(res => res.data.sources).catch(error => error);
}
/**
 *Gets the news articles for a particular source-id and returns it as a promise value.
 *
 * @export
 * @param {any} source - source-id for a particular news source
 * @param {any} sortBy - sortBy parameter.
 * @returns
 */
export function getHeadLines(source, sortBy) {
  const API_KEY = '213327409d384371851777e7c7f78dfe';
  const url = `https://newsapi.org/v1/articles?source=${source}&sortBy=${sortBy}&apiKey=${API_KEY}`;
  return axios.get(url)
    .then(res => res.data.articles).catch(error => error);
}
