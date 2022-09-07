// LAB 11 - FEATURED TASKS
// Add Mongoose to your server. Ensure your local Mongo database is running. Connect to the Mongo database from within your server code.
// Modularize your code by putting your schema and model in its own separate file and requiring the schema into the files that need access to it.
// Create a `/books` route. Use a REST client to hit the route, so you can continually verify what your server is returning.

// LAB 12 - FEATURED TASKS
// Add a new route and handler function to your server, to respond to `POST` requests to `/books`. This is your book-creation end point. Verify it's working by sending a raw POST request via your REST Client.
// Be sure to include server-side error checking, in case something goes wrong. Respond with appropriate status codes, if anything goes wrong. Verify with your REST Client.
// Add a server end point to handle `DELETE` requests to `/books/:id`.

// LAB 13 - FEATURED TASKS
// Add server code to handle `PUT` requests to a `/book/:id` route. Return the updated book.

'use strict';

// Requires
require('dotenv').config();
const express = require('express');
const cors = require('cors');
// refactored from lab11 to include POST, DELETE and PUT handlers
const Handler = require('./modules/handlers');
const verifyUser = require('./modules/auth');

const app = express();

// Middleware
app.use(cors());
// Without this line of code, the request.body will come in as undefined
app.use(express.json()); // needed for labs 12 and 13
// This will run the "verify" code on every route automatically
// If the user is valid, we'll have them in request.user in every route!
// If not, it'll throw an error for us
app.use(verifyUser);

const PORT = process.env.PORT || 3002;

// Mongoose
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', _ => {
  console.log('We\'re connected! to Mongo Atlas!');
});

// Test Route
app.get('/test', (request, response) => {
  response.send('testing testing...is this thing on?');
});

// Routes
app.get('/books', Handler.getBooks); // Lab 11
app.post('/books', Handler.createBook); // lab 12
app.delete('/books/:id', Handler.deleteBook); // lab 12
app.put('/books/:id', Handler.updateBook); // lab 13
app.get('/user', Handler.handleGetUser); // lab 15

// Not Found
app.get('*', (request, response) => {
  response.status(404).send('Sorry, that page does not exist. Try again.');
});

// error handling middleware must be the last app.use()
app.use( (error, request, response, next ) => {
  response.status(500).send(`My Bad! Error occured in the server! Someone call the developer... ${error.customMessage} ${error.message}`);
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));