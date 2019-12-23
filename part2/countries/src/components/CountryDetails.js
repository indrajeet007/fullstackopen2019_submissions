import React from 'react'

const CountryDetails = ({ country }) => {
    console.log('CountryDetails props: ', country)

    const _languages = () => country.languages.map(language => {
        console.log('Languages props: ', language)

        return (
            <div>
                <ul key={language.name}>
                    <li>
                        {language.name}
                    </li>
                </ul>
            </div>
        )
    })
    
    return (
        <div>
            <h2>{country.name}</h2>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <br />
            <h3>languages</h3>
            {_languages()}
            <img src={country.flag} alt="" height="200" width="300"/>
        </div>
    )
}

export default CountryDetails