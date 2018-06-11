import { combineReducers } from 'redux'

import citiesReducer from './citiesReducer'
import norrisReducer from './norrisReducer'

export default combineReducers({
    cities: citiesReducer,
    chuckReducer: norrisReducer
})
