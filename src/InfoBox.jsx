import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';

export default function InfoBox({weather}){
    let hot_URL ="https://images.unsplash.com/photo-1661498198533-4d1bc830546f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VhdGhlciUyMGltYWdlfGVufDB8fDB8fHww";
    let cold_URL = "https://images.unsplash.com/photo-1609071285028-111c8ccff5bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    let cloud_URL = "https://images.unsplash.com/photo-1517639493569-5666a7b2f494?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fGNsb3VkfGVufDB8fDB8fHww";
    let rain_URL = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";
return(
  <>
    <Card sx={{ maxWidth: 800 ,width:300}}>
    <CardMedia
      component="img"
      alt="green iguana"
      height="140"
      image = { weather.humidity > 70 ?  rain_URL:weather.humidity >45 && weather.humidity <70  ? cloud_URL:weather.temp>31 ?  hot_URL :  cold_URL}

    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
       city:{weather.city} &nbsp;
         { weather.humidity > 70 ? <ThunderstormIcon></ThunderstormIcon> : weather.humidity >45 && weather.humidity <70 ? <WbCloudyIcon />: weather.temp>31 ?  <WbSunnyIcon />:<AcUnitIcon /> }

      </Typography>
      <Typography variant="body2" color="text.secondary">
      feels_like:{weather.feels_like},
      <br></br>
      humidity:{weather.humidity},
      <br></br>
      pressure:{weather.pressure},
      <br></br>
      temp:{weather.temp},
      <br></br>
      temp_max:{weather.temp_max},
      <br></br>
      temp_min:{weather.temp_min},
      <br></br>
      weather:{weather.weather}
      </Typography>
    </CardContent>
    <CardActions>
    </CardActions>
   </Card>
  </>
)
}