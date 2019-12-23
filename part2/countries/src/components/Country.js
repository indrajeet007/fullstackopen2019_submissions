import React, { useState } from 'react'
import CountryDetails from './CountryDetails'

const Country = ({ country }) => {
    console.log('Country props: ', country.name)
    
    const [ buttonClicked, setButtonClicked ] = useState(true)

    const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

    return (
        <div>
            { buttonClicked ? country.name : <CountryDetails key={country.name} country={country}/> }
            
            <Button onClick={() => setButtonClicked(!buttonClicked)} text={ buttonClicked ? "show" : "close" }/>
        </div>
    )
}

export default Country