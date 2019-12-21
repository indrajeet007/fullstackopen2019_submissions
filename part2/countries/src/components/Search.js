import React, { useState } from 'react';

const Search = ({ countries, handleInput }) => {
    const [ searchInput, setSearchInput ] = useState('')

    const handleSearchChange = (event) => {
        setSearchInput(event.target.value)
        console.log('Search: ', event.target.value)

        const filterByCountry = countries.filter(country => {
            return country.name.toLowerCase().includes(event.target.value.toLowerCase())
        })

        console.log('filterByCountry in Search log: ', filterByCountry)

        handleInput({
            event, filterByCountry
        })

    }

    return (
        <div>
            find countries <input value={searchInput} onChange={handleSearchChange}/>
        </div>
    )
}

export default Search