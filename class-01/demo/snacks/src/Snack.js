import React from 'react';

class Snack extends React.Component {
  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
      </>
    )
  }
}

export default Snack;

