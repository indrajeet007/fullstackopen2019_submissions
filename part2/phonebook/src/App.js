import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const rows = () => persons.map(person => <Person key={person.name} person={person}/>)

  const addName = (event) => {
    event.preventDefault()

    const nameObject = {
        name: newName
    }

    if(persons.some(el => el.name === newName)) {
      return (
        window.alert(`${newName} is already added to phonebook`)
      )
    }

    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  return (
    <div style={{'marginLeft':'10px'}}>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
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