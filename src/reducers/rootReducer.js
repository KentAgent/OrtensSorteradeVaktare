import { combineReducers } from 'redux'

import citiesReducer from './citiesReducer'
import norrisReducer from './norrisReducer'
import jokeReducer from './jokeReducer'

export default combineReducers({
    cities: citiesReducer,
    chuckReducer: norrisReducer,
    hahasofunnyReducer: jokeReducer
})
