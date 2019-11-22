import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// Stateless components
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Statistics = ({ title, value, sign }) => <div>{title} {value} {sign}</div>

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    // state to collect individual clicks
    const [allClicks, setAll] = useState([])

    const handleGoodClick = () => {
        setAll(allClicks.concat(1))
        setGood(good + 1)
    }

    const handleNeutralClick = () => {
        setAll(allClicks.concat(0))
        setNeutral(neutral + 1)
    }

    const handleBadClick = () => {
        setAll(allClicks.concat(-1))
        setBad(bad + 1)
    }

    const calAll = () => good + neutral + bad

    const calAverage = arr => arr.reduce((a, b) => a + b, 0) / arr.length

    const calPositive = () => (good / (good + neutral + bad)) * 100

    return (
        <div>
            <h1>give feedback</h1>
            <Button onClick={handleGoodClick} text='good' />
            <Button onClick={handleNeutralClick} text='neutral' />
            <Button onClick={handleBadClick} text='bad' />
            <br />
            {/* <p>Clicks in order: {allClicks.join(' ')}</p> */}
            <h1>statistics</h1>
            {allClicks.length > 0 ? (<div><Statistics title='good' value={good} />
            <Statistics title='neutral' value={neutral} />
            <Statistics title='bad' value={bad} />
            <Statistics title='all' value={calAll()} />
            <Statistics title='average' value={calAverage(allClicks)} />
            <Statistics title='positive' value={calPositive()} sign='%' /></div>) : <p>No feedback given</p>}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));