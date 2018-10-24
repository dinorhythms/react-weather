import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherCast from '../containers/weather_cast';

// 

export default class App extends Component {
  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <SearchBar />
            <WeatherCast />
          </div>
        </div>
      </div>
    );
  }
}
