# Persistence

## Overview

Today we will talk about in-memory storage as well as dive deeper into modularization and refactorization.

## Class Outline

- Warm-up exercise
- Review code challenges
- Code review of lab assignment
- Introduce new code challenge concept
  - Repl.it Demo:<https://replit.com/@HexxKing1/301n27-Code-Challenge-Nested-Loops#index.js>
- In-memory persistence
- Debugging
- Lab Overview

## Learning Objectives

### Students will be able to

#### Describe and Define

- In Memory Database
- Cache
- Cache Hit
- Cache Miss

#### Execute

- Persist data in memory
- Understand the advantages and drawbacks to persisting data in memory vs using something like a database

## Notes

In-memory databases are purpose-built databases that rely primarily on memory for data storage, in contrast to databases that store data on disk or SSDs. In-memory data stores are designed to enable minimal response times by eliminating the need to access disks.
  - Resource: https://medium.com/@denisanikin/what-an-in-memory-database-is-and-how-it-persists-data-efficiently-f43868cff4c1

- What is a cache?
  - temporary storage
  - it is simply an object that lives in a module in our server code.
  - We are going to store new API data in the cache object for a faster look up when the same query is requested within a certain amount of time.

- What does a cache hit mean? What does a cache miss mean?
  - Cache Hit
    - the data requested is in the cache
  - Cache Miss
    - the data request is NOT in the cache

1. What does the word `debugger` do in your code?

1. What is a breakpoint?

1. List 5 different debugging tools:

1. Adding to the cache:

  ```javaScript
    if(inMemoryDB[ingredient] !== undefined){
      // if the info is in the inMemoryDB, just use that data
      return inMemoryDB[ingredient];
    } else {
      // go the API and get the information
      // Add it to the inMemoryDB
      inMemoryDB[ingredient] = recipeArr;
    }
  ```

1. How to keep track of how old the data is: add a key with the time stamp in the constructor

  ```javaScript
  function Recipe(obj){
    // other keys
    this.dateAdded = Date.now();
  }
  ```

  - compare that date/time with however long you want to keep the data. If the data is too old, just empty the object

  ```javaScript
  if (cache[key] && (Date.now() - cache[key].dateAdded < 50000)) {
    console.log('Cache hit');
  } else {
    // dump the data and get fresh data from the API
  }
  ```
