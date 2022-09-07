import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import Logout from './auth/Logout';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="header">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        {/* PLACEHOLDER: render a navigation link to the about page */}
        <NavItem><Link to="/about" className="nav-link">About</Link></NavItem>
        {/* Utilize the `AuthButtons` component in your `Header`. This will show `Login` to users not signed in. When a signed-in user clicks the logout button, it should log the user out of the application. */}
        {this.props.auth0.isAuthenticated &&  
        <>
          <NavItem><Link to="/profile" className="nav-link">Profile</Link></NavItem>
          <Logout />
        </>
        }
      </Navbar>
    )
  }
}

export default withAuth0(Header);
