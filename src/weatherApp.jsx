import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    let [weather,setWeather] = useState({
        city:"Madurai",
        feels_like:"40.21",
        humidity:"55",
        pressure:"1007",
        temp:"34.01",
        temp_max:"34.01",
        temp_min:"34.01",
        weather:"haze"
    });
    let updateInfo =(result)=>{
        setWeather(result);
    }
return(
    <>
        <SearchBox updateInfo = {updateInfo}></SearchBox>
        <InfoBox weather={weather} ></InfoBox>
    </>
)
}