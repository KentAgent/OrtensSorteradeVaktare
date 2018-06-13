import { FETCH_CITIES, NEW_CITY, REMOVE_CITY, EDIT_CITY } from '../actions/types'

const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_CITIES:
            return {
                ...state,
                items: action.payload
            }
        case NEW_CITY:
            return {
                ...state,
                item: action.payload,
                items: action.payload
            }
        case REMOVE_CITY:
            return {
                //...state.items.filter(item => item.id !== action.payload.id),
                ...state,
                items: action.payload
            }
        case EDIT_CITY:
            return {
                ...state,
                items: action.payload
            }
        default:
        return state
    }
}