import { useState } from 'react'
const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newSearch,setNewSearch] = useState('') 
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  // const [showAll,setShowAll] = useState(true)

  const personToShow = persons.filter((person)=>person.name.toLowerCase().includes(newSearch.toLowerCase()))
  // console.log(personToShow2)
  // const found = () =>{
  //   const ff = persons.some(person=>person.name === newSearch)
  //   ff ? setShowAll(false) : setShowAll(true)
  //   console.log(ff)
  // }
  const handleNewName = (event) => {
    setNewName(event.target.value)
  }
  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

   const handleNewSearch = (event) => {
     setNewSearch(event.target.value)
   }
  const exists = (props) => {
    return persons.find(person => person.name == props)
  }
  const addPerson = () =>{
    const newObject = {
      name : newName,
      number : newNumber
    }
    setPersons(persons.concat(newObject))
    setNewName('')
    setNewNumber('')
  };
  // const findPerson = ''     
  const checkingParams = (event) =>{
    event.preventDefault()
    const foundOrNot = exists(newName)
    const toAdd = foundOrNot ? window.alert(`${newName} already in phonebook`) : addPerson();
    
  }
  return (
    <div>
      <h1>Phonebook</h1>
      filter shown by
        <div>
          <input value={newSearch} onChange={handleNewSearch} />
        </div>
      <h2>Add new</h2>
      <form onSubmit={checkingParams}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber} />
        </div>          
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personToShow.map(person=><li key={person.name}><div>{person.name} {person.number}</div></li>)}
      </ul>
    </div>
  )
}

export default App