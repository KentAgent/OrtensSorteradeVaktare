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
