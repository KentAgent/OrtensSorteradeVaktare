import React, {Component} from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { fetchJoke, fetchTenJokes } from '../actions/jokeActions'

class JokeComponent extends Component {

  // constructor(props) {
  //   super(props)
  //   this.props = {
  //     lineBreak: '',
  //     jokeSetup: [],
  //     jokePunchline: []
  //   }
  //   this.fetchJoke = this.fetchJoke.bind(this)
  //   this.fetchTenJokes = this.fetchTenJokes.bind(this)
  //
  // }
  //
  // fetchJoke() {
  //   fetch('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke').then(response => {
  //     return response.json();
  //   }).then(result => {
  //     console.log(result)
  //     let a = this.props.jokeSetup.slice();
  //     let b = this.props.jokePunchline.slice();
  //     a = [];
  //     b = [];
  //     a[0] = result.setup;
  //     b[0] = result.punchline;
  //     this.setState({
  //       lineBreak: '',
  //       jokeSetup: a,
  //       jokePunchline: b
  //     })
  //
  //   })
  //
  // }
  //
  // fetchTenJokes() {
  //   fetch('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten').then(response => {
  //     return response.json();
  //   }).then(result => {
  //     console.log(result)
  //     let a = this.props.jokeSetup.slice();
  //     let b = this.props.jokePunchline.slice();
  //     a[0] = result[0].setup;
  //     b[0] = result[0].punchline;
  //     a[1] = result[1].setup;
  //     b[1] = result[1].punchline;
  //     a[2] = result[2].setup;
  //     b[2] = result[2].punchline;
  //     a[3] = result[3].setup;
  //     b[3] = result[3].punchline;
  //     a[4] = result[4].setup;
  //     b[4] = result[4].punchline;
  //     a[5] = result[5].setup;
  //     b[5] = result[5].punchline;
  //     a[6] = result[6].setup;
  //     b[6] = result[6].punchline;
  //     a[7] = result[7].setup;
  //     b[7] = result[7].punchline;
  //     a[8] = result[8].setup;
  //     b[8] = result[8].punchline;
  //     a[9] = result[9].setup;
  //     b[9] = result[9].punchline;
  //     this.setState({
  //       lineBreak: '-----------------',
  //       jokeSetup: a,
  //       jokePunchline: b
  //     })
  //
  //   })
  //
  // }
  //
  // componentDidMount() {
  //   this.fetchJoke();
  // }

  render() {

    const hahaJokeStash = this.props.jokeStash.map(jokeList => (
      <ul key={jokeList}>
      <h1>{jokeList.setup}</h1>
      <h2>{jokeList.punchline}</h2>
      <h1>{this.props.lineBreak}</h1>
    </ul>
    ))

    return (<div>
      <button onClick={this.props.fetchJoke}>Give me another one!</button>
      <button onClick={this.props.fetchTenJokes}>Give me another ten!</button>
      <h1>{this.props.jokeSetup[0]}</h1>
      <h1>{this.props.jokePunchline[0]}</h1>
      {hahaJokeStash}



    </div>)
  }

}

JokeComponent.PropTypes = {
  fetchJoke: PropTypes.func.isRequired,
  fetchTenJokes: PropTypes.func.isRequired,
  jokeStash: PropTypes.array.isRequired,
  lineBreak: PropTypes.string.isRequired,
  jokeSetup: PropTypes.object.isRequired,
  jokePunchline: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  jokeStash: state.hahasofunnyReducer.jokeStash,
  jokeSetup: state.hahasofunnyReducer.jokeSetup,
  jokePunchline: state.hahasofunnyReducer.jokePunchline,
  lineBreak: state.hahasofunnyReducer.lineBreak
})

export default connect(mapStateToProps, {fetchJoke, fetchTenJokes})(JokeComponent)
