import React from 'react'
import Part from './Part'

// Header component
const Content = ({ course }) => {
    console.log('Content Course Part: ', course.parts)
    const parts = () => course.parts.map(part => <Part key={part.id} part={part}/>)

    return (
        <div>
            {parts()}
        </div>
    )
}

export default Content