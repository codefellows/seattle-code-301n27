# React and Forms

## Overview

Today we will cover how React handles `forms` and the asynchronous nature of setting state.

## Class Outline

- Review code challenges
- Introduction of today's code challenge topic, `.sort()`
  - repl.it: <https://replit.com/@HexxKing1/301n27-Code-Challenges-Sort#index.js>
- Warm-up exercise
- Code Demo
- Lab Preview

## Learning Objectives

### Students will be able to

#### Describe and Define

- Event
- Forms
- Event Listeners
- Event Handlers
- event.target

#### Execute

- Understand how to use a `form` in a React application
- Be able to send information collected from a form into a child component

## Notes

- What is the difference between an event listener and an event handler?
  - event listener is literally listening for the event to fire off
  - event handler as the function that handles the event after the listener has caputred it

- If I am listening for an onChange on the input field, how to I access the value that the user is typing in?
  - `event.target.value`

- If the form is my child component, how do I send the information collected from that form up to the parent component?
  - lifting state
  - we define a function in the parent component and pass that function down to the child component. The child component then can call on the parent's function in order to pass it a value.
