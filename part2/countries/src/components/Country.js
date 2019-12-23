import React, { useState } from 'react'
import CountryDetails from './CountryDetails'

const Country = ({ country }) => {
    console.log('Country props: ', country.name)
    
    const [ buttonClicked, setButtonClicked ] = useState(true)

    const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

    return (
        <div>
            { buttonClicked ? <ul key={country.name}><li>{country.name}</li></ul> : <CountryDetails key={country.name} country={country}/> }
            
            <Button onClick={() => setButtonClicked(!buttonClicked)} text='show'/>
        </div>
    )
}

export default Country