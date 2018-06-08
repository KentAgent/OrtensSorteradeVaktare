import React, { Component } from 'react'
import './FetchCities.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AddCity from './AddCity'
import { fetchCities } from '../../actions/citiesActions'

//let citiesListPrinted = ''

class FetchCities extends Component {

    // fetch('http://cities.jonkri.se')
    //     .then(response => {
    //         return response.json()
    //     }).then(result => {
    //         console.log(result)
    //         this.setState({
    //             citiesData: result
    //         })
    //     }).catch(error => {
    //         console.log('There was an error: ', error)
    //     })

    componentWillMount() {
        this.props.fetchCities()
    }

    // When component recieves new property, this will run
    componentWillReceiveProps(nextProps) {
        if (nextProps.newCity) {
            this.props.cities.unshift(nextProps.newCity)
        }
    }

    render() {

        

        const citiesItems = this.props.cities.map(city => (
            <ul className="citiesList" key={city.id}>
                <li>{city.name}</li>
                <li>{city.population}</li>
                <button>Delete</button>
            </ul>
        ))
        
        return (
            <div className="FetchCities">
                <div className="AddCityDiv">
                <section>
                    <input type="text"/>
                </section>
                <section>
                    <button id="AddCityButton" onClick={this.props.onFetchCities}>Add City</button>
                </section>
                </div>
                <AddCity />
                <h1>List of Cities</h1>
                {citiesItems}
            </div>
        )
    }
}

FetchCities.PropTypes = {
    fetchCities: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    newCity: PropTypes.object
}

const mapStateToProps = state => ({
    cities: state.cities.items,
    newCity: state.cities.item
})

// const mapDispatchToProps = dispatch => {
//     return {
//         onFetchCities: () => dispatch({type: 'FETCH_CITIES'})
//     }
// }

export default connect(mapStateToProps, {fetchCities})(FetchCities)

