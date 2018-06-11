import { FETCH_CATEGORIES, FETCH_CHUCKJOKE, FETCH_SOMEONEELSEJOKE } from '../actions/types'

const initialState = {
    joke: '',
    categories: []
}

export default function(state = initialState, action) {
    switch (action.type) {
      case FETCH_CHUCKJOKE:
          return {
              ...state,
              joke: action.payload.value.joke
          }
      case FETCH_SOMEONEELSEJOKE:
          return {

          }
      case FETCH_CATEGORIES:
      console.log('action payload', action.payload);
          return {
              ...state,
              categories: action.payload.value
          }
        default:
        return state
    }
}
