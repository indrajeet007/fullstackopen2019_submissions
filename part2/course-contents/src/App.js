import React from 'react';
import './App.css';
import Course from './components/Course'
import Total from './components/Total'

const App = () => {
  const course = [
    {
      name: 'Half Stack application development',
      id: 1,
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
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div style={{'marginLeft':'10px'}}>
      <h1>Web Development Curriculum</h1>
      <Course course={course[0]} />
      <Total course={course[0]} />

      <Course course={course[1]} />
      <Total course={course[1]} />
    </div>
  )
}

export default App;
