import weatherApi from "../services/openWeatherMapApi"
import { useEffect, useState } from "react";

const CapitalDetailsDisplay = ({ latlng, capital, setMessage, setIsLoading }) => {

    const [weatherParams, setWeatherParams] = useState(null);

    const containerStyle={
        display:"block",
        textAlign:"start",
        alignSelf:"flex-center"
    }

    const validateData = (data)=>{
        if(!data || data.error || !(
            data.main && data.main.temp &&
            data.wind && data.wind.speed &&
            data.weather && Array.isArray(data.weather) && data.weather.length && 
            data.weather[0].main && data.weather[0].description && data.weather[0].icon
        ))
            throw(`Can't load weather content for ${capital}.`);
    }
    useEffect(() => {
        console.log("fetch weather for", capital);
        setIsLoading(true);
        weatherApi
        .getWeather(latlng)
        .then ((data)=>{
            validateData(data);
            setWeatherParams({
                temperature: data.main.temp,
                windSpeed : data.wind.speed,
                weatherState: `${data.weather[0].main}: ${data.weather[0].description}`,
                icon: data.weather[0].icon
            })
        })
        .catch((_)=>{
            setMessage(`Can't fetch ${capital}'s weather.`)
        })
        .finally(()=>{
            setIsLoading(false);
        })
    }, [])

    return (
        <div style={containerStyle}>
            <h3>Weather in {capital}</h3>
            {weatherParams &&
                <>
                    <p>Temperature: {weatherParams.temperature} Celcius</p>
                    <img src={weatherApi.getIconURL(weatherParams.icon)} alt="weather icon" />
                    <p>{weatherParams.weatherState}</p>
                    <p>Wind: {weatherParams.windSpeed} m/s</p>
                </>
            }
        </div>
    )
}

export default CapitalDetailsDisplay;