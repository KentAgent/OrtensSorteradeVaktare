import React, {Component} from 'react';
import WillesComponent from '../../WillesComponent/WillesComponent'
import { Route } from 'react-router-dom'
import FetchCities from '../FetchCities/FetchCities'
import Firebase from '../../Firebase/Firebase'
import JokeComponent from '../../JokeComponent/JokeComponent'
import ChuckNorris from "../../ChuckNorrisJoke/ChuckNorris"
import './HomePage.css'

class HomePage extends Component{
    render(){
      return (
        <div>
          <Route path="/" exact render={() => <h1>Home</h1>} />
          <Route path="/fetch-cities" exact render={() => <FetchCities/>}/>
          <Route path="/random-dogs" exact render={() => <WillesComponent/>}/>
          <Route path="/joke-shower" exact render={() => <JokeComponent/>}/>
          <Route path="/chuck-norris" exact render={()=> <ChuckNorris/>}/>
          <Route path="/Firebase" exact render={()=> <Firebase />}/>

        </div>
      )
    }
}

export default HomePage;
