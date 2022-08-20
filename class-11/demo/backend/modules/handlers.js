'use strict';

const Cat = require('../models/cat');

const getCats = async (request, response, next) => {
  try {
    // is I pass in a empty object, that tells Mongoose to get ALL the documents from the database
    // const cats = await Cat.find({});
    // response.status(200).send(cats);

    // ERROR HANDLING TESTING PURPOSES ONLY: This shoud cause an error that'll end up in the catch() below and then sent to the middleware in the server.js
    let dataThatDoesntExist = require('./this-data-does-not-exist.js');
    response.send(dataThatDoesntExist);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = getCats;
