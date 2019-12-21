import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/Search';
import DisplayCountries from './components/DisplayCountries';

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ filteredCountry, setFilteredCountry ] = useState([])

  let test = "Too many matches, specify another filter"

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        console.log('response: ', response.data)
        const countriesList = response.data
        setCountries(countriesList)
      })
  }, [])

  const _handleSearch = ({ event, filterByCountry }) => {
    console.log(event.target.value)
    // if(event.target.value === '') {
    //   console.log('in here!')
    //   setFilteredCountry(null)
    // }
    setFilteredCountry(filterByCountry)
  }

  return (
    <div>
      <Search countries={countries} handleInput={_handleSearch}/>
      {
        filteredCountry.length < 10 ? (<DisplayCountries countries={filteredCountry} filteredCountryLength={filteredCountry.length}/>) : (<p>{test}</p>)
      }
    </div>
  )
}

export default App;
