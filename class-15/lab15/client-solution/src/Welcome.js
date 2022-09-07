import React from 'react';
import Login from './auth/Login';

class Welcome extends React.Component {
  render() {
    return (
      <div id="welcome">
        <h1>Please login below to access your best books!</h1>
        <Login />
      </div>
    )
  }
}

export default Welcome;