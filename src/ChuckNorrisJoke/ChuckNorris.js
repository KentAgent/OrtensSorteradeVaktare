import React, { Component } from 'react'
import './ChuckNorris.css'

class ChuckNorris extends Component {

  constructor(props) {
    super(props)
    this.state = {
      joke: ''
    }
    this.fetchData = this.fetchData.bind(this)
  }

  fetchData() {
    fetch('http://api.icndb.com/jokes/random')
      .then(response => {
        return response.json();
       })
      .then(result => {
        console.log(result.value.joke)
        this.setState({
          joke: result.value.joke
        })
       });
  }

  componentDidMount() {
    this.fetchData();
  }

render() {
    return (
        <div className="FetchCities">
          <button className="nextChuck" onClick={this.fetchData}>Check for more awsome cool verified information about Chuck</button>
          <p>{this.state.joke}</p>
        </div>
    )
  }

}


export default ChuckNorris
