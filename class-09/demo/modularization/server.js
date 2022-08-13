'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const getJobs = require('./modules/jobs');
const notFound = require('./modules/notFound');

const app = express();
app.use(cors());

const PORT = process.env.PORT;

app.get('/', (request, response) => {
  response.send('testing testing, is this thing on??');
});

app.get('/jobs', getJobs);

// what happens if the client arrives at an endpoint that does not exists?
// Not Found will be right ABOVE your last app.use that defines your error handling middleware
app.use('*', notFound);



app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
