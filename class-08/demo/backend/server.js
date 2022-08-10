'use strict';

// requires
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const axios = require('axios');

// instantiate a few instances of dependencies
const app = express();
app.use(cors());

// set a port variable
const PORT = process.env.PORT || 3002;

app.get('/', (request, response) => {
  response.send('testing testing...is this thing on??');
});

app.get('/photos', getPhotos);

async function getPhotos(request, response, next) {
  const query = request.query.searchQuery;
  const url = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}&query=${query}`;

  try {
    const photoResponse = await axios.get(url);
    // console.log(photoResponse.data);
    const photoArray = photoResponse.data.results.map(photo => new Photo(photo));
    response.status(200).send(photoArray);
  } catch(error) {
    console.error(error);
    next(error);
  }
}

class Photo {
  constructor(photoObject) {
    this.img_url = photoObject.urls.regular;
    this.photographer = photoObject.user.name;
  }
}

app.use((error, request, response, next) => {
  response.status(500).send(error.message);
})

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
