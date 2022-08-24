import React from 'react';
import './App.css';
import axios from 'axios';
import AddACatForm from './AddACatForm';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cats: [],
      errorMessage: '',
      showForm: false
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

  handleCreateCat = async (catToBeCreated) => {
    try {
      const config = {
        method: 'post', 
        baseURL: process.env.REACT_APP_SERVER,
        url: '/cats',
        data: catToBeCreated // `data` is the data to be sent as the request body
      };

      const response = await axios(config);
      console.log(response.data);
      this.setState({ cats: [...this.state.cats, response.data] });
    } catch(error) {
      console.error('Error is in the App.js in the createCat Function: ', error);
      // axios sends more info about the error in a response object on the error
      this.setState({ errorMessage: `Status COde ${error.response.status}: ${error.response.data}`});
    }
  }

  handleDeleteCat = async (catToBeDeleted) => {
    try {

      const proceed = window.confirm(`Do you wish to delete ${catToBeDeleted.name}?`)

      if (proceed) {
        const config = {
          method: 'delete', 
          baseURL: process.env.REACT_APP_SERVER,
          url: `/cats/${catToBeDeleted._id}?queryParam=value`
        };
        
        const response = await axios(config);
        console.log(response.data);
        const newCatsArray = this.state.cats.filter(cat => cat._id !== catToBeDeleted._id);
        this.setState({ cats: newCatsArray });
      }
    } catch(error) {
      console.error('Error is in the App.js in the deleteCat Function: ', error);
      // axios sends more info about the error in a response object on the error
      this.setState({ errorMessage: `Status Code ${error.response.status}: ${error.response.data}`});
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Cats Demo</h1>
        <button onClick={() => this.setState({ showForm: true })}>Add a New Cat</button>

        {this.state.showForm && <AddACatForm handleCreateCat={this.handleCreateCat} />}

        {!this.state.errorMessage ? this.state.cats.map(cat => (
          <>
            <h2>{cat.name}</h2>
            <p>This cat lives in {cat.location}</p>
            <p>This cat is {cat.color} colored</p>
            <button onClick={() => this.handleDeleteCat(cat)}>Delete this Cat!</button>
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
