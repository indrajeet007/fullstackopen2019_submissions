import React from 'react'

const Person = ({ person, handlePersonDelete }) => {

    const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
    
    return (
        <p>
            {person.name} {person.number} <Button onClick={handlePersonDelete} text='delete'/>
        </p>
    )
}

export default Person