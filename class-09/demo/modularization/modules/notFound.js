'use strict';

const notFound = (request, response) => {
  console.log('route not found!');
  response.status(404).send('sorry that page does not exist!');
}

module.exports = notFound;
