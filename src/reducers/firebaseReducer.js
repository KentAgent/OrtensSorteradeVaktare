import { GET_CHAT } from '../actions/types'


const initialState = {
  firebase:[],
  value: '',
  message: ''
}

export default function(state = initialState, action) {
    switch (action.type) {
      case GET_CHAT:
        return {
          ...state,
          firebase: action.payload,
          categories: []
        }
       default:
        return state
      }
    }
