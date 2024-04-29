import Button from '@mui/material/Button';
import { useState } from 'react';
import './SearchBox.css';
import TextField from '@mui/material/TextField';


export default function SearchBox({updateInfo}){
    let[city,setCity] = useState("");
    let[error,setError] = useState(false);

    let APIkey = '79747f918f2c2b457c97ee140e05be6b';

    let apiInfo = async ()=>{
       
            let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`);
        let jsonResponse = await data.json();
        console.log(jsonResponse);
        let results =  {
            city:city,
            feels_like:jsonResponse.main.feels_like,
            humidity:jsonResponse.main.humidity,
            pressure:jsonResponse.main.pressure,
            temp:jsonResponse.main.temp,
            temp_max:jsonResponse.main.temp_max,
            temp_min:jsonResponse.main.temp_min,
            weather:jsonResponse.weather[0].description
             }
             console.log(results);
             setError(false);
             return results;
            
           
      
    }
    let changeCity = (event)=>{
        console.log(event.target.value);
        setCity(event.target.value);
    }
    let formSubmit = async (event)=>{
        try { 
            event.preventDefault();
            let result = await apiInfo();
            updateInfo(result);
             setCity("");
            }
            catch(err){
                setError(true);
            }
       

    }
    
return(
    <div className='Outer'> 
    <div className='SearchBox'>
        <form  onSubmit={formSubmit}>
        <h2>Search for Weather</h2>
        <TextField id="outlined-basic" label="City" variant="outlined" required value={city} onChange={changeCity}/>
        <br /> <br />
        {error && <p style={{color:"red"}}>No such place exists </p>}
        <Button variant="contained" type='submit'>Search</Button>
        </form>
   
        </div>
    </div>
   


)

}