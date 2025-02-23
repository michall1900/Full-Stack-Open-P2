import axios from "axios"

const BASE_URL = "https://studies.cs.helsinki.fi/restcountries/api/";

/**
 * Fetches data for all countries from the REST Countries API.
 *
 * @returns {Promise<Object[]>} A promise that resolves to an array of country data objects.
 */
const getAllCountries = ()=>
    axios.get(`${BASE_URL}/all`).then((response)=>response.data);

/**
 * Fetches country data by name from the REST Countries API.
 *
 * @param {string} name - The name of the country to fetch data for.
 * @returns {Promise<Object[]>} A promise that resolves to an array of country data objects.
 */
const getCountryByName = (name)=>
    axios.get(`${BASE_URL}/name/${name}`).then((response) => response.data);


export default {getAllCountries, getCountryByName};