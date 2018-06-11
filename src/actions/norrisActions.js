import { FETCH_CATEGORIES } from './types'

export const fetchCategories = () => dispatch => {
        fetch('http://api.icndb.com/categories')
        .then(response => response.json())
        .then(result => dispatch({
            type: FETCH_CATEGORIES,
            payload: result
        })
    )
}
