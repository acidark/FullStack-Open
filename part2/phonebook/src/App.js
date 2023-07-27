import { useState } from 'react'
import Filter from './components/Filter'
import Listo from './components/Listo'
import Addp from './components/AddPerson'
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
      <h2>Phonebook</h2>
      filter shown by
      <Filter newSearch={newSearch} handleNewSearch={handleNewSearch} />

      <h3>Add new</h3>
      <Addp checkingParams={checkingParams} newName={newName} handleNewName={handleNewName}
        newNumber={newNumber} handleNewNumber={handleNewNumber} />

      <h3>Numbers</h3>
      <ul>
        <Listo nmbs={personToShow} />
      </ul>
    </div>
  )
}

export default App