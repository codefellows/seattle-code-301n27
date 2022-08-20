'use strict';

const mongoose = require('mongoose');
require('dotenv').config();

// connect to Mongo using Mongoose
mongoose.connect(process.env.MONGO_CONNECTION);
// this is where the connection actually happens
const db = mongoose.connection;
// is turning the db on and checking for any errors
db.on('error', console.error.bind(console, 'connection error:'));
// if my db is connected properly, I should see this console.log after "listening on PORT 3001"
db.once('open', function() {
  console.log('Mongoose is connected for seeding!');
});

const Cat = require('./models/cat');

// create a function that seeds the database
async function seed() {
  console.log('seeding database...');
  // seed the database with some cats so I can retrieve them
  const myCat = new Cat({
    name: 'Mac',
    color: 'grey',
    hasClaws: true,
    location: 'Texas'
  });
  myCat.save(function (err) {
    if (err) console.error(err);
    else console.log('saved Mac in database!');
  });

  // alternately...
  await Cat.create({
    name: 'Hootie',
    color: 'brownish w/ black and white',
    hasClaws: true,
    location: 'St. Louis'
  });

  console.log('saved Hootie into database');

  console.log('done seeding!');

  mongoose.disconnect();
}

seed();
