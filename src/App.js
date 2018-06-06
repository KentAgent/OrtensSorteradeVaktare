import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
import WillesComponent from './WillesComponent/WillesComponent.js';
import FetchCities from './FetchCities/FetchCities';
import JokeComponent from './JokeComponent/JokeComponent.js';
=======
import WillesComponent from './Containers/HomePage/WillesComponent/WillesComponent.js';
import FetchCities from './Containers/FetchCities/FetchCities'
import HomePage from './Containers/HomePage/home'
console.log("hej");
>>>>>>> 5cb9a1b00404d4eb2c49d13091aeb55d8d741f5b

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
<<<<<<< HEAD
        <WillesComponent />
        <FetchCities />
        <JokeComponent />
=======
        <div>
          <header>
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/fetch-cities">Show cities</a></li>
              </ul>
            </nav>
          </header>
        </div>
        <HomePage/>
>>>>>>> 5cb9a1b00404d4eb2c49d13091aeb55d8d741f5b
      </div>
        </BrowserRouter>
    );
  }
}

export default App;
