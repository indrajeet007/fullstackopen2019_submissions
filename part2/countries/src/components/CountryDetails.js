import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CountryDetails = ({ country }) => {
    const [ weatherData, setWeatherData ] = useState([])

    useEffect(() => {
        axios
            .get(`http://api.weatherstack.com/current?access_key=6ccdae9cfb1067242fdf979d70b7bb22&query=${country.name}`)
            .then(response => {
            console.log('in weatherReport!')
            const data = response.data.current
            setWeatherData(data)
        })
    }, [])

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

    console.log('weatherData props: ', weatherData)
    
    return (
        <div>
            <h2>{country.name}</h2>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <br />
            <h3>languages</h3>
            {_languages()}
            <img src={country.flag} alt="" height="200" width="300"/>
            <h3>Weather in {country.capital}</h3>
            <p>temperature: {weatherData.temperature} Celsius</p>
            <img src={weatherData.weather_icons} alt="" height="100" width="100"/>
            <p>wind: {weatherData.wind_speed} kph direction {weatherData.wind_dir}</p>
        </div>
    )
}

export default CountryDetails