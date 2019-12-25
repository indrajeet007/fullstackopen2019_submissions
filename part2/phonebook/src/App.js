import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ showAll, setShowAll ] = useState(true)
  const [ filteredNameInput, setFilteredNameInput ]  = useState('')
  
  useEffect(() => {
    personService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])
  
  const _pushToArr = (nameObject) => {
    console.log('_pushToArr value: ', nameObject)
    const final_object = persons.find(p => {
      if(p.name === nameObject.name)
      {
        return p
      }
      return 0
    });
    if(final_object === undefined)
    {
      personService
      .createPerson(nameObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
    })
    }
    else 
    {
      const person = persons.find(person => person.name === nameObject.name)

      console.log(person)

      personService
      .updatePerson(final_object.id, nameObject)
      .then(changedPerson => {
        console.log(changedPerson)
        setPersons(persons.map(person => person.name !== nameObject.name ? person : changedPerson))
      })
      .catch(error => {
        alert(
          `error updating number to the server`
      )
      }
    )
    }
  }

  const _filterAsInput = ({ event, filteredName }) => {
    if(event.target.value === filteredName) {
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
  
  const _refreshAfterDelete = newList => {
    setPersons(newList)
  }

  return (
    <div style={{ 'marginLeft':'10px' }}>
      <h2>Phonebook</h2>
      <Filter persons={persons} handleInput={_filterAsInput}/>
      <h2>add a new</h2>
      <PersonForm persons={persons} handleClick={_pushToArr}/>
      <h3>Numbers</h3>
      {
        showAll ? (<Persons persons={persons} handleRefresh={_refreshAfterDelete}/>) : ( <Persons persons={filteredNameInput} handleRefresh={_refreshAfterDelete}/>)
      }
    </div>
  )
}

export default App