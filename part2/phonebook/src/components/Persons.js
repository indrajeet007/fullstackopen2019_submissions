import React from 'react'
import Person from './Person'

const Persons = (props) => {
    const personRow = () => {
        return props.persons.map(person => <Person key={person.name} person={person}/>)
    }

    // const rows = () => filterByName.map(person => <Persons key={person.name} person={person}/>)

    return (
        <div>
            {personRow()}
        </div>
    )
}

export default Persons