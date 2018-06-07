import React, {Component} from 'react'

class JokeComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      lineBreak: '',
      jokeSetup: [],
      jokePunchline: []
    }
    this.fetchJoke = this.fetchJoke.bind(this)
    this.fetchTenJokes = this.fetchTenJokes.bind(this)

  }

  fetchJoke() {
    fetch('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke').then(response => {
      return response.json();
    }).then(result => {
      console.log(result)
      let a = this.state.jokeSetup.slice();
      let b = this.state.jokePunchline.slice();
      a[0] = result.setup;
      b[0] = result.punchline;
      this.setState({
        jokeSetup: a,
        jokePunchline: b
      })

    })

  }

  fetchTenJokes() {
    fetch('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten').then(response => {
      return response.json();
    }).then(result => {
      console.log(result)
      let a = this.state.jokeSetup.slice();
      let b = this.state.jokePunchline.slice();
      a[0] = result[0].setup;
      b[0] = result[0].punchline;
      a[1] = result[1].setup;
      b[1] = result[1].punchline;
      a[2] = result[2].setup;
      b[2] = result[2].punchline;
      a[3] = result[3].setup;
      b[3] = result[3].punchline;
      a[4] = result[4].setup;
      b[4] = result[4].punchline;
      a[5] = result[5].setup;
      b[5] = result[5].punchline;
      a[6] = result[6].setup;
      b[6] = result[6].punchline;
      a[7] = result[7].setup;
      b[7] = result[7].punchline;
      a[8] = result[8].setup;
      b[8] = result[8].punchline;
      a[9] = result[9].setup;
      b[9] = result[9].punchline;
      this.setState({
        lineBreak: '-----------------',
        jokeSetup: a,
        jokePunchline: b
      })

    })

  }

  componentDidMount() {
    this.fetchJoke();
  }

  render() {
    return (<div>
      <button onClick={this.fetchJoke}>Give me another one!</button>
      <button onClick={this.fetchTenJokes}>Give me another ten!</button>
      <h1>{this.state.jokeSetup[0]}</h1>
      <h1>{this.state.jokePunchline[0]}</h1>
      <h2>{this.state.lineBreak}</h2>
      <h1>{this.state.jokeSetup[1]}</h1>
      <h1>{this.state.jokePunchline[1]}</h1>
      <h2>{this.state.lineBreak}</h2>
      <h1>{this.state.jokeSetup[2]}</h1>
      <h1>{this.state.jokePunchline[2]}</h1>
      <h2>{this.state.lineBreak}</h2>
      <h1>{this.state.jokeSetup[3]}</h1>
      <h1>{this.state.jokePunchline[3]}</h1>
      <h2>{this.state.lineBreak}</h2>
      <h1>{this.state.jokeSetup[4]}</h1>
      <h1>{this.state.jokePunchline[4]}</h1>
      <h2>{this.state.lineBreak}</h2>
      <h1>{this.state.jokeSetup[5]}</h1>
      <h1>{this.state.jokePunchline[5]}</h1>
      <h2>{this.state.lineBreak}</h2>
      <h1>{this.state.jokeSetup[6]}</h1>
      <h1>{this.state.jokePunchline[6]}</h1>
      <h2>{this.state.lineBreak}</h2>
      <h1>{this.state.jokeSetup[7]}</h1>
      <h1>{this.state.jokePunchline[7]}</h1>
      <h2>{this.state.lineBreak}</h2>
      <h1>{this.state.jokeSetup[8]}</h1>
      <h1>{this.state.jokePunchline[8]}</h1>
      <h2>{this.state.lineBreak}</h2>
      <h1>{this.state.jokeSetup[9]}</h1>
      <h1>{this.state.jokePunchline[9]}</h1>

    </div>)
  }

}

export default JokeComponent
