'use strict';

const axios = require('axios');

function getJobs(request, response) {
  const url = `https://boards-api.greenhouse.io/v1/boards/vaulttec/jobs?content=true`;
  axios.get(url)
    .then(res => {
    console.log( res.data );
    const jobArray = res.data.jobs.map(job => new Job(job));
    response.status(200).send(jobArray);
    })
    .catch(error => {
      console.error('error from axios: ', error);
      // this is considered an "anit-pattern"
      // this is NOT the Express way!
      // Please use next()
      response.status(500).send(`server error ${error}`);
    });
};

class Job {
  constructor(obj) {
    this.name = obj.title;
    this.description = obj.content;
    this.departments = this.getNames(obj.departments);
    this.offices = this.getNames(obj.offices);
    this.location = obj.location.name;
    this.url = obj.absolute_url;
  }

  getNames(objects) {
    let names = [];
    for (let i = 0; i < objects.length; i++) {
      names.push(objects[i]);
    }
    return names;
  }
}

module.exports = getJobs;
