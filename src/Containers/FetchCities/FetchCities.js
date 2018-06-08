import React, { Component } from 'react'
import './FetchCities.css'
import { connect } from 'react-redux'
import AddCity from './AddCity'

//let citiesListPrinted = ''

class FetchCities extends Component {

    // Initial state when loading app
    constructor(props) {
        super(props)
        this.state = {
            citiesData: []
        }
    }

    // componentDidMount is called after the component has been rendered into the DOM
    componentDidMount() {
        fetch('http://cities.jonkri.se')
        .then(response => {
            return response.json()
        }).then(result => {
            console.log(result)
            this.setState({
                citiesData: result
            })
        }).catch(error => {
            console.log('There was an error: ', error)
        })
    }

    render() {
        if (!this.state.citiesData) return <p>Loading...</p>

        let sortedList = null

        sortedList = (
            <div>
                {this.state.citiesData.map((city) => {
                    return (
                        <ul className="citiesList" key={city.id}>
                            <li>{city.name}</li>
                            <li>{city.population}</li>
                            <button>Delete</button>
                        </ul>
                    )
                })}
            </div>
        )

        const citiesItems = this.state.citiesData.map(city => (
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

const mapStateToProps = state => {
    return {
        citiesData: state.citiesData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchCities: () => dispatch({type: 'FETCH_CITIES'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchCities)

