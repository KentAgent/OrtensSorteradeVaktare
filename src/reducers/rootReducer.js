import { combineReducers } from 'redux'

import citiesReducer from './citiesReducer'
import norrisReducer from './norrisReducer'
import jokeReducer from './jokeReducer'
import dogReducer from './dogReducer'
import firebaseReducer from './firebaseReducer'

export default combineReducers({
    cities: citiesReducer,
    chuckReducer: norrisReducer,
    hahasofunnyReducer: jokeReducer,
    doggoReducer: dogReducer,
    firebaseReducer: firebaseReducer
})
