import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import { useState } from "react";
import Navbar from "./Navbar";
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelslike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze,"
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{textAlign:"center"}}>
            <Navbar/>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox Info={weatherInfo} />
        </div>

    );
}