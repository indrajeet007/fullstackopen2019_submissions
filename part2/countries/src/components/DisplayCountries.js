import React from 'react'
import Country from './Country'
import CountryDetails from './CountryDetails'

const DisplayCountries = ({ countries, filteredCountryLength }) => {
    // console.log('Display props: ', countries)

    const displayList = () => countries.map(country => {
        if(filteredCountryLength === 1) {
            return (
                <CountryDetails key={country.name} country={country}/>
            )
        }
        return (
            <Country key={country.name} country={country}/>
        )
    })
    
    return (
        <div>
            {displayList()}
        </div>
    )
}

export default DisplayCountries