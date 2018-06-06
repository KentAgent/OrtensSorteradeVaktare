import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import HomePage from './Containers/HomePage/HomePage'
console.log("hej");

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <div>
          <header>
            <nav className="Navigation">
              <ul className="NavBar">
                <li><a href="/">Home</a></li>
                <li><a href="/fetch-cities">Cities</a></li>
                <li><a href="/random-dogs">Dogs</a></li>
                <li><a href="/joke-shower">Lol</a></li>
                <li><a href="/chuck-norris">Norris is life</a></li>
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
