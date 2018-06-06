import React, {Component} from 'react';
import WillesComponent from './WillesComponent/WillesComponent'
import { Route } from 'react-router-dom'
import FetchCities from '../FetchCities/FetchCities'
import JokeComponent from '../../JokeComponent/JokeComponent'

class HomePage extends Component{
    render(){
      return (
        <div>
        <section className='HomePage'>
          <p>Hej kompisar!</p>
        </section>
        <Route path="/" exact render={() => <h1>Home</h1>} />
        <Route path="/fetch-cities" exact render={() => <FetchCities/>}/>
        <Route path="/random-dogs" exact render={() => <WillesComponent/>}/>
        <Route path="/joke-shower" exact render={() => <JokeComponent/>}/>
        </div>

      )
    }
}

export default HomePage;
