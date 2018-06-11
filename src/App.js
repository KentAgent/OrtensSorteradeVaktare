import React, { Component } from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import './App.css';
import HomePage from './Containers/HomePage/HomePage'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <div>
          <header>
            <nav className="Navigation">
              <ul className="NavBar">
                <li id ="home"><Link to="/">Home</Link></li>
                <li><Link to="/fetch-cities">Cities</Link></li>
                <li><Link to="/random-dogs">Dogs</Link></li>
                <li><Link to="/joke-shower">Lol</Link></li>
                <li><Link to="/chuck-norris">Norris is life</Link></li>
                <li id="firebase"><Link to="/firebase">Firebase</Link></li>
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
