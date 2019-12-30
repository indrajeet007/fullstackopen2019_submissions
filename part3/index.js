const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

let persons = [
    {
      "name": "Arto Hellas",
      "number": "345345354",
      "id": 1
    },
    {
      "name": "Ada Lovelace",
      "number": "39-44-5323523",
      "id": 2
    },
    {
      "name": "Dan Abramov",
      "number": "12-43-234345",
      "id": 3
    },
    {
      "name": "Mary Poppendieck",
      "number": "39-23-6423122",
      "id": 4
    }
]

app.get('/info', (request, response) => {
    const datetime = new Date()
    response.send(`
            <p>Phonebook has info for ${persons.length} people</p>
            <p>${datetime}</p>
        `)
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    
    if(person) {
        response.json(person)
    }
    else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)

    response.status(204).end()
})

const generateId = (min, max) => {
    min = Math.ceil(min),
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min)) + min
}

app.post('/api/persons', (request, response) => {
    const personBody = request.body

    if(!personBody.name || !personBody.number) {
        return response.status(400).json({
            error: 'either person name or number is missing'
        })
    }

    if(persons.find(person => person.name === personBody.name)) {
        return response.status(400).json({
            error: 'name must be unique'
        })
    }

    const person = {
        "name": personBody.name,
        "number": personBody.number,
        "id": generateId(0, 1000)
    }

    persons = persons.concat(person)

    response.json(person)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
