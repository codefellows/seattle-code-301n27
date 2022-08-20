import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cats: [],
      errorMessage: ''
    }
  }

  componentDidMount = async () => {
    try {
      const config = {
        method: 'get', // get is default behavior
        baseURL: process.env.REACT_APP_SERVER,
        url: '/cats'
      };

      const response = await axios(config);
      console.log(response.data);
      this.setState({ cats: response.data });
    } catch(error) {
      console.error('Error is App.js in the componentDidMount Function: ', error);
      // axios sends more info about the error in a response object on the error
      this.setState({ errorMessage: `Status COde ${error.response.status}: ${error.response.data}`});
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Cats Demo</h1>
        {!this.state.errorMessage ? this.state.cats.map(cat => (
          <>
            <h2>{cat.name}</h2>
            <p>This cat lives in {cat.location}</p>
            <p>This cat is {cat.color} colored</p>
          </>
        ))
        :
        <h2>{this.state.errorMessage}</h2>
        }
      </div>
    );
  }
}

export default App;
