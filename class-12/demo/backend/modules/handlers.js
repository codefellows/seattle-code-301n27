'use strict';

const Cat = require('../models/cat');

// refactoring from lab11 to include POST and DELETE handler functions
const Handler = {};

Handler.getCats = async (request, response, next) => {
  try {
    // is I pass in a empty object, that tells Mongoose to get ALL the documents from the database
    const cats = await Cat.find({});
    response.status(200).send(cats);

    // ERROR HANDLING TESTING PURPOSES ONLY: This shoud cause an error that'll end up in the catch() below and then sent to the middleware in the server.js
    // let dataThatDoesntExist = require('./this-data-does-not-exist.js');
    // response.send(dataThatDoesntExist);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

Handler.createCat = async (request, response, next) => {
  try {
    const cat = await Cat.create(request.body);
    // 201 status indicates that the request has succeeded and has led to the creation of a resource.
    response.status(201).send(cat);

    // ERROR HANDLING TESTING PURPOSES ONLY: This shoud cause an error that'll end up in the catch() below and then sent to the middleware in the server.js
    // let dataThatDoesntExist = require('./this-data-does-not-exist.js');
    // response.send(dataThatDoesntExist);
  } catch (error) {
    error.customMessage = 'Something went wrong when creating your cat: ';
    console.error(error.customMessage + error);
    next(error);
  }
};

Handler.deleteCat = async (request, response, next) => {
  try {
    console.log('Request Obj in Delete Cat: ', request);
    await Cat.findByIdAndDelete(request.params.id);
    // Express response objects will not forward a response body if the response status code is (204) "No Content".
    response.status(200).send('your cat is deleted!');

    // ERROR HANDLING TESTING PURPOSES ONLY: This shoud cause an error that'll end up in the catch() below and then sent to the middleware in the server.js
    // let dataThatDoesntExist = require('./this-data-does-not-exist.js');
    // response.send(dataThatDoesntExist);
  } catch (error) {
    error.customMessage = 'Something went wrong when deleting your cat: ';
    console.error(error.customMessage + error);
    next(error);
  }
};

module.exports = Handler;
