const express = require("express")
const app = express()

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get("/api/persons",(request,response)=>{
    response.json(persons)
})

// app.use(express())

app.delete("/api/persons/:id",(req,res)=>{
    const id = Number(req.params.id)
    persons = persons.filter((n)=>n.id!==id)
    res.status(204).end()
})

app.get("/api/persons/:id",(req,res)=>{
    const id = Number(req.params.id)
    const person = persons.find((n)=>{
        // console.log(n.id,typeof n.id,id, typeof id,n.id == id)
        return id===n.id})
    if(!person){
        res.status(204).end()
    }
    // console.log(person.id,typeof person.id,id, typeof id, person.id===id)
    else {
        res.json(person)
    }
})

app.get("/info",(req,res)=>{
    const currentDate = new Date()
    res.send(`<p>Phonebook has response for ${persons.length} people<p><p>${currentDate}<p>`)
})

const PORT = 3001
app.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`)
})
