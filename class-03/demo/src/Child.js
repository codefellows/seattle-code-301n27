import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import teen from './assets/teen.jpg';

class Child extends React.Component {

  render() {
    return (
      <>
        <Card className="Child">
          <Card.Img src={teen} alt="I am the Billy" />
          <Card.Title>I am the Billy and I have {this.props.billysMoney} dollars.</Card.Title>
          <Button onClick={() => this.props.giveMoneyToBilly(10)} >Ask for 10 Dollars</Button>
          <Button onClick={() => this.props.giveMoneyToBilly(20)} >Ask for 20 Dollars</Button>
        </Card>
      </>
    );
  }
}

export default Child;
