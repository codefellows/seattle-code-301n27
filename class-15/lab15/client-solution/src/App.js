// LAB 11 - FEATURED TASKS
// Use React Router to add ability for user to navigate between Home and About "pages".

import React from 'react';
import "./App.css";
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import About from './About';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Profile from './auth/Profile';
import Welcome from './Welcome';

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
          {/* Conditionally render the `BestBooks` component, if the user is logged in. Otherwise, show the `Welcome` component. */}
            <Route 
              path="/"
              element={this.props.auth0.isAuthenticated ? <BestBooks /> : <Welcome />}
            >
            </Route>
            {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
            <Route 
              path="/about" 
              element={<About />}
            >
            </Route>
            {/* In your `App` component, use the imported `BrowserRouter` component to create routes for `/profile`. */}
            <Route 
              path="/profile" 
              element={<Profile />}
            >
            </Route>
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
