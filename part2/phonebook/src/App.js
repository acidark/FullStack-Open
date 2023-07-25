import { useState } from 'react'
const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number:NaN  
  }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const handleNewName = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
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
  const checkingParams = (event) =>{
    event.preventDefault()
    const foundOrNot = exists(newName)
    const toAdd = foundOrNot ? window.alert(`${newName} already in phonebook`) : addPerson();
    
    //   const newObject = {
    //   name : newName
    // }
    // setPersons(persons.concat(newObject))
    // setNewName('')
  }
  return (
    <div>
      <h2>Phonebook</h2>
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
        {persons.map(person=><li key={person.name}><div>{person.name} {person.number}</div></li>)}
      </ul>
    </div>
  )
}

export default App