import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Listo from './components/Listo'
import Addp from './components/AddPerson'
import axios from 'axios'
import personService from './services/persons'

const App = () => {


  const [persons,setPersons] = useState([])
  const [newSearch,setNewSearch] = useState('') 
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  // const [showAll,setShowAll] = useState(true)


  // console.log(personToShow2)
  // const found = () =>{
  //   const ff = persons.some(person=>person.name === newSearch)
  //   ff ? setShowAll(false) : setShowAll(true)
  //   console.log(ff)
  // }

    useEffect(()=>{
     const promiseHandler = response =>{
        setPersons(response.data)
     }  
    const promise = axios.get("http://localhost:3001/persons")
    promise.then(promiseHandler)    
  },[])

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }
  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

   const handleNewSearch = (event) => {
     setNewSearch(event.target.value)
   }
  
  const personToShow = persons.filter((person)=>person.name.toLowerCase().includes(newSearch.toLowerCase()))
  
  const deleteOb = id =>{
    // const note = persons.find(n=>id===n.id)
    personService
    .deleteOb(id)
    // .then(returnedData => {
      // setPersons(persons.map(n=>id !==n.id ? n : returnedData))
    setPersons(persons.filter(n=>n.id!==id))
    // axios
    // .delete(`http://localhost:3001/persons/${id}`)
    // })
  }
  const exists = (props) => {
    return persons.find(person => person.name == props)
  }
  const addPerson = () =>{
    const newObject = {
      name : newName,
      number : newNumber
    }
    personService
    .create(newObject)
    .then(returnedPerson =>{
      setPersons(persons.concat(returnedPerson))
      setNewName('')
      setNewNumber('')
    })

  };
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
      <Addp 
        checkingParams={checkingParams}
        newName={newName} handleNewName={handleNewName}
        newNumber={newNumber} handleNewNumber={handleNewNumber} />

      <h3>Numbers</h3>
      <ul>
        <Listo nmbs={personToShow} deleteOb={deleteOb} />
      </ul>
    </div>
  )
}

export default App