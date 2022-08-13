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
  - Repl.it Demo:
- Refactoring with Promises
  - Repl.it Demo:
- Modules
  - Can be found in the demo folder in the `jobs` directory
- Lab Preview

## Learning Objectives

### Students will be able to

#### Describe and Define

- Substandard programming patterns
- Refactoring opportunities
- Efficiency Loss/Gain
- Modularization
- Single Responsibility Principle (SRP)

#### Execute

- Refactor monolithic functions into smaller, single responsibility functions
- Create a "controller" function
- Create DRY code by finding repetition, patterns
- Modularize similar code

## Notes

- What is a Promise?

- `async and await` - vs - `.then() and .catch()`

- What is the difference between a Promise and using `.then()/.catch()`?

- What is refactoring?

- What is DRY code?

- Why do we modularize our code?

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
