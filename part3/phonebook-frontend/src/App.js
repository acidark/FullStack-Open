import Listo from './components/Listo'
import Addp from './components/AddPerson'
import axios from 'axios'
import personService from './services/persons'
import Notification from './components/Notification'
import { useState,useEffect } from 'react'
import Filter from './components/Filter'

const App = () => {

  const [errorMessage,setErrorMessage] = useState(null)
  const [persons,setPersons] = useState([])
  const [newSearch,setNewSearch] = useState('') 
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [addMsg,setAddmsg] = useState(null)
  const [notiType,setNotiType] = useState(null)


  // console.log(personToShow2)
  // const found = () =>{
  //   const ff = persons.some(person=>person.name === newSearch)
  //   ff ? setShowAll(false) : setShowAll(true)
  //   console.log(ff)
  // }

    useEffect(()=>{
     const promiseHandler = response =>{
        setPersons(response)
     }  
    //const promise = axios.get("http://localhost:3001/api/persons")
    personService
    .getAll()
    .then(promiseHandler)    
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
  
  
  // const handleDeletion = (props)={

  // }
  const deleteOb = id =>{
    const person = persons.find(n=>id===n.id)
    personService
    .deleteOb(id)
    .then(()=>{
      console.log('sucess')
    })  // setPersons(persons.filter(n=>n.id!==id))
    .catch(error =>{
    //console.log(person.name)
     setErrorMessage(`${person.name} already deleted`)
     setNotiType('error')
     setTimeout(()=>{
      setErrorMessage(null)
      setNotiType(null)
     },5000)
     });
    setPersons(persons.filter(n=>n.id!==id))

    // axios
    // .delete(`http://localhost:3001/persons/${id}`)
    // })
  }
  const exists = (props) => {
     return persons.find(person =>person.name == props)

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
      setAddmsg(`${newObject.name}, added to the list`)
      setNotiType('add')
      setTimeout(()=>{
        setAddmsg(null)
        setNotiType(null)
      },5000)
    }).catch(error=> {
      console.log(error.response.data.error)
      setErrorMessage(error.response.data.error)
      setNotiType('error')
      setTimeout(() => {
        setErrorMessage(null)
        setNotiType(null)
      }, 5000);
    })
  };
  const checkingParams = (event) =>{
    event.preventDefault()
    const foundOrNot = exists(newName)
    const windowx = () =>{
      if (window.confirm(`${newName} already in phonebook, wanna replace the old number?`)){
        const person = persons.find(n=>n.name===newName)
        const changedNumber = {...person,number : newNumber}
        personService
        .update(person.id,changedNumber)
        .then(returnedPerson=>{
          setPersons(persons.map(n=>n.id!==person.id? n:returnedPerson))
        })
      }
    }
    const toAdd = foundOrNot ? windowx() : addPerson();
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={addMsg} type={notiType} />
      <Notification message={errorMessage} type={notiType} />
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
