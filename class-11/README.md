# Mongo, Mongoose and Data Modeling

## Overview

Today is the first day of our new project, a mobile-only book collection. You will be gradually working towards a full-scale application, complete with an express server, persistence in a Mongo database, authentication, and the ability to view, add, update and delete books from your React front end.

To start, we will introduce Mongodb and Mongoose. We will create data models and hard code some data to store in our database so that our front end can retrieve that data. We will introduce `CRUD` and focus on the `R`:`READ`.

## Class Outline

- Warm-up exercise
- Review code challenges
- Code review of lab assignment
- Introduction of today's code challenge topic
  - repl.it demo: <https://replit.com/@HexxKing1/301n27-Code-Challenge-Chaining-Methods#index.js>
- Mongo, Mongoose, Data Modeling
- Code Demo
- Lab Preview

## Learning Objectives

### Students will be able to

#### Describe and Define

- CRUD
  - the four basic operations (create, read, update, and delete) of data storage
- MongoDB
  - Mongo is the database it's self. It is the storage.
  - kinda like local storage or cache object, but better :)
  - MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL (non-relational) database program, MongoDB uses JSON-like documents with optional schemas.
- Atlas
  - this is the cloud platform that will serve our Mongo Database
  - this is like Heroku or Netlify who serves our frontend or backend apps, except Atlas only serves databases
- Mongoose
  - Mongoose is the tool that allows us to talk to our Mongo Database
  - it is like Axios, in the fact that is carries all our requests to our MongoDB
  - Mongoose is a JavaScript object-oriented programming library that creates a connection between MongoDB and the Express web application framework.
- ORM aka Object-Relational Mapping
  - it is a technique that maps data from a database to "incompatible type systems" using object-oriented programming languages
  - <https://blog.bitsrc.io/what-is-an-orm-and-why-you-should-use-it-b2b6f75f5e2a>
- GET
  - The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.

#### Execute

- Be able to create a data model or schema
- Be able to set up a Mongo database using Mongoose
- Be able to retrieve all of the entries from a Mongo database using Mongoose

## Notes

1. What does the R stand for in CRUD?
- READ!

1. What is an ORM?
  - it is a technique that maps data from a database to "incompatible type systems" using object-oriented programming languages
  - <https://blog.bitsrc.io/what-is-an-orm-and-why-you-should-use-it-b2b6f75f5e2a>

1. How are Mongo and Mongoose related?
  - Mongo is the place where our data lives and Mongoose is the tool that allows us to talk to that database.

1. Why do we need to use Mongoose at all?
  - Without it, we would have to write all the code ourselves, from scratch to make the calls to our database. Mongoose gives us all that code for free!

1. Where does Mongo live?
  - It can live locally on your computer or it can be hosted in the cloud on Atlas.

1. Mongoose:

- step 1: Bring in Mongoose

  ```javaScript
  const mongoose = require('mongoose');
  // making a database called cats-database
  mongoose.connect('mongodb://localhost:27017/cats-database');

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('Mongoose is connected')
  });
  ```

- step 2: Make a schema

```javaScript
const catSchema = new mongoose.Schema({
  name: {type: String}
});

```

- step 3: Make a model from the schema

```javaScript
const CatModel = mongoose.model('cat-collection', catSchema);
```

- step 4: Create and save a record

```javaScript
const fluffy = new CatModel({name:'fluffy'});
fluffy.save();
```

- step 5: Gets all the records from the database

```javaScript
  CatModel.find((err, cat) => {
    if(err) return console.error(err);
    console.log({cat})
  });
```

- Gets the record where the name is 'fluffy'

```javaScript
  CatModel.find({name:'fluffy'}, (err, cat) => {
    if(err) return console.error(err);
    console.log({cat})
  });
```

1. What resources can I use to help me with my lab and to learn more?
- [mongoose](https://mongoosejs.com/docs/)
- [MongoDB CRUD Operations](https://www.mongodb.com/docs/manual/crud/#mongodb-crud-operations)
- [Data Modeling](https://www.mongodb.com/docs/manual/core/data-modeling-introduction/)
- [Mongosh Documentation](https://www.mongodb.com/docs/mongodb-shell/)
- [Mongoose Schema Data Types](https://mongoosejs.com/docs/schematypes.html)


## Hosted Mongo Databases: Atlas
While you can run Mongo on your own machines, it's quite common to run an instance of Mongo in the cloud so that you can take advantage of better hardware, more memory and higher speed networks. Mongo offers a hosted cloud database service called "Atlas" ... once you've got this setup, it's easy to connect your API servers from anywhere in the world to use it.

<https://www.mongodb.com/cloud/atlas/register2>

1. Sign Up
1. Setup the organization
   - Name your organization and project
   - These can be whatever you want to call them
   - Set Preferred Language (Javascript)
1. Pick the "Free" (Shared Cluster) option
1. Create Cluster
   - Choose AWS
   - Choose the closest region to your location (i.e. Oregon)
1. Create a DB User
   - Click the "Database Access" link
   - Add a new user
     - Choose Password Authentication
     - Choose a username and password
     - For access rights, choose "Atlas Admin"
1. Enable Network Access
   - Click Network Access Button
   - Click "Add IP Address"
   - Choose the "Allow Access from Anywhere" option
   - Click "Confirm"
1. Get your connection string
   - Click "Clusters" button on the left
   - Click on the "Connect" button on the cluster screen
   - To connect to your new database with the command line:
     - Choose the "Connect with Mongo Shell" option
     - Copy out the connection string
     - This will look something like this:
     - `mongo "mongodb+srv://cluster0.xtrut.mongodb.net/<dbname>" --username dba`
     - Replace `<dbname>` with the name of the database you want to use for your application, for example 'people'
   - To connect your Node or Express application:
     - Choose the "Connect your Application" option
     - This will look something like this:
     - `mongodb+srv://dba:<password>@cluster0.xtrut.mongodb.net/<dbname>?retryWrites=true&w=majority`
     - Replace `<password>` with the password you created earlier
     - Replace `<dbname>` with the name of the database you want to use for your application, for example 'people'
     - Use this as  `MONGODB_URI` in your .env file or at Heroku when you deploy


## Feedback Overview
- "I found it really helpful when Hexx pointed out which error messages she was looking at to figure out why some code broke. I'm not always sure where to look first and what to focus on, and some error messages are harder to understand."
- "I often find it difficult to debug broken API calls, since sometimes the error messages seem misleading. For example, today I was getting status code 500 for my movies API call, which made me think the API call was going through but I was getting a failed response, but the error was that I had /weather instead of /movies in my backend import statement.  And for something like that, I would have expected a different error message.  So I guess I'm curious about what to look for with API errors.  I know there's the Network tab in the chrome dev tools that shows more info about those calls - should I be looking at that if the console doesn't tell me much?"
- "We've been debugging a lot more now, which I appreciate."
