'use strict';

require('dotenv').config();
const mongoose = require('mongoose');

// connect to Mongo using Mongoose
mongoose.connect(process.env.MONGO_CONNECTION);
// this is where the connection actually happens
const db = mongoose.connection;
// is turning the db on and checking for any errors
db.on('error', console.error.bind(console, 'connection error:'));
// if my db is connected properly, I should see this console.log after "listening on PORT 3001"
db.once('open', function() {
  console.log('Mongoose is connected for clearing the database!');
});

const Cat = require('./models/cat');

async function clear() {
  try {
    await Cat.deleteMany({});
    console.log('Books deleted! Database cleared!');
  } catch(error) {
    console.error(`something went wrong when clearing the DB: ${error}`);
  } finally {
    mongoose.disconnect();
  }
};

clear();
