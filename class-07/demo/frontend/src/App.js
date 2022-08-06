import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingList: []
    }
  }

  getFood = async () => {
    const url = `${process.env.REACT_APP_SERVER}/shoppinglist?type=food`;
    const response = await axios.get(url);
    console.log(response);
    this.setState({ shoppingList: response.data });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.getFood}>Get Food List</button>
        
        <ul>
          {this.state.shoppingList.length > 0 && this.state.shoppingList.map((item, idx) => (
            <li key={idx}>
              <p>My items:</p>
              <p>{item.name}: {item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
