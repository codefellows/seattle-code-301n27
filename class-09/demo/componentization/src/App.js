import React from 'react';
import './App.css';
import axios from 'axios';
import Jobs from './Jobs';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      jobs: []
    }
  }

  componentDidMount = async () => {
    const API = 'http://localhost:3001';
    const jobs = await axios.get(`${API}/jobs`);
    this.setState({ jobs: jobs.data })
  }

  render() {
    return (
      <div className="App">
         {/* this could be a header component  */}
        <h1>Jobs available at Vault Tec!</h1>
        <Jobs 
          jobs={this.state.jobs}
        />
      </div>
    );
  }
}

export default App;
