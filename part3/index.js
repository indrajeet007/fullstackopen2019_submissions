const express = require('express')
const app = express()

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

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
