import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ showAll, setShowAll ] = useState(true)
  const [ searchName, setSearchName ] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchNameChange = (event) => {
    setSearchName(event.target.value)

    const filteredName = persons.filter(person => person.name === event.target.value).map(person => person.name).toString()
    // console.log(filteredName)

    if(filteredName === event.target.value.toString()) {
      if(filteredName === '') {
        return setShowAll(true)
      }

      return setShowAll(false)
    }
    setShowAll(true)
    // console.log(showAll)
  }

  const rows = () => filterByName.map(person => <Person key={person.name} person={person}/>)

  const addPerson = (event) => {
    event.preventDefault()

    const nameObject = {
        name: newName,
        number: newNumber
    }

    if(persons.some(el => el.name === newName)) {
      return (
        window.alert(`${newName} is already added to phonebook`)
      )
    }

    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  }

  const filterByName = showAll ? persons : persons.filter(person => person.name === searchName)

  return (
    <div style={{'marginLeft':'10px'}}>
      <h2>Phonebook</h2>
      <div>
            filter shown with <input value={searchName} onChange={handleSearchNameChange}/>
      </div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {rows()}
    </div>
  )
}

export default App