import React, { Component } from 'react'

class ChuckNorris extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      joke: ''
    }
  }

componentDidMount() {
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

render() {
    return (
        <div className="FetchCities">
            <p>{this.state.joke}</p>
        </div>
    )
}
}


export default ChuckNorris
