import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// Stateless components
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

// Main app component
const App = (props) => {
  const [selected, setSelected] = useState(0)

  // calculate random anecdote index value
  const calRandomAnec = (props) => {
      const randomAnec = Math.floor(Math.random() * props.anecdotes.length)
      
      // save index value to selected state
      setSelected(randomAnec)
  }

  return (
    <div>
        {selected === 0 ? (<div>{props.anecdotes[selected]}</div>) : <div>{props.anecdotes[selected]}</div>}
        <Button onClick={() => calRandomAnec(props)} text="next anecdote"/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)