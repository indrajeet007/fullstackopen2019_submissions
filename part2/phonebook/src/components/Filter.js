import React, { useState } from 'react'

const Filter = ({ persons, handleInput }) => {
    const [ searchName, setSearchName ] = useState('')

    const handleSearchNameChange = (event) => {
        setSearchName(event.target.value)

        const i = persons.filter(person => person.name === event.target.value).map(person => person.name)
        let filteredName = i[0]
        // console.log('Filtered Name: ', filteredName)
        // console.log('Filtered Value: ', event.target.value)

        handleInput({
          event, filteredName
        })
    }  

    return (
      <div>
        filter shown with <input value={searchName} onChange={handleSearchNameChange}/>
      </div>
    )
}

export default Filter