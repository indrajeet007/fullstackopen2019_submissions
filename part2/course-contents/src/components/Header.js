import React from 'react'

// Header component
const Header = ({ course }) => {
    console.log('Header Name: ', course.name)
    return (
        <div>
            <h1>{course.name}</h1>
        </div>
    )
}

export default Header