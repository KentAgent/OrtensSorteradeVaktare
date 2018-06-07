const initialState = {
    citiesData: []
}

const reducer = (state = initialState, action) => {
    if (action === 'FETCH_CITIES') {
        return {
            citiesData: state.citiesData
        }
    }
    return state
}

export default reducer