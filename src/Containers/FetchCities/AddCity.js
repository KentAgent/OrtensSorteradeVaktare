import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addCity } from '../../actions/citiesActions'
import './AddCity.css'

class AddCity extends Component {
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
        this.setState({ [event.target.name]: event.target.value })
    }

    onSubmit(event) {
        event.preventDefault()

        const city = {
            name: this.state.name,
            population: this.state.population
        }

        this.props.addCity(city)
    }

    render() {
        return (
            <div className="AddCity">
                <h1>Add City</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>City Name: </label><br />
                        <input type="text" name="name" onChange={this.onChange} value={this.state.cityName}/>
                    </div>
                    <div>
                        <label>Population: </label><br />
                        <input type="text" name="population" onChange={this.onChange} value={this.state.population}/>
                    </div>
                    <br />
                    <button type="submit">Add City</button>
                </form>
            </div>
        )
    }
}

AddCity.PropTypes = {
    addCity: PropTypes.func.isRequired
}

export default connect(null, { addCity })(AddCity)