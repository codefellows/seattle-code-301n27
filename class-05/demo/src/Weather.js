import React from 'react';

class Weather extends React.Component {
  render() {
    return (
      <>
        <h3>Here's the weather for {this.props.weather.city_name}</h3>
        {this.props.weather.data.map(day => (
          <>
            <h4>Date: {day.valid_date}</h4>
            <p>Forecast: {day.weather.description}</p>
          </>
        ))}
      </>
    )
  }
}

export default Weather;
