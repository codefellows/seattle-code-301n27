# State and Props

## Overview

Today's class will focus on passing information as `props` from a parent component into a child component. We will also cover the concept of `state` and how individual components can hold state.

## Class Outline

- Review code challenges
- Introduction of today's code challenge topic
  - Repl.it: <https://replit.com/@HexxKing1/301n27-Code-Challenge-Map#index.js>
- Warm-up exercise
- Code review of lab assignment
- Code Demo
- Bootstrap
- Netlify
  - We want to share our application with the world.
  - Netlify is a serverless platform that allows us to deploy our React application.
  - Netlify is a web developer platform with an intuitive git-based workflow, automated deployments and much more. https://www.netlify.com/about/
  - steps:
    - Navigate to <https://www.netlify.com/>
    - Click “Sign Up” in the top right corner
    - Choose GitHub to sign up with
    - Click on “Add new site”
    - Choose “Import an existing project”
    - Click on the GitHub button
    - You can either “Search repos” OR “Configure Netlify on GitHub”
    - Enter your GitHub password
    - Scroll down to Repository access and choose “All repositories”
    - Click “Save”
    - Search for your Gallery of Horns repo and click on it
    - Scroll down and look under the Basic build settings, in the Publish directory input field, add a “/” after the word “build”
    - Click “Deploy site”
    - Click on the Deploys tab
    - Look to the right for the “Trigger deploy” button, click on it and select “Deploy site”
    - Watch the deploy logs and wait for the success message: “Build script success”
    - You can either click the “Preview” button at the top OR navigate back to the Site overview tab and click on your green deployed URL link at the top.
- Lab Preview

## Learning Objectives

### Students will be able to

#### Describe and Define

- State
- Props
- React-Bootstrap
- Netlify
- setState

#### Execute

- Understand and define the concepts of `props` and `state` as they relate to React Components
- Pass both static and dynamic information from a parent component into a child component using `props`
- Hold information as `state` in different components
- Create responsive web pages suitable for desktop or mobile web browsers
- Integrate a 3rd party component library into a React application
- Deploy to Netlify

## Notes

- What is state?
  - The state is a built-in React object that is used to hold data about the component. A component's state can change, and when it changes, the whole component re-renders and therefore re-renders any child component with the newly updated data as well.

- What are props?
  - Props is a special kind of object in React that allows us to pass data from a parent component to a child component(s). Props is short for "properties". They are useful when you want the flow of data in your app to be dynamic.

- To Update State: `this.setState({ thingInState: thingToUpdate })`
  - This is a special method given to us by React that applies changes to the component's state and tells React that this component and its children need to be re-rendered with the updated state. This is the primary method you use to update the user interface in response to event listeners and server responses.
  - <https://reactjs.org/docs/react-component.html#:~:text=and%20forceUpdate()%20.-,setState(),event%20handlers%20and%20server%20responses>

1. To send something in props to a child component: `<ChildComponent bananas='randomString' />`

1. To access that variable in the props from the child component: `this.props.bananas`

1. Information flows in one direction. That direction is down.

- What is Bootstrap?
  - Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.(Wikipedia)

  - dynamic is the ability to update a value in an application and that new value is automatically updated everywhere it is needed.

  - responsive just means that your UI can be displayed on any size screen like a phone vs a tablet vs a computer screen (and it still look nice).

1. What are different things that I can customize using Bootstrap?
  - forms
  - modals
  - buttons
  - images
  - tables

1. How does Bootstrap use classes for customization?
  - in React, we must use `className` instead of `class` when needing a CSS selector. `class` is a reserved word that creates instances of objects in JavaScript.
  - <https://getbootstrap.com/docs/5.0/utilities/api/>

1. Holding state in a parent component and sending it into a child component:

  ```javaScript
  import React from 'react';
  import Child from './path-to-Child-component';

  class Parent extends React.Component {
    constructor(props);
    this.state={
      name: 'sue',
      childName: 'bob'
    }

    render() {
      return (
        <>
          <p>My name is {this.state.name}</p>
          <Child kidsName={this.state.childName}>
        </>
      )
    }
  }

  export default Parent

  import React from 'react';

  class Child extends React.Component {
    render() {
      return(
        <p>My name is {this.props.kidsName}</p>
      )
    }
  }

  export default Child
  ```
