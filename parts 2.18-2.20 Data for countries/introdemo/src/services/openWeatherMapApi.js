import axios from "axios"

const api_key = import.meta.env.VITE_SOME_KEY
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather"
const PREFIX_ICON = "https://openweathermap.org/img/wn/"
const SUFFIX_ICON = "@2x.png"

const params = {
    appid: api_key,
    units: "metric"
}

/**
 * Fetches weather data from the OpenWeatherMap API based on latitude and longitude.
 *
 * @param {Object} latlng - An object containing latitude and longitude.
 * @param {number} latlng.lat - The latitude coordinate.
 * @param {number} latlng.lng - The longitude coordinate.
 * @returns {Promise<Object>} A promise that resolves to the weather data.
 */
const getWeather = (latlng)=>
    axios.get(BASE_URL, {params: {...latlng, ...params}}).then((response)=> response.data);

/**
 * Constructs the full URL for a weather icon.
 *
 * @param {string} icon - The icon code provided by the OpenWeatherMap API.
 * @returns {string} The full URL to the weather icon image.
 */
const getIconURL = (icon)=>
    `${PREFIX_ICON}${icon}${SUFFIX_ICON}`

export default {getWeather, getIconURL};