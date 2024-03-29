# Updating Resources

## DEI Reminder

In our next class we will discuss Diversity, Equity and Inclusion.  Be sure to complete [the reading assignment](https://codefellows.github.io/code-301-guide/curriculum/class-14/DISCUSSION) before class begins in order to achieve full credit for the activity.

## Overview

Today we do the final step in full CRUD functionality for our database. This step is to implement the ability to update records that exist in our database.

## Class Outline

- Warm-up exercise
- Review code challenges
- Code review of lab assignment
- Introduce new code challenge topic
  - repl.it demo: <https://replit.com/@HexxKing1/301n27-Code-Challenge-String-Manipulation#index.js>
- Updating Resources
- Code demo
- Lab preview

## Learning Objectives

### Students will be able to

#### Describe and Define

- UPDATE
- PUT

#### Execute

- Be able to update a resources in a mongo database
- Be able to update a resource instantly in a React application and have that resource state persist on reload

## Notes

1. Why do we need to talk about Diversity and Inclusion?

1. What does the U stand for in CRUD?

1. How do we find a record by id and update it in Mongoose?

1. Sending an axios request to update a record:

  ```javaScript
  const SERVER = 'http://localhost:3001';
  // id of the record to update
  const id = 2;
  // the entire record with the updated information
  const updatedRecord = {name: 'bobby', age: 105};

  axios.put(`${SERVER}/${id}`, { recordToUpdate: updatedRecord });
  ```

1. Updating a record server side:

  ```javaScript
  app.put('/someRoute/:id', callback);

  callback(request, response) {
    const record = request.body.recordToUpdate;
    const id = request.query.params.id;

    Model.findOneAndUpdate(id, record);
  }
  ```

1. Updating a record server side when the record is nested inside of a user object (like the books in the user)

  ```javaScript
  app.put('/someRoute/:index', callback);

  callback(request, response) {
    const email = request.body.email; // send the email in the body as well as the record
    const record = request.body.recordToUpdate;
    const index = request.query.params.index;

    Model.findOne({ email }, (err, person) => {
      if(err) console.error(err);
      // now that we have the user, we need to replace the record
      const newBooks = person.books.splice(index, 1, record);
      // replace the books array with the new books array
      person.books = newBooks;
      // save the updated person in the DB
      person.save()
    })
  }
  ```

