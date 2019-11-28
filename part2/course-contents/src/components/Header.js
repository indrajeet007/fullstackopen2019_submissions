import React from 'react'

// Header component
const Header = ({ course }) => {
    // console.log('Header Name: ', course.name)
    return (
        <div>
            <h2>{course.name}</h2>
        </div>
    )
}

export default Header