import React, { Component } from 'react'

class JokeComponent extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
          jokeSetup: '',
          jokePunchline: ''
      }
      this.fetchJoke = this.fetchJoke.bind(this)

  }

fetchJoke() {
  fetch('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke')
  .then(response => {
    return response.json();
  })
  .then(result => {
    console.log(result)
    this.setState({
      jokeSetup: result.setup,
      jokePunchline: result.punchline
    })

  })

}

componentDidMount() {
  this.fetchJoke();
}

render(){
  return (
    <div>
      <h1>{this.state.jokeSetup}</h1>
      <h1>{this.state.jokePunchline}</h1>
      <button onClick={this.fetchJoke}>Give me another one!</button>
    </div>
  )
}


}


export default JokeComponent
