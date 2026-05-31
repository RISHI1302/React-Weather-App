import SearchBox from "./SearchBox";
import InfoBox from './InfoBox';
import { useState } from "react";

export default function WeatherApp() {

    const [weatherInfo, setWeatherInfo] = useState({
        city: "Pune",
        feelsLike: 33.9,
        humidity: 47,
        temp: 32.13,
        tempMax: 32.13,
        tempMin: 32.13,
        weather: "broken clouds",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div className="WeatherApp">
            <h1>Weather App</h1>

            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />

        </div>
    );
}