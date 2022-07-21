import React from 'react';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

class Snack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: "Yay!"
    }
  }

  handleClick = () => {
    const newStatus = this.state.favorites === "Nay!" ? "Yay!" : "Nay!";
    this.setState({ favorites: newStatus });
  }

  render() {
    console.log("this.props: ", this.props);
    return (
      <Card style={{ width: '18rem' }} id='card'>
        <Card.Body>
          <Card.Title className='card-text'>{this.props.title}</Card.Title>
          <Card.Text className='card-text'>{this.props.description}</Card.Text>
          <Card.Text className='card-text'>🖤: {this.state.favorites}</Card.Text>
          <Card.Img
            src={this.props.imageURL}
            alt={this.props.description}
            onClick={this.handleClick}
            roundedCircle
            style={{ width: '18rem' }}
          />
        </Card.Body>
      </Card>
    )
  }
}

export default Snack;
