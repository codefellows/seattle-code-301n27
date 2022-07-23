# Passing Functions as Props

## Overview

Yesterday, you learned how to pass information from a parent component into a child component through `props`. Today, we are going to pass functions through the `props` as well. We are also going to display a nested component using `.map` rather than hard-coding each one individually.

## Class Outline

- Review code challenges
- Introduction of today's code challenge topic
  - Repl.it: <https://replit.com/@HexxKing1/301n27-Code-Challenges-Filter#index.js>
- Feedback Overview
- Warm-up exercise
- Code review of lab assignment
- Lecture Notes
- Code Demo
- Lab Preview

## Learning Objectives

### Students will be able to

#### Describe and Define

- Parent Component
- Child Component
- Spread Operator

#### Execute

- Be able to pass functions from a parent component to a child component
- Understand the spread operator
- Understand `.map` and how to use it to render data in a React application

## Notes

- How can a child component update the state of a parent component?
  - This "helper function" allows us to do something in a child component that will trigger behavior in the parent component.
  - This is useful for updating state, which in return re-renders the parent component and all of it's the children components with the updated value(s). The action of changing state still occurs in the parent, even if the child triggers it and passes arguments.

- How does a parent component send a function into a child component?
  - The parent component sends a "helper function" into the child component on the props object that will allow the child component to interact with information in the parent component by invoking that "helper function".
  - This is called "lifting state" in React

- Using React-Bootstrap, how do you determine if a modal is open or closed?
  - You can use the show and onHide props on the Modal element to display or hide the modal.
    - The show attribute is a boolean and will show if it is set to true or will hide if set to false.
    - The onHide attribute is an event listener that closes the model by setting the show property to false.

1. Allowing the child component to update the state in the parent component:

  - Step 1. send a function into the child component that updates the state in the parent component

  ```javaScript
  class Parent extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        name: 'bob'
      }
    }

    updateName = (newName) => this.setState({ name: newName });

    render(){
      return(
        <Child updateName={this.updateName}>
      )
    }
  }
  ```

  - Step 2. invoke that function from the props in the child component
  ```javaScript
  class Child extends React.Component {
    constructor(props){
      super(props);
      this.state={
        newName:''
      }
    }

    // this function calls the function that the parent component send us with the new name as an argument
    updateChildName = () => this.props.updateName(this.state.newName);

    render(){
      return(
        <>
          <form onSubmit={this.updateChildName}>
            <label>What is your new name?</label>
            <input onChange={() => this.setState({ newName: e.target.value })} />
          </form>
        </>
      )
    }
  }
  ```

  - Step 3. The invoked function from the child component will update the name in the parent component and tada! Your child component has essientially changed the state of your parent component.


## Feedback Overview
- "I thought I needed to complete a video recording before class started, and it wasn't clear to me from the instructions what this was for and what kind of video I should make."
- "I'm wondering about the Slack messaging etiquette?  I don't want to disturb any of the teaching staff during off hours, and so I was wondering if Slack is viewed like email, and instructors will answer only when they are available - or do instructors constantly have Slack turned on, in which case I'm wondering if I should only send Slack messages during particular time windows when instructors are officially available?  I don't want to accidentally disturb someone during off-hours."
- "really worried I burned my terminal down. :("
- "Getting down the weekly schedule threw me off for a second"
- "Pre-work took more than I expected."
