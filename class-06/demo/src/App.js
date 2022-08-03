// Build a form to collect a city name from the user. Give the submit button the text of "Explore!".
// Use the data from the form to query LocationIQ for the latitude and longitude of the requested city. 
import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theCityWeSearchedFor: "",
      locationObj: {}
    }
  }

  getLocation = async () => {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.theCityWeSearchedFor}&format=json`;
    console.log("URL: ", url);
    const response = await axios.get(url);
    console.log("Response Display Name: ", response.data[0]);
    this.setState({ locationObj: response.data[0] });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <input 
          onChange={(event) => this.setState({ theCityWeSearchedFor: event.target.value })} 
          placeholder='search for a city' ></input>
        <button onClick={this.getLocation} >Explore!</button>

        {this.state.locationObj.place_id && 
        <>
          <h2>City we searched for: {this.state.locationObj.display_name}</h2>
          <p>Lat/Lon: {this.state.locationObj.lat},  {this.state.locationObj.lon}</p>
        </>
        }
      </div>
    );
  }
}

export default App;
