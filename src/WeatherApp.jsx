import { useState } from "react"
import SearchBox from "./Search"
import InfoBox from "./infoBox"
export default function WeatherApp(){
    
    const[weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feels_like:24.84,
        temp:25.05,
        tempMin:25.02,
        tempMax:25.05,
        humidity:47,
        weather:"haze",
    })

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return(
        <div>
            <h1>Weather Widget </h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}