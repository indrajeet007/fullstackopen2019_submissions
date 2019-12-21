import React from 'react'

const CountryDetails = ({ country }) => {

const languages = () => country.languages.map(language => <li key={language.name}>{language.name}</li>)
    
    return (
        <div>
            <h2>{country.name}</h2>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <br />
            <h3>languages</h3>
            <ul>
                {languages()}
            </ul>
            <img src={country.flag} alt="" height="200" width="300"/>
        </div>
    )
}

export default CountryDetails