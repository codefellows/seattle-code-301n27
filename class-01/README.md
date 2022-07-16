# React and Component-Based Architecture

## Overview

Today we will be covering some new topics and reviewing concepts you should already be familiar with.

We will spend some time reviewing the concepts from the prework. We will also discuss several new topics: `create-react-app` and component-based architecture.

## Daily Plan

- Orientation & Intros w/ Dr. Robin
- Overview of 301
  - Zoom Lectures
    - I can make notes as Hexx is lecturing and then ACP these notes to my personal forked version of the class repo.
    - I can also take time stamps and use them to review the recorded lectures later.
  - Remo Virtual Lab
  - Slack
  - GitHub Class Repo
  - Canvas
    - Assignments
      - Meet your Grading TA: Joey Hernandez
      - Late Policy
- Review of prework
  - Arrow Functions
  - Classes
- Lunch Break / Partner Power Hour (optional this week only!)
- Introduction to Code Challenges
  - Review Loops & Iteration
  - Introduction of Code Challenge 01: `array.forEach`
    - Repl.it Demo: <https://replit.com/@HexxKing1/302n17-Code-Challenges-arrayforEach#index.js>
- Afternoon Lecture:
  - Discussion of component-based architecture
  - Lab Overview

## Learning Objectives

As as result of completing Lecture 1 of Code 301, students will:

- Describe and Define:
  - Component-based architecture
  - React
  - `create-react-app`
  - JavaScript classes
  - Arrow functions
- Gain an understanding of scope with arrow functions
- Gain an understanding of context, scope, "this", and the "new" keyword
- Gain an understanding of the core concepts of React and how to create a basic React application
- Be able to create a basic React application using `create-react-app`
- Understand component-based architecture and be able to build a simple component-based React application

## Notes

- What is ES6?
  - newest version of JavaScript with added cool new features!
  - classes are new!
  - arrow functions too!
- What is a class?
  - a way to make objects, kinda like constrtuctor functions
  - OOP = Object Oriented Programming
- What is a method?
  - a function attached to an object
- What is the difference between an arrow function and a function declaration?
  - arrow functions are a more concise way of writing function declarations and come with a few restrictions.
- What is React?
- What are components?
- What are React class components made from?

1. Turning a function declaration into an arrow function:

   ```javascript
   function doSomething(name) {
     // Do something
   }

   doSomething = (name) => {
     // Do something
   }

   // Or make it a one liner!
   doSomething = (name) => // Do something small
   ```

1. Difference between a constructor function and a class:

   ```javascript
   // constructor
   function Cat(name) {
     this.name = name;
     this.fluffy = true;
   }

   Cat.prototype.speak = function(){
     console.log(`${this.name} says meow`);
   }

   // to make a new instance
   const bob = new Cat('Bob');
   bob.speak();

   // class
   class Cat {
     constructor(name) {
       this.name = name;
       this.fluffy = true;
     }

     speak = () => console.log(`${this.name} says meow`);
   }

   // to make a new instance
   const bob = new Cat('bob');
   bob.speak();
   ```

1. Basic React Component Structure:

   ```javascript
   import React from 'react';

   class Something extends React.Component {
     render() {
       return(
          <section>
            <h1>Header for Something</h1>
            <p>Text that is all about Something.<p>
          </section>
       )
     }
   }

   export default Something
   ```
