import Button from '@mui/material/Button';
import { useState } from 'react';
import './SearchBox.css';
import TextField from '@mui/material/TextField';


export default function SearchBox(){
    let[city,setCity] = useState("");
    let APIkey = '79747f918f2c2b457c97ee140e05be6b';
    let apiInfo = async ()=>{
        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`);
        let jsonResponse = await data.json();
        console.log(jsonResponse);
        let results =  {
            feels_like:jsonResponse.main.feels_like,
            humidity:jsonResponse.main.humidity,
            pressure:jsonResponse.main.pressure,
            temp:jsonResponse.main.temp,
            temp_max:jsonResponse.main.temp_max,
            temp_min:jsonResponse.main.temp_min,
            weather:jsonResponse.weather[0].description
             }
             console.log(results);
    }
    let changeCity = (event)=>{
        console.log(event.target.value);
        setCity(event.target.value);
    }
    let formSubmit =(event)=>{
        apiInfo();
        event.preventDefault();
        setCity("");

    }
    
return(
    <div className='Outer'> 
    <div className='SearchBox'>
        <form  onSubmit={formSubmit}>
        <h2>Search for Weather</h2>
         <br /> <br />
        <TextField id="outlined-basic" label="City" variant="outlined" required value={city} onChange={changeCity}/>
        <br /> <br />
        <Button variant="contained" type='submit'>Search</Button>
        </form>
   
</div>
</div>
   


)

}