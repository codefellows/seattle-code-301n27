'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL);

const Book = require('../models/book.js');

async function clear() {
  try {
    await Book.deleteMany({});
    console.log('Books deleted!');
  } catch(error) {
    console.error('something went wrong when clearing the DB: ', error);
  } finally {
    mongoose.disconnect();
  }
}

clear();
