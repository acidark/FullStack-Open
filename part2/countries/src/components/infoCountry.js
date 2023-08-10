import axios from "axios"
import { useState,useEffect } from "react"
const InfoCountry = ({country}) => {
    const [infoWeather,setWeather] = useState([])
    const api_key = process.env.REACT_APP_API_KEY
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${country.capitalInfo.latlng[0]}&lon=${country.capitalInfo.latlng[1]}&units=metric&exclude={part}&appid=${api_key}`
    useEffect(()=>{
        axios
        .get(weatherUrl)
        .then(response=>setWeather(response.data))
        
    },[weatherUrl])
        return (
        <div>
            <h1>
                {country.name.common}
             </h1>
                <p>capital: {country.capital}</p> 
                <p>area: {country.area}</p>
            <h3>languages:</h3><ul>
            {Object.keys(country.languages).map((key)=>(<li key={key}><div>{country.languages[key]}</div></li>))}
            </ul>
            <img
                style ={{maxHeight:200}}
                alt={`Flag of ${country.name.common}`}
                src={country.flags.svg}>
            </img>
            <h2>Weather in {country.capital}</h2>
            {infoWeather.coord
            ? <div>
                <p>{`temperature ${infoWeather.main.temp}' Celsius`}</p>
                <p>{`wind ${infoWeather.wind.speed} ms`}</p>
                <img 
                    style= {{maxHeight:200}}
                    alt={`${country.capital} weather`}
                    src={`https://openweathermap.org/img/wn/${infoWeather.weather[0].icon}@2x.png`}>
                </img>
            </div>
            :null}            
        </div>
    )
}

export default InfoCountry