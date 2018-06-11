import React, { Component } from 'react'
import './FetchCities.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AddCity from './AddCity'
import { fetchCities, removeCity } from '../../actions/citiesActions'

class FetchCities extends Component {

    componentWillMount() {
        this.props.fetchCities()
    }

    // When component recieves new property, this will run
    componentWillReceiveProps(nextProps) {
        console.log(nextProps.newCity)
        if (nextProps.newCity) {
            this.props.cities.unshift(nextProps.newCity)
        }
    }

    // componentDidUpdate(removedProps) {
    //     const cities = [...this.props.cities]
    //     if (removedProps.removedCity) {
    //         cities.splice(removedProps, 1)
    //         this.props.cities = cities
    //     }
    // }

    // deleteCityHandler(removedProps) {
    //     const cities = [...this.props.cities]
    //     if (removedProps.removedCity) {
    //         cities.splice(removedProps, 1)
    //         this.props.cities = cities
    //     }
    // }

    render() {
        const citiesItems = this.props.cities.map(city => (
            <ul className="citiesList" key={city.id}>
                <li>{city.name}</li>
                <li>{city.population}</li>
                <button id="editCityButton">Edit</button>
                <button id="removeCityButton" onClick={() => this.props.removeCity(city.id)}>Delete</button>
            </ul>
        ))

        return (
            <div className="FetchCities">
                <AddCity />
                <h1>List of Cities</h1>
                {citiesItems}
            </div>
        )
    }
}

FetchCities.propTypes = {
    fetchCities: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    newCity: PropTypes.object,
    removeCity: PropTypes.func.isRequired,
    removedCity: PropTypes.object
}

const mapStateToProps = state => ({
    cities: state.cities.items,
    newCity: state.cities.item
})

export default connect(mapStateToProps, {fetchCities, removeCity})(FetchCities)
