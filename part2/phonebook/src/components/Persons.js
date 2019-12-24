import React from 'react'
import Person from './Person'
import personService from '../services/persons'

const Persons = ({ persons, handleRefresh }) => {
    const handlePersonDelete = id => {
        const person = persons.find(person => person.id === id)
        let message = `Delete ${person.name} ?`
        const result = window.confirm(message)

        if(result) {
            personService.deletePerson(id)
        }
        else {
            return 0
        }
        
        const newList = persons.filter(person => person.id !== id)
        handleRefresh(newList)
    }

    const personRow = () => {
        return persons.map(person => <Person key={person.name} person={person} handlePersonDelete={() => handlePersonDelete(person.id)}/>)
    }

    return (
        <div>
            {personRow()}
        </div>
    )
}

export default Persons