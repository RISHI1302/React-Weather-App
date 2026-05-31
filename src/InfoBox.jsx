import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './InfoBox.css'


export default function InfoBox() {

    const INIT_URL = "https://images.unsplash.com/photo-1723650530629-b2c79d71f554?q=80&w=737&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    let info = {
        city: "Pune",
        feelsLike: 33.9,
        humidity: 47,
        temp: 32.13,
        tempMax: 32.13,
        tempMin: 32.13,
        weather: "broken clouds",
    };

    return (
        <div className="InfoBox">
            <h2>Weather Information</h2>

            <div className="cardContainer">

                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={INIT_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p>Tempreture={info.temp}&deg;C</p>
                            <p>Humidity={info.humidity}</p>
                            <p>Min Temp={info.tempMin}&deg;C</p>
                            <p>Max Temp={info.tempMax}&deg;C</p>
                            <p>The weather cab be described as <i>{info.weather}</i> feels like {info.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>

            </div>
        </div>
    );
}