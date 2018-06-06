import React, { Component } from 'react';
import './App.css';
import WillesComponent from './WillesComponent/WillesComponent.js';
import FetchCities from './FetchCities/FetchCities'
import ChuckNorris from './ChuckNorrisJoke/ChuckNorris'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ChuckNorris />
        <WillesComponent />
        <FetchCities />
      </div>
    );
  }
}

export default App;
