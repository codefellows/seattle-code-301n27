'use strict';

// requires are similar to imports
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const lists = require('./data/shoppinglist.json');

// create an instance of an Express server
const app = express();

// middleware - tell our express app to use cors
app.use(cors());

// set our PORT variable to tell our express app where to serve our server
// PORT is NOT bananas! It must be named exactly this, because Heroku looks for a variable named PORT
const PORT = process.env.PORT || 3002;

class List {
  constructor(type){
    // use the find method to find the type of list we want to return
    let { listName, items } = lists.lists.find(list => list.listName === type);
    this.type = listName; // suplies vs food list
    this.itemValues = items; // array of items
  }

  // a method that gets just the name and desc properties from our item objects in the itemValues array
  getItems() {
    return this.itemValues.map(item => ({
      name: item.name,
      description: item.description
    }));
  }
}

// define my home route (/) aka endpoint
app.get('/', (request, response) => {
  response.send('testing, testing, is this thing on??');
});

// an endpoint that gets the shoppinglist data
app.get('/shoppinglist', (req, res, next) => {
  try {
    // needs to process query params for the type of list
    const type = req.query.type;
    console.log('query params: ', req.query);
    console.log('type: ', type);

    const shoppingList = new List(type);
    const listItems = shoppingList.getItems();
    res.status(200).send(listItems);
  } catch (error) {
    // next can be used to pass an error to express for the error middleware to handle
    next(error);
  }
});

app.get('/fakeError', (request, response, next) => {
  try {
    const listThatDoesntExists = require('./data/listThatDoesntExists.js');
    response.send(listThatDoesntExists);
  } catch (error) {
    next(error.message);
  }
});

// error handling middleware MUST be the last app.use() defined
app.use((error, request, response, next) => {
  console.log(error);
  response.status(500).send(error);
});

// this line of code needs to be the very last line in this file
// listen tells our app which port to listen on
// in other words, which port to serve our server on
app.listen(PORT, console.log(`listening on PORT ${PORT}`));
