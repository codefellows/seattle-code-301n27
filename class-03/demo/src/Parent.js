import React from 'react';
import Card from 'react-bootstrap/Card';
import mom from './assets/mom.jpg';
import Child from './Child';
import CardGroup from 'react-bootstrap/CardGroup';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      money: 100,
      billysMoney: 0
    }
  }

  giveMoneyToBilly = (dollars) => {
    const momsMoney = this.state.money - dollars;
    // give money to billy
    this.setState({
      money: momsMoney,
      billysMoney: this.state.billysMoney + dollars
    });
    
    // show modal when mom's money is 0
    if (momsMoney < 0) {
      this.props.openModal();
    }
  };

  render() {
    return (
      <CardGroup>
        <Card className="Parent">
          <Card.Img src={mom} alt="I am the mom" />
          <Card.Title>I am the Parent and I have {this.state.money} dollars.</Card.Title>
        </Card>
        <Child 
          billysMoney={this.state.billysMoney} 
          giveMoneyToBilly={this.giveMoneyToBilly}
        />
      </CardGroup>
    );
  }
}

export default Parent;
