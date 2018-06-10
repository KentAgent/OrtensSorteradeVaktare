import { FETCH_CITIES, NEW_CITY } from './types'

// Thunk middleware allows us to call the dispatch function directly so we can make an asynchronus request
export const fetchCities = () => dispatch => {
        fetch('http://cities.jonkri.se')
        .then(response => response.json())
        .then(result => dispatch({
            type: FETCH_CITIES,
            payload: result
        })
    ) 
}

export const addCity = cityData => dispatch => {
    fetch('http://cities.jonkri.se', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cityData)
        })
        .then(response => response.json())
        .then(result => dispatch({
            type: NEW_CITY,
            payload: result
        })
    )
}