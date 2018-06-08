import React, { Component } from 'react'

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

        fetch('http://cities.jonkri.se', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(city)
        })
        .then(response => response.json())
        .then(result => console.log(result))
    }

    render() {
        return (
            <div>
                <h1>Add City</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>CityName: </label><br />
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

export default AddCity