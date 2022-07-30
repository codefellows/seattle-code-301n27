# Class 5: Putting it all together

## Overview

Today we will use the skills we learned over the week to build a new application: city explorer! Your lab will be to take React starter code and turn it into a beautiful portfolio.

## Class Outline

- Warm-up exercise
- Code Challenge Code Review
- Introduction of today's code challenge topic
  - Repl.it: <https://replit.com/@HexxKing1/301n27-Code-Challenge-Reduce#index.js>
- Feedback Overview
- Lab Code Review
- Build City Explorer (React)
- Lab demo
- Lab Preview

## Learning Objectives

### Students will be able to

#### Describe and Define

- Conditional Rendering
- Ternary Statements
- Browser Router

#### Execute

- Be able to build a React app that passes props from parent component to child component
- Hold state in the application
- Use forms in React
- Conditionally render data

## Notes

- What is conditional rendering?
  - it is the logic that determines what content is rendered to the page based off some condition.

  - [`react-router-dom` v6 Docs](https://reactrouter.com/docs/en/v6/getting-started/overview)
  - [`react-router-dom` v5 Docs](https://v5.reactrouter.com/web/guides/primary-components)
    - these are the docs for v5 which is not compatible with React v18.
    - The v5 docs are helpful in breaking down some of the common components, their jobs and how to implement them.
  - source of all `react-router-dom` truth: <https://github.com/remix-run/react-router>

- What is Browser Router?
  - At the core of every React Router application should be a router component. For web projects, react-router-dom provides `<BrowserRouter>` and `<HashRouter>` routers. The main difference between the two is the way they store the URL and communicate with your web server.
      - A `<BrowserRouter>` uses regular URL paths. These are generally the best-looking URLs, but they require your server to be configured correctly. Specifically, your web server needs to serve the same page at all URLs that are managed client-side by React Router. Create React App supports this out of the box in development, and comes with instructions on how to configure your production server as well.

- What is Router?
  - To use a `<Router>`, just make sure it is rendered at the root of your element hierarchy. Typically you’ll wrap your top-level `<App>` element in a router.
    - In terms of React, `<Router>` is a [context provider](https://reactjs.org/docs/context.html#contextprovider) that supplies routing information to the rest of the app. That just means that it rerenders the React app when something within the `<Router>` changes.

- What is Routes?
  - Routes replaced the Switch in v5
    - V6 is a lot smarter and will pick the Route with the most specific match so you don't have to worry about ordering inside the Switch anymore.
    - Routes is a parent element to hold all the app's nested `<Route/>` components.

- What is Route?
  - A Route's job is to render some Component when its path matches the current URL.
    - You can think of a `<Route>` component as a "page" in your app.
    - If the current URL endpoint is `/bananas`, this route is rendered while the rest are ignored.

- What is Routing?
  - A link that switches content.
  - When clicked, a link will render a component in a spot on the page.
  - Can change out a single component within a page.
  - Or, it can can switch out a full page of content.

1. A ternary statement:

  ```javaScript
  // regular if/else conditional
  if(conditionIsTrue){
    return 'it is true'
  } else {
    return 'it is false'
  }

  // ternary statement
  return conditionIsTrue ? 'it is true' : 'it is false';
  ```

1. Conditionally render a component:

  ```javaScript
  class Parent extends React.Component {
    constructor(props){
      super(props);
      this.state={
        displayChild: false
      }
    }

    render() {
      return(
        // use a ternary to conditionally render the Child component
        {this.state.displayChild ?
          <Child>
        : ''
        }
      )
    }
  }
  ```

- A better way to write it would be:

  ```javaScript
  class Parent extends React.Component {
    constructor(props){
      super(props);
      this.state={
        displayChild: false
      }
    }

    render() {
      return(
        {this.state.displayChild &&
          <Child>
        }
      )
    }
  }
  ```
