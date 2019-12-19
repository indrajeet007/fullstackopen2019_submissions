import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons ] = useState([])
  
  const [ showAll, setShowAll ] = useState(true)
  const [ filteredNameInput, setFilteredNameInput ]  = useState('')

  useEffect(() => {
    // console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        // console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  
  const _pushToArr = (value) => {
    let updatedPersons = persons.concat(value)
    setPersons(updatedPersons)
  }

  const _filterAsInput = ({ event, filteredName }) => {
    // console.log('App event: ', event.target.value)
    // console.log('App filteredName: ', filteredName)

    if(event.target.value === filteredName) {
      // console.log('showAll after showAllPersons call: ', showAll)

      if(event.target.value === '') {
        return setShowAll(showAll)
      }
      
      const displayFilterWise = persons.filter(person => { 
        if(person.name === filteredName)
        {
          setShowAll(!showAll)
          return person
        }
        return null
      })
      
      setFilteredNameInput(displayFilterWise)
      
      return showAll ? persons :  displayFilterWise
    }
    else {
      setShowAll(true)
    }
  }
  // console.log('showAll after _filterAsInput call ends: ', showAll)

  return (
    <div style={{ 'marginLeft':'10px' }}>
      <h2>Phonebook</h2>
      <Filter persons={persons} handleInput={_filterAsInput}/>
      <h2>add a new</h2>
      <PersonForm persons={persons} handleClick={_pushToArr}/>
      <h3>Numbers</h3>
      {
        showAll ? (<Persons persons={persons}/>) : ( <Persons persons={filteredNameInput}/>)
      }
    </div>
  )
}

export default App