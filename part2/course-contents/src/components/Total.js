import React from 'react'

// Total component
const Total = ({ course }) => {
    const total = course.parts.reduce((total, e) => {
        return total += e.exercises
    }, 0)
    // console.log('Course Total: ', total)

    return (
        <div>
            <p><strong>total of {total} exercises</strong></p>
        </div>
    )
}

export default Total