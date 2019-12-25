import React, { useState } from 'react'

const PersonForm = ({ persons, handleClick }) => {
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const addPerson = (event) => {
        event.preventDefault()
    
        const nameObject = {
            name: newName,
            number: newNumber
        }
    
        if(persons.some(el => el.name === newName)) {
            let message = `${newName} is already added to phonebook, replace the old number with a new one?`
            
            const result = window.confirm(message)

            if(result === true) {
                console.log('in here at addPersons')
                handleClick(nameObject)
                setNewName('')
                setNewNumber('')
            }
            else {
                return 0
            }
        }
        else {
            handleClick(nameObject)
        }
        

        // setPersons(persons.push(nameObject))
        // persons.push(nameObject)


        
        // console.log('Form persons: ', persons)

        return persons
    }

    return (
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
    )
}

export default PersonForm