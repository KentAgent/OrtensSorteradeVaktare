import React, {Component} from 'react'

class JokeComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      lineBreak: '',
      jokeSetup1: '',
      jokePunchline1: '',
      jokeSetup2: '',
      jokePunchline2: '',
      jokeSetup3: '',
      jokePunchline3: '',
      jokeSetup4: '',
      jokePunchline4: '',
      jokeSetup5: '',
      jokePunchline5: '',
      jokeSetup6: '',
      jokePunchline6: '',
      jokeSetup7: '',
      jokePunchline7: '',
      jokeSetup8: '',
      jokePunchline8: '',
      jokeSetup9: '',
      jokePunchline9: '',
      jokeSetup10: '',
      jokePunchline10: ''
    }
    this.fetchJoke = this.fetchJoke.bind(this)
    this.fetchTenJokes = this.fetchTenJokes.bind(this)

  }

  fetchJoke() {
    fetch('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke').then(response => {
      return response.json();
    }).then(result => {
      console.log(result)
      this.setState({
        lineBreak: '',
        jokeSetup1: result.setup,
        jokePunchline1: result.punchline,
        jokeSetup2: '',
        jokePunchline2: '',
        jokeSetup3: '',
        jokePunchline3: '',
        jokeSetup4: '',
        jokePunchline4: '',
        jokeSetup5: '',
        jokePunchline5: '',
        jokeSetup6: '',
        jokePunchline6: '',
        jokeSetup7: '',
        jokePunchline7: '',
        jokeSetup8: '',
        jokePunchline8: '',
        jokeSetup9: '',
        jokePunchline9: '',
        jokeSetup10: '',
        jokePunchline10: ''
      })

    })

  }

  fetchTenJokes() {
    fetch('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten').then(response => {
      return response.json();
    }).then(result => {
      console.log(result)
      this.setState({
        lineBreak: '-----------------',
        jokeSetup1: result[0].setup,
        jokePunchline1: result[0].punchline,
        jokeSetup2: result[1].setup,
        jokePunchline2: result[1].punchline,
        jokeSetup3: result[2].setup,
        jokePunchline3: result[2].punchline,
        jokeSetup4: result[3].setup,
        jokePunchline4: result[3].punchline,
        jokeSetup5: result[4].setup,
        jokePunchline5: result[4].punchline,
        jokeSetup6: result[5].setup,
        jokePunchline6: result[5].punchline,
        jokeSetup7: result[6].setup,
        jokePunchline7: result[6].punchline,
        jokeSetup8: result[7].setup,
        jokePunchline8: result[7].punchline,
        jokeSetup9: result[8].setup,
        jokePunchline9: result[8].punchline,
        jokeSetup10: result[9].setup,
        jokePunchline10: result[9].punchline
      })

    })

  }

  componentDidMount() {
    this.fetchJoke();
    this.fetchTenJokes();
  }

  render() {
    return (<div>
      <button onClick={this.fetchJoke}>Give me another one!</button>
      <button onClick={this.fetchTenJokes}>Give me another ten!</button>
      <h1>{this.state.jokeSetup1}</h1>
      <h1>{this.state.jokePunchline1}</h1>
      <h2>{this.state.lineBreak}</h2>
      <h1>{this.state.jokeSetup2}</h1>
      <h1>{this.state.jokePunchline2}</h1>
      <h2>{this.state.lineBreak}</h2>
      <h1>{this.state.jokeSetup3}</h1>
      <h1>{this.state.jokePunchline3}</h1>
      <h2>{this.state.lineBreak}</h2>
      <h1>{this.state.jokeSetup4}</h1>
      <h1>{this.state.jokePunchline4}</h1>
      <h2>{this.state.lineBreak}</h2>
      <h1>{this.state.jokeSetup5}</h1>
      <h1>{this.state.jokePunchline5}</h1>
      <h2>{this.state.lineBreak}</h2>
      <h1>{this.state.jokeSetup6}</h1>
      <h1>{this.state.jokePunchline6}</h1>
      <h2>{this.state.lineBreak}</h2>
      <h1>{this.state.jokeSetup7}</h1>
      <h1>{this.state.jokePunchline7}</h1>
      <h2>{this.state.lineBreak}</h2>
      <h1>{this.state.jokeSetup8}</h1>
      <h1>{this.state.jokePunchline8}</h1>
      <h2>{this.state.lineBreak}</h2>
      <h1>{this.state.jokeSetup9}</h1>
      <h1>{this.state.jokePunchline9}</h1>
      <h2>{this.state.lineBreak}</h2>
      <h1>{this.state.jokeSetup10}</h1>
      <h1>{this.state.jokePunchline10}</h1>

    </div>)
  }

}

export default JokeComponent
