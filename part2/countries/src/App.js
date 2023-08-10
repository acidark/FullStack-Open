import  countriesService from './services/countries'
import { useState,useEffect } from 'react';
import Clists from './components/Clists'
import Filter from './components/Filter'

const App = ()=> {
  const [countries,setCountries] = useState([])
  const [newSearch,setNewSearch] = useState('')
  useEffect(()=>{
    countriesService
    .getAll()
    .then(countries=>{
      setCountries(countries)
    })
  },[])

  const filteredCountries = countries.filter((country)=>country.name.common.toLowerCase().includes(newSearch.toLowerCase()))
  if(!countries){
    return null
  }

  const handleNewSearch = (event) =>{
    setNewSearch(event.target.value)
  }
  
  return (
    <div>
      filter to show
      <Filter newSearch={newSearch} handleNewSearch={handleNewSearch} />
      {(filteredCountries.length <= 10) || (filteredCountries.length === 250) 
      ? <Clists countries ={filteredCountries} /> 
      : 'too many matches please specify another filter'}
    </div>
  );
}

export default App;
