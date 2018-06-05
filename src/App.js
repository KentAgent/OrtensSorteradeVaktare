import React, { Component } from 'react';
import './App.css';
import WillesComponent from './WillesComponent/WillesComponent.js';
import FetchCities from './FetchCities/FetchCities'

class App extends Component {
  render() {
    return (
      <div className="App">
        <WillesComponent />
        <FetchCities /> 
      </div>
    );
  }
}

export default App;
