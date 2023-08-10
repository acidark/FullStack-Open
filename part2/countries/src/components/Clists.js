import InfoCountry from './infoCountry'
import { useState } from 'react'
const Countries = ({countries}) =>{
  const [showInfo,setShowInfo] = useState(null)
  const toggleInfo = (country) =>{
     console.log(country,showInfo)
    setShowInfo(country===showInfo? null : country)
  }
  if (!countries || countries.length === 0) {
    console.log('first render')
    return null
  }
    
  return ( 
    <div> 
    {countries.length > 1?
    countries.map((country)=>(
        <li key={country.cca2}>{country.name.common}
            <button onClick={()=>toggleInfo(country)}>show</button>
            {showInfo === country && <InfoCountry country={country} />}
        </li>
        )) 
        : <InfoCountry country={countries[0]} />}
        </div>
    )}

export default Countries