import React, { Component } from 'react'
import './ChuckNorris.css'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { fetchCategories, fetchChuckJoke, fetchSomeOneElsesData, fetchChuckJokeWithCategory } from '../actions/norrisActions'

class ChuckNorris extends Component {

  // componentWillMount() {
  //   this.props.fetchCategories()
  // }
  //
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     joke: '',
  //     categories: []
  //   }
  //   this.fetchData = this.fetchData.bind(this)
  //   this.fetchSomeOneElsesData = this.fetchSomeOneElsesData.bind(this)
  // }

  // fetchData() {
  //   fetch('http://api.icndb.com/jokes/random')
  //     .then(response => {
  //       return response.json();
  //      })
  //     .then(result => {
  //       console.log(result.value.joke)
  //       this.setState({
  //         joke: result.value.joke
  //       })
  //      });
  // }

  // fetchSomeOneElsesData() {
  //   var firstName = document.getElementById('firstName').value;
  //   var lastName = document.getElementById('lastName').value;
  //   var adress = ('http://api.icndb.com/jokes/random' + '?firstName=' + firstName + '&amp&lastName=' + lastName)
  //   console.log(firstName, lastName);
  //   console.log(adress);
  //   fetch(adress)
  //     .then(response => {
  //       return response.json();
  //      })
  //     .then(result => {
  //       console.log(result.value.joke)
  //       this.setState({
  //         joke: result.value.joke
  //       })
  //      });
  // }

  // fetchCategories() {
  //   fetch('http://api.icndb.com/categories')
  //     .then(response => {
  //       return response.json();
  //      })
  //     .then(result => {
  //       var categories = result.value
  //       console.log(categories)
  //       var listItems = categories.map((categorie)
  //         <li>{categorie}</li>
  //         );
  //       });
  // }


render() {


  const categoryItems = this.props.categories.map(category => (
      <ul className="categoryList" key={category}>
          <li>{category}</li>
          <button onClick={() => this.props.fetchChuckJokeWithCategory(category)}>Fetch Chuck info on category</button>
      </ul>
  ))

//          <button onClick={this.props.fetchCategories}>Fetch Chuck info on category</button>


    return (
        <div className="FetchCities">
          <div>
            <img src={require('./chucknorris_logo.png')}></img>
          </div>
          <div>
            <button className="nextChuck" onClick={this.props.fetchChuckJoke}>Check for more awsome cool verified information about Chuck</button>
          </div>
          <div>
            <input id ='firstName' placeholder="Förnamn"></input>
            <input id = 'lastName' placeholder="Efternamn"></input>
          </div>
          <div>
            <button className="nextSomeOneElse" onClick={this.props.fetchSomeOneElsesData}>Check for more awsome cool verified information about someone else</button>
          </div>
          <div>
            <button className="showCategories" onClick={this.props.fetchCategories}>Show categories for jokes</button>
          </div>
          {categoryItems}
          {console.log(this.props.chuckJoke)}
            <p dangerouslySetInnerHTML={{ __html: this.props.chuckJoke }}></p>
        </div>
    )
  }

}


ChuckNorris.propTypes = {
    fetchCategories: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,

    fetchChuckJoke: PropTypes.func.isRequired,
    chuckJoke: PropTypes.string.isRequired,

    fetchSomeOneElsesData: PropTypes.func.isRequired,
    fetchChuckJokeWithCategory: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    categories: state.chuckReducer.categories,
    chuckJoke: state.chuckReducer.joke,
    //someOneElseJoke: state.categories.someOneElseJoke
})

export default connect(mapStateToProps, {fetchCategories, fetchChuckJoke, fetchSomeOneElsesData, fetchChuckJokeWithCategory})(ChuckNorris)
