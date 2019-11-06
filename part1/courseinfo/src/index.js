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
const Part = ({ parts, exercises }) => {
    return (
        <div>
           <p>{parts} {exercises}</p>
        </div>
    )
}

// Content component
const Content = (props) => {
    console.log("Content: ", props)
    return (
        <div>
           <Part parts={props.parts[0].name} exercises={props.parts[0].exercises} />
           <Part parts={props.parts[1].name} exercises={props.parts[1].exercises} />
           <Part parts={props.parts[2].name} exercises={props.parts[2].exercises} />
        </div>
    )
}

// Total component
const Total = (props) => {
    return (
        <div>
            <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
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

            <Content parts={course.parts} />

            <Total parts={course.parts} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))