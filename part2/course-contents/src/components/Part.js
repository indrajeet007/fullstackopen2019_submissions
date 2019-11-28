import React from 'react'

// Part component
const Part = ({ part }) => {
    // console.log('Parts: ', part)
    return (
        <div>
            <p>{part.name} {part.exercises}</p>
        </div>
    )
}

export default Part

