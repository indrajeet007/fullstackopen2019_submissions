import React from 'react';
import './App.css';
import Course from './components/Course'
import Total from './components/Total'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }
  
  const total = course.parts.reduce((total, e) => {
    return total += e.exercises
  }, 0)
  
  console.log('Sum: ', total)

  return (
    <div style={{'marginLeft':'10px'}}>
      <Course course={course} />
      <Total total={total} />
    </div>
  )
}

export default App;
