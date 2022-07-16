# React and Component-Based Architecture

## Overview

Today we will be covering some new topics and reviewing concepts you should already be familiar with.

We will spend some time reviewing the concepts from the prework. We will also discuss several new topics: `create-react-app` and component-based architecture.

## Daily Plan

- Orientation & Intros
- Overview of 301
  - Zoom Lectures
  - Remo Virtual Lab
  - Slack
  - Canvas
    - Assignments
      - Meet your Grading TA: Joey Hernandez
      - Late Policy
- Review of prework
  - Arrow Functions
  - Classes
- Introduction to Code Challenges
- Review Loops & Iteration
- Introduction of Code Challenge 01: `array.forEach`
- Lunch Break / Partner Power Hour (optional this week only!)
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

- What is React?
- What are components?
- What is the difference between an arrow function and a function declaration?

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
