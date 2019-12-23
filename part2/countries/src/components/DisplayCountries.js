import React from 'react'
import Country from './Country'
import CountryDetails from './CountryDetails'

const DisplayCountries = ({ countries, filteredCountryLength }) => {
    // console.log('Display props: ', countries)

    const _displayList = () => countries.map(country => {
        console.log('displayList props: ', country)
        
        if(filteredCountryLength === 1) {
            return (
                <div>
                    <CountryDetails key={country.name} country={country}/>
                </div>
            )
        }
        else {
            return (
                <div>
                    <Country key={country.name} country={country}/>
                </div>
            )
        }
    })
    
    return (
        <div>
            {_displayList()}
        </div>
    )
}

export default DisplayCountries