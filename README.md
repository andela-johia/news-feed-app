# News Feed application

[![Coverage Status](https://coveralls.io/repos/github/andela-johia/news-feed-app/badge.svg?branch=deployment)](https://coveralls.io/github/andela-johia/news-feed-app?branch=deployment)
[![Build Status](https://travis-ci.org/andela-johia/news-feed-app.svg?branch=deployment)](https://travis-ci.org/andela-johia/news-feed-app)
[![Code Climate](https://codeclimate.com/github/codeclimate/codeclimate/badges/gpa.svg)](https://codeclimate.com/github/codeclimate/codeclimate)

## Introduction
* The News feed application consumes a news api to view new sources and also current new headline.
The app requires the user to sign in with a google plus account and the app has more than 60 news sources
to choose from. The application offers an easy to use responsive UI. To view the project visit this [link](https://news-central-12.herokuapp.com/#/)


## Key Features of this Application
* Google plus sign in.
* Search for new sources.
* View new sources.
* Sort articles for every news sources.
* View every article on the sources homepage.

## Usage
* Sign in with Google plus account to view news sources.
* Search for any news source and view their articles.
* Scroll through the news sources and sort between top and latest news articles.
* On the headline link click 'READ MORE' to be redirected to the source link.


## Local Installation Guide
* Ensure NodeJS is installed
* clone the repo with the following command `git clone https://github.com/andela-johia/news-feed-app.git`
* Run `npm install` to install all the dependencies needed to run the application
* Install `webpack` globally
* To test the application, run `npm test`
* Run `npm run dev` to start the server and visit `http://localhost:8080`

## Technologies
 * ECMAScript 6: This is the newest version of JavsScript with new features such as arrow functions, spread operator and many more.
 * REACT: REACT is a JavaScript library that was developed by Facebook and is used for developing web application. REACT is the 'VIEW' in the MVC architecture. Web pages are structured in REACT with componenents which are very dynamic.
 * FLUX: Flux is an architecture used for building stable and efficient web applications. Flux design is basically a unidirectional flow of data.



## Dependencies
* axios
* babel-loader
* babel-preset-es2015
* babel-preset-react
* chai
* eslint
* express
* flux
* history
* prop-types
* react
* react-dom
* react-google-login
* react-router
* react-router-dom
* webpack
* Eslint
* Enzyme

## Limitations
* Users are only able to sign in with google plus.
* Users cannot mark articles as favourites.
* Users cannot share articles on Facebook or Twitter.

## Contributing to News Feed Application
 Contributions are always welcomed to the project. If you are interested in enhancing the features in the project you can fork the project to your repo, create a new branch and make the necessary enhancement. If you are unsure about certain areas in the project feel to ask for assistance. If the you wish to update an existing enhancement submit a pull request.



## License
This project is authored by Johnbosco Ohia it is licensed under the MIT license.

