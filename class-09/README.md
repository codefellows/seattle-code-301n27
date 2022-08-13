# Advanced Topics

## Overview

Today we will dive a little bit deeper into Express and higher level programming in general, covering the following topics:

- Strategies for Refactoring
- Functional Programming
- Modularization

## Class Outline

- Warm-up exercise
- Review code challenges
- Code review of lab assignment
- Introduction of today's code challenge topic
  - Repl.it Demo: <https://replit.com/@HexxKing1/301n27-Code-Challenge-Object-Iteration#index.js>
- Promises vs Async
- Refactoring for Efficiency
  - Repl.it Demo: <https://replit.com/@HexxKing1/301n27-Refactoring#index.js>
- Refactoring with Promises
  - Repl.it Demo: <https://replit.com/@HexxKing1/301n27-Promises#index.js>
- Modules
  - Can be found in the demo folder in the `jobs` directory
- Lab Preview

## Learning Objectives

### Students will be able to

#### Describe and Define

- Substandard programming patterns
  - forgetting semi-colons
  - don't use enough comments in code to keep things visually organized
  - being not specfic enough with variable names and mixing them up with other variables
  - I don't write DRY code at first, I get it to work, then I refactor
- Refactoring opportunities
  - Not readable code or "pure" (unintended side effects)
  - Decrease the # of lines of code
  - to make it DRY
  - to make our variable look up time quicker
  - anytime you are given more data, you may have to refactor to accomdate that new data
  - we modularize to keep our code organized
- Efficiency Loss/Gain
  - this is called BigO
  - BigO meansures to efficiecy of your algorithm/code.
  - we always want to be thinking about how efficient our code is.
- Modularization
  - rafactoring our server file into smaller bites of code.
  - `weather.js` for all the weather-related code
  - `movies.js` for all the movies-related code
- Single Responsibility Principle (SRP)
  - your function should do ONE thing.
  - your function should not do more than one thing because if one of those things breaks, it breaks ALL the functionality of that function.
  - Refactor monolithic functions into smaller, single responsibility functions
  - Create a "controller" function
    - `getData` function to call `getLocation`, `getWeather` and `getMovies`
  - Create DRY code by finding repetition, patterns
  - Modularize similar code

#### Execute

- Refactor monolithic functions into smaller, single responsibility functions
- Create a "controller" function
- Create DRY code by finding repetition, patterns
- Modularize similar code

## Notes

- What is a Promise?
  - a Promise is an object in JavaScript that represents the eventual completion or failure of an async operation and it's resulting value.
  - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise>

- `async and await` - vs - `.then() and .catch()`
  - ES6 saw the introduction of the Promise object as well as new methods to handle the execution of these Promises: then, catch, and finally. But a year later, in ES7, the language added another approach and two new keywords: async and await.
  - When returning a Promise inside an async function, you don’t need to use await.
  - <https://www.smashingmagazine.com/2020/11/comparison-async-await-versus-then-catch/>
  - The difference is that in an async function, JavaScript will pause the function execution until the promise settles. With then(), the rest of the function will continue to execute but JavaScript won't execute the .then() callback until the promise settles.
  - <https://dev.to/masteringjs/using-then-vs-async-await-in-javascript-2pma#:~:text=The%20difference%20is%20that%20in,JavaScript%20won't%20execute%20the%20>

- What is the difference between a Promise and using `.then()/.catch()`?
  - `.then()` is a handler function that is called when a Promise is returned either fulfilled or rejected.
  - `.catch()` is a method that calls an onRejected function to handle a rejected Promise.
  - `.then` and `.catch` are methods and Promise is an object.

- What is refactoring?
  - it is the process of restructuring existing computer code changing the inner workings without changing its external behavior. Refactoring is intended to improve nonfunctional attributes of the software.

- What is DRY code?
  - DON'T REPEAT YOURSELF!
  - This applies to both documentation and code!

- Why do we modularize our code?
  - DRY
  - our `server.js` file is getting pretty large!
  - our functions are big and doing multiple things
  - code is unreadable
  - every API that we add to our app, is just going to continue to add to these problems

  ```javaScript
  async function doSomething() {
    try{
      const results = await axios.get(url)
    }
    catch(err){
      console.error(err);
    }
  }

  // error handeling is built in with the .catch() so we don't need a try/catch
  function doSomething() {
    axios
      .get(url)
      .then(results => {
        // the results only exist within this code block
      })
      .catch(err => console.error(err))
  }
  ```

1. Modularizing a file on the server

  ```javaScript
  function doSomething(){
    // does something really cool
  }

  module.exports = doSomething
  ```

  - OR, it can be written like this

  ```javaScript
  module.exports = () => {
    // does something really cool
  }
  ```

  - in the server file

  ```javaScript
  const doSomething = require('./path-to-doSomething');
  // the rest of the file
  ```

1. We can also export more than one function by putting it in an object

  ```javaScript
  module.exports = {
    doSomething: function(){
      // does something cool
    },

    doSomethingElse: function(){
      // does something else
    }
  }
  ```

  - to access a function from the object above in the server, we would...

  ```javaScript
  const doesStuffObject = require('./path-to-doesStuffObject');

  doesStuffObject.doSomething();
  doesStuffObject.doSomethingElse();
  ```

## Feedback Overview

- "This last week is good, but City explorer definitely felt like a serious ramp up in difficulty, but so far it's been alright!"
- "I'd like more info about proper ways to do error handling - but it's possible that's still coming.  But that's where I was getting the most stuck in my lab, and I'd like to get a better understanding of error handling before working with it more."
- "In 301, although I am still struggling and slowly learning, I am still having a lot of fun learning new things. "
- "This past week wasn't too bad, i noticed that i feel a lot more confident using state than i did before"
- "Labs are getting harder and is taking me longer to complete them."
