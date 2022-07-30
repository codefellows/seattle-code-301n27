import React from 'react';
import Map from './Map.js';
import Restaurants from './Restaurants.js';
import Weather from './Weather';
import location from './fake-data/location.json';
import restaurants from './fake-data/restaurants.json';
import weather from './fake-data/weather.json';
import map from './images/map.png';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayResults: false,
      locationObj: location,
      restaurants: restaurants,
      weather: weather
    }
  }

  handleLocationSearch = (e) => {
    e.preventDefault();
    this.setState({ displayResults: true });
  }

  render() {
    return (
      <div id="main">
        <form onSubmit={this.handleLocationSearch} id="search-form">
          <label>Search for a location</label>
          <input type="text" name="search" id="input-search" placeholder="Enter a location here" />
          <button type="submit">Explore!</button>
        </form>

        {this.state.displayResults && 
          <div>
            <Map
              location={this.state.locationObj}
              map={map}
            />
            <Restaurants
              restaurants={this.state.restaurants}
              location={this.state.locationObj}
            />
            <Weather 
              weather={this.state.weather}
            />
          </div>
        }

      </div>
    )
  }
}

export default Main;
