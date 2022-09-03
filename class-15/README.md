# Final Project Kick-off

## Overview

Today is the last day of formal lecture. It's time to add authentication to our app, so we know, with some level of confidence, who our users are.

You will be assigned your project teams. For the next week of this course, you will be working with your assigned project team to build out your final project. On the last day of class, your group will present your project.

## Class Outline

- Authentication
- Code demo
- Lab preview
- Review [final project requirements](./project-guidelines.md)

## Learning Objectives

### Students will be able to

#### Describe and Define

- Authentication
- Authorization
- Auth0
- Understand Authentication - its uses and applications
- Understand the concept of OAuth

#### Execute

- Be able to implement authentication using Auth0 in their React application

## Helpful Resources

[auth0](https://auth0.com/docs/libraries/auth0-react)

## Notes

1. The difference between Authentication and Authorization is...

- Authentication is the process of verifying who someone is
- Authorization is the process of verifying what specific applications, files, and data a user has access to.

1. There are different types of authentication. Give an example of being authenticated using OAuth.

- The access token is used to for authentication and authorization to get access to the resources from the resource server.

1. What is the difference between OAuth and Auth0?

- OAuth, which is pronounced "oh-auth," enables an end user's account information to be used by third-party services, such as Facebook and Google, without exposing the user's account credentials to the third party.
- Auth0 generates access tokens for API authorization scenarios, in JSON web token (JWT) format. The permissions represented by the access token, in OAuth terms, are known as scopes. When an application authenticates with Auth0, it specifies the scopes it wants. If those scopes are authorized by the user, then the access token will represent these authorized scopes.

1. What is Auth0? What are the requirements to use Auth0?

<https://auth0.com/docs/get-started/auth0-overview>

- Auth0 is a flexible, drop-in solution to add authentication and authorization services to your applications. Your team and organization can avoid the cost, time, and risk that come with building your own solution to authenticate and authorize users.
- uses OAuth (oh-auth) under the hood
- prevents us from having to write lots of code to make it work in our app


1. How does Auth0 make sure you are who you say you are?

- client uses some tool to bridge the login gap between you and Google/Pinterest/Amazon/Paypal/GitHub/Facebook
- a "handshake" occurs between google (or someone similar) and the client and a token is created
- the client uses the token when requesting data from the backend
- the backend verifies the token
  - FYI tokens can expire after some time

- Important Links:
  - Quick Start: <https://auth0.com/docs/quickstarts>
  - Auth0 React SDK for Single Page Apps: <https://auth0.com/docs/libraries/auth0-react#use-with-a-class-component>
  - jsonwebtoken docs: <https://www.npmjs.com/package/jsonwebtoken>

- How to use with a class component
  - Use the `withAuth0` Higher Order Component to add the auth0 property to class components instead of using the hook, `useAuth0`.

- Auth0 in the FrontEnd
  - To install Auth0 in React v18, use the force command
    - `npm install @auth0/auth0-react --force`
  - To install Auth0 in React v17, follow the directions in the Quick Start guide.
    - <https://auth0.com/docs/quickstart/spa/react/interactive>
  - In the `index.js` set the `redirectUri={window.location.origin}` and NOT localhost:3001.
    - `window.location.origin` does the same thing but this is more dynamic for deployment.
  - `isAuthenticated` is a hook, meaning that an API call is happening so there is some async functionality happening here upon render. This is why we get 2 different values when we `console.log(isAuthenticated)`. It returns false upon page load but then when the API response returns, it reflects the actual value of either true or false depending on if the user is logged in or not.
  - Best practice is to copy/paste the starter code from the Auth0 docs. Feel free to refactor if it makes sense to you but it will work right out of the box.
  - Don't forget to change the "Token Endpoint Authentication Method" to "None" when creating a new "Single-Page App" using Auth0 React SDK.
    - You won't able to authenticate until you make that change.
    - There is even a warning about it in the Dashboard! Look for it!
    - You have to navigate to the Dashboard > Applications > Applications > can-of-books > scroll down to Application Properties > change Token Endpoint Authentication Method to None.
  - The Dashboard can be found in the hambuger menu where you profile is located at. Look in the top right corner of your screen and click on your name.

- Auth0 in the BackEnd
  - Install the dependencies
    - `npm i jsonwebtoken jwks-rsa`
  - Start by updating your BookModel to include an email
  - clear your database of all current books
  - Update your seed.js to include your email adress associated with Google Account
  - run `node seed.js` in order to repopulate your MongoDB with new books that inlcude the user's email.
    - if you don't include an email, when you go to "get" your books, an empty array will be returned.
  - in the server's `.env` file, you will need a variable like this:
    - `JWKS_URI=https://dev-yb6rt0os.us.auth0.com/.well-known/jwks.json`
    - replace `dev-yb6rt0os.us.auth0.com` with the value that you find in the Auth0 Dashboard under the Domain label.
1. LoginButton component:

   ```javaScript
   import React from "react";
   import { useAuth0 } from "@auth0/auth0-react";

   const LoginButton = (props) => {
     const { loginWithRedirect } = useAuth0();

     return <button onClick={() => loginWithRedirect()}>Log In</button>;
   };

   export default LoginButton;
   ```

1. LogOutButton component:

   ```javaScript
   import React from "react";
   import { useAuth0 } from "@auth0/auth0-react";

   const LogoutButton = () => {
     const { logout } = useAuth0();

     return (
       <button onClick={() => logout({ returnTo: window.location.origin })}>
         Log Out
       </button>
     );
   };

   export default LogoutButton;
   ```

1. IsLoadingAndError component - this should wrap everything

   ```javaScript
   import React from 'react';
   import { withAuth0 } from '@auth0/auth0-react';

   class IsLoadingAndError extends React.Component {
     render() {
       return(
         this.props.auth0.isLoading ?
           <div> Loading...</div>
           :
           this.props.auth0.error ?
           <div>Oops... {this.props.auth0.error.message}</div>
           :
           this.props.children
       )
     }
   }

   export default withAuth0(IsLoadingAndError);
   ```

1. Profile component - this will show the user's information. There is more that we can display. Details can be found in the docs.

   ```javaScript
   import React from "react";
   import { useAuth0 } from "@auth0/auth0-react";

   const Profile = () => {
     const { user, isAuthenticated, isLoading } = useAuth0();

     if (isLoading) {
       return <div>Loading ...</div>;
     }

     return (
       isAuthenticated && (
         <div>
           <img src={user.picture} alt={user.name} />
           <h2>{user.name}</h2>
           <p>{user.email}</p>
         </div>
       )
     );
   };

   export default Profile;

   ```
