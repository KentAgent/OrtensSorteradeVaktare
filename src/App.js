import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import ChuckNorris from './ChuckNorrisJoke/ChuckNorris'
import WillesComponent from './Containers/HomePage/WillesComponent/WillesComponent.js';
import FetchCities from './Containers/FetchCities/FetchCities'
import HomePage from './Containers/HomePage/home'
console.log("hej");

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <div>
          <header>
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/fetch-cities">Show cities</a></li>
                <li><a href="/random-dogs">See our dogs</a></li>
                <li><a href="/joke-shower">Vilken rolig skoj ha ha</a></li>
                <li><a href="/chuck-norris">Norris is life</a></li>
                <li><a href="/Firebase">Firebase</a></li>

              </ul>
            </nav>
          </header>
        </div>
        <HomePage/>
      </div>
        </BrowserRouter>
    );
  }
}

export default App;
