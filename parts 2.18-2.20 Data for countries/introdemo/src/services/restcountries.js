import axios from "axios"

const BASE_URL = "https://studies.cs.helsinki.fi/restcountries/api/";

const getAllCountries = ()=>
    axios.get(`${BASE_URL}/all`).then((response)=>response.data);

const getCountryByName = (name)=>
    axios.get(`${BASE_URL}/name/${name}`).then((response) => response.data);


export default {getAllCountries, getCountryByName};