import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './InfoBox.css'


export default function InfoBox({ info }) {

    const INIT_URL = "https://images.unsplash.com/photo-1723650530629-b2c79d71f554?q=80&w=737&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let COLD_URL = "https://images.unsplash.com/photo-1514903936-98502c8f016f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D";
    let HOT_URL = "https://images.unsplash.com/photo-1765979576274-7ce0b9252df6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGhvdCUyMGltYWdlfGVufDB8fDB8fHww";
    let RAIN_URL = "https://images.unsplash.com/photo-1620385019253-b051a26048ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbiUyMGltYWdlfGVufDB8fDB8fHww";

    return (
        <div className="InfoBox">

            <div className="cardContainer">

                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={
                            info.humidity > 80
                                ? RAIN_URL
                                : info.temp > 15
                                    ? HOT_URL
                                    : COLD_URL
                        }
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p>Tempreture = {info.temp}&deg;C</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>Min Temp = {info.tempMin}&deg;C</p>
                            <p>Max Temp = {info.tempMax}&deg;C</p>
                            <p>The weather cab be described as <strong><i>{info.weather}</i></strong> feels like {info.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>

            </div>
        </div>
    );
}