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
           <p>{props.part} {props.exercises}</p>
        </div>
    )
}

// Content component
const Content = (props) => {
    return (
        <div>
           <Part part={props.part} exercises={props.exercises}/>
           <Part part={props.part} exercises={props.exercises}/>
           <Part part={props.part} exercises={props.exercises}/>
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
    const part1 = {
      name: 'Fundamentals of React',
      exercises: 10
    }
    const part2 = {
      name: 'Using props to pass data',
      exercises: 7
    }
    const part3 = {
      name: 'State of a component',
      exercises: 14
    }

  return (
    <div>
        <Header course={course} />

        <Content part={part1.name} exercises={part1.exercises} />

        <Total exercises={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))