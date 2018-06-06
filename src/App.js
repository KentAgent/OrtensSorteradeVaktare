import React, { Component } from 'react';
import './App.css';
import WillesComponent from './WillesComponent/WillesComponent.js';
import FetchCities from './FetchCities/FetchCities';
import JokeComponent from './JokeComponent/JokeComponent.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WillesComponent />
        <FetchCities />
        <JokeComponent />
      </div>
    );
  }
}

export default App;
