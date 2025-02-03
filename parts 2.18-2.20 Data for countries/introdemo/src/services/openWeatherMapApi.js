import axios from "axios"

const api_key = import.meta.env.VITE_SOME_KEY
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather"
const PREFIX_ICON = "https://openweathermap.org/img/wn/"
const SUFFIX_ICON = "@2x.png"

let params = {
    appid: api_key,
    units: "metric"
}

const getWeather = (latlng)=>
    axios.get(BASE_URL, {params: {...latlng, ...params}}).then((response)=> response.data);

const getIconURL = (icon)=>
    `${PREFIX_ICON}${icon}${SUFFIX_ICON}`

export default {getWeather, getIconURL};