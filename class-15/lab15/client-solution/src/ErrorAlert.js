import React from 'react';
import Alert from 'react-bootstrap/Alert';

class ErrorAlert extends React.Component {
  render() {
    return (
      <Alert variant="danger" onClose={this.props.closeError} dismissible className="text-center" >
        <Alert.Heading>Oh snap! You got an error when making a call to the server!</Alert.Heading>
        <p>
          {this.props.errorMessage}
        </p>
      </Alert>
    )
  }
}

export default ErrorAlert;
