'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const getCats = require('./modules/handlers');

const PORT = process.env.PORT || 3002;

// connect to Mongo using Mongoose
mongoose.connect(process.env.MONGO_CONNECTION);
// this is where the connection actually happens
const db = mongoose.connection;
// is turning the db on and checking for any errors
db.on('error', console.error.bind(console, 'connection error:'));
// if my db is connected properly, I should see this console.log after "listening on PORT 3001"
db.once('open', function() {
  console.log('Mongoose is connected to Atlas!');
});

const app = express();
app.use(cors());

app.get('/', (request, response) => {
  response.send('testing testing is this thing on??');
});

app.get('/cats', getCats);

app.use((error, request, response, next) => {
  response.status(500).send(`Error occurred in the server! Someone call the developer...${error.message}`);
});

app.listen(PORT, () => console.log(`Listening in on PORT ${PORT}`));
