import {FETCH_JOKE, FETCH_TENJOKES} from './types'

export const fetchJoke = () => dispatch => {
    fetch('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke')
      .then(response => response.json())
      .then(result => dispatch({
          type: FETCH_JOKE,
          payload: result
      })
  )
}

export const fetchTenJokes = () => dispatch => {
  fetch('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten')
  .then(response => response.json())
  .then(result => dispatch({
    type: FETCH_TENJOKES,
    payload: result
  })
)
}
