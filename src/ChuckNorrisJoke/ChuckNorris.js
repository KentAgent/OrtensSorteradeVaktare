import React, { Component } from 'react'



class ChuckNorris extends React.Component {

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
            <p>{this.state.joke}</p>
            <button onClick={this.fetchData}>Refresh</button>
        </div>
    )
  }

}


export default ChuckNorris
