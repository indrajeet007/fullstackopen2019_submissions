import React from 'react'
import ReactDOM from 'react-dom'

// Header component
const Header = (props) => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}

// Part component
const Part = (props) => {
    console.log(props)
    return (
        <div>
           <p>{props.parts} {props.exercises}</p>
        </div>
    )
}

// Content component
const Content = (props) => {
    console.log(props.parts)
    return (
        <div>
           <Part parts={props.parts.name} exercises={props.parts.exercises} />
           <Part parts={props.parts.name} exercises={props.parts.exercises} />
           <Part parts={props.parts.name} exercises={props.parts.exercises} />
        </div>
    )
}

// Total component
const Total = (props) => {
    return (
        <div>
            <p>Number of exercises {props.parts.exercises}</p>
        </div>
    )
}

// main App component

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header course={course.name} />

            <Content parts={course.parts[0]} />

            <Total parts={course.parts[0].exercises} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))