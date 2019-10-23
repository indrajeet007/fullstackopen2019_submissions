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
    return (
        <div>
           <p>{props.name} {props.exercises}</p>
        </div>
    )
}

// Content component
const Content = (props) => {
    // console.log(props.parts)
    return (
        <div>
           <Part parts={props.name} exercises={props.exercises}/>
           <Part parts={props.name} exercises={props.exercises}/>
           <Part parts={props.name} exercises={props.exercises}/>
        </div>
    )
}

// Total component
const Total = (props) => {
    return (
        <div>
            <p>Number of exercises {props.exercises}</p>
        </div>
    )
}

// main App component

const App = () => {
    const course = 'Half Stack application development'
    const parts = [
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

    return (
        <div>
            <Header course={course} />

            <Content parts={parts} />

            <Total parts={parts} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))