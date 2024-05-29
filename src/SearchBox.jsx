import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let[city,setCity]=useState("");
    let [error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="bfdbf95990c3e8648eb503631188d88f";

    let getWeatherInfo=async()=>{
        try{
       let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let jsonresponse=await response.json();
       let result={
        city:city,
        temp: jsonresponse.main.temp,
        tempMin: jsonresponse.main.temp_min,
        tempMax: jsonresponse.main.temp_max,
        humidity: jsonresponse.main.humidity,
        feelsLike: jsonresponse.main.feels_like,
        weather: jsonresponse.weather[0].description,
       };
       console.log(result);
       return result;
    }
    catch(err)
    {
        throw  err;
    }
    }

    let handlechange=(event)=>{
        setCity(event.target.value);
    }
    let handleSubmit= async (event)=>{
        try{
        event.preventDefault();
        //console.log(city);
        setCity("");
       let newinfo=await getWeatherInfo();
       updateInfo(newinfo);
        }
        catch(err)
        {
            setError(true);
            
        }
        }
    return(
        <div>
            <div className="SearchBox">
        
            <form onSubmit={handleSubmit}>
            <TextField id="City"
             label="City Name" 
             variant="outlined" 
             value={city} 
             onChange={handlechange}
              required
             className='search'/><br></br><br></br>
            <Button variant="contained" type='submit'> Search</Button>
            {error && <p style={{color:"red"}}>No Such Place Exist In Our Api</p>}
            </form>
            </div>
        </div>
    )
};