import React, {Component} from 'react';
import WillesComponent from './WillesComponent/WillesComponent'
import { Route } from 'react-router-dom'
import FetchCities from '../FetchCities/FetchCities'

class HomePage extends Component{
    render(){
      return (
        <div>
        <section className='HomePage'>
          <p>Hej kompisar!</p>
        </section>
        <WillesComponent/>
        <Route path="/" exact render={() => <h1>Home</h1>} />
        <Route path="/fetch-cities" exact render={() => <FetchCities/>}/>
        </div>

      )
    }
}

export default HomePage;
