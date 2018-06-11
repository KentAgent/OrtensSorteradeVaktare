import { FETCH_CATEGORIES, FETCH_CHUCKJOKE, FETCH_SOMEONEELSEJOKE } from './types'

export const fetchChuckJoke = () => dispatch => {
    fetch('http://api.icndb.com/jokes/random')
      .then(response => response.json())
      .then(result => dispatch({
          type: FETCH_CHUCKJOKE,
          payload: result
      })
  )
}

export const fetchCategories = () => dispatch => {
        fetch('http://api.icndb.com/categories')
        .then(response => response.json())
        .then(result => dispatch({
            type: FETCH_CATEGORIES,
            payload: result
        })
    )
}

export const fetchSomeOneElsesData = () =>  dispatch => {
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var adress = ('http://api.icndb.com/jokes/random' + '?firstName=' + firstName + '&amp&lastName=' + lastName)
  console.log(firstName, lastName);
  console.log(adress);
  fetch(adress)
    .then(response => response.json())
    .then(result => dispatch({
      type: FETCH_SOMEONEELSEJOKE,
      payload : result
    })
  )
}

    //   {
    //   console.log(result.value.joke)
    //   this.setState({
    //     joke: result.value.joke
    //   })
    //  });
