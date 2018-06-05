import React, { Component } from 'react'
import './FetchCities.css'

let citiesListPrinted = ''

class FetchCities extends Component {

    // Initial state when loading app
    constructor(props) {
        super(props)
        this.state = {
            citiesData: [],
            citiesList: ''
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

            let citiesArray = this.state.citiesData
            for (let i = 0; i < citiesArray.length; i++) {
                citiesListPrinted += citiesArray[i].name + ' ' + citiesArray[i].population + '\n'
                console.log(citiesListPrinted)
            }

            this.setState({
                citiesList: citiesListPrinted
            })
        }).catch(error => {
            console.log('There was an error: ', error)
        })  
    }

    render() {
        if (!this.state.citiesData) return <p>Loading...</p>
        return (
            <div className="FetchCities">
                <p>{this.state.citiesList}</p>
            </div>
        )
    }
}

export default FetchCities