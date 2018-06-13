import React, { Component } from 'react'
import './FetchCities.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AddCity from './AddCity'
import { fetchCities, removeCity, editCity } from '../../actions/citiesActions'

class FetchCities extends Component {

    componentWillMount() {
        this.props.fetchCities()
    }

    // When component recieves new property, this will run
    componentWillReceiveProps(nextProps) {
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

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            population: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(event) {
        console.log('Event Value: ', event.target.value)
        this.setState({ [event.target.name]: event.target.value })
    }

    onSubmit(id) {
        const editedCity = {
            name: this.state.name,
            population: this.state.population
        }
        console.log('ID: ', id)
        
        
        this.props.editCity(id, editedCity)
    }
    

    render() {
        const citiesItems = this.props.cities.map(city => (
            <ul className="citiesList" key={city.id}>
                <li>{city.name}</li>
                <li>{city.population}</li>
                <input type="text" name="name" onChange={this.onChange} value={this.props.name}/>
                <input type="text" name="population" onChange={this.onChange} value={this.props.population}/>
                <button id="editCityButton" onClick={() => this.onSubmit(city.id)}>Save</button>
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
    removedCity: PropTypes.object,
    editCity: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    cities: state.cities.items,
    newCity: state.cities.item
})

export default connect(mapStateToProps, {fetchCities, removeCity, editCity})(FetchCities)
