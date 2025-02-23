
import { useEffect, useState } from "react";
import countriesApi from "../services/restcountries"
import SubTitle from "./SubTitle";

/**
 * Component to display detailed information about a country.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Function} props.setMessage - Function to set the message state.
 * @param {Object} props.country - The country object containing its name.
 * @param {Function} props.setLatlng - Function to set the latitude and longitude state.
 * @param {Function} props.setCapital - Function to set the capital state.
 * @param {Function} props.setIsLoading - Function to set the loading state.
 * @returns {JSX.Element} The CountryDetailsDisplay component.
 */
const CountryDetailsDisplay = ({setMessage, country, setLatlng, setCapital, setIsLoading}) => {

    const [params, setParams] = useState(null)

    const containerStyle={
        textAlign:"start"
    }
    const imageStyle={
        width:"60%",
        height:"60%",
        border:"7px solid black",
        borderRadius:"10%",
        objectFit:"cover",
        maxWidth:"300px"
    }

    
    /**
     * Validates the provided data object to ensure it meets the required structure.
     * Throws an error if the data is invalid.
     * 
     * @param {Object} data - The data object to validate.
     * @throws Will throw an error if data is null, has an error property, 
     *         or if the capital property is not an array (when present), 
     *         or if the flags property does not have a png property (when present), 
     *         or if the latlng property is not an array of length 2.
     */
    const validateData = (data)=>{
        if(!data || data.error || !(
            (!data.capital || Array.isArray(data.capital)) && 
            (!data.flags || data.flags.png) &&
            data.latlng && Array.isArray(data.latlng) && data.latlng.length===2)
        )
            throw("Received invalid data while fetching country's data.");
    }

    useEffect(()=>{
        console.log("fetch for", country.name);
        setIsLoading(true);
        countriesApi
        .getCountryByName(country.name)
        .then((data) => {
            console.log(data)
            validateData(data);
            const capital = (data.capital)? data.capital.join(", ") : undefined;
            setParams( {
                capital: (capital)? capital: "unknown",
                area: (data.area)? data.area: "unknown",
                languages: (data.languages)? Object.values(data.languages): [],
                flags: data.flags
            })
            setLatlng({lat:data.latlng[0], lon:data.latlng[1]});
            setCapital(capital);
        })
        .catch((error) => {
            setMessage(`Can't fetch ${country.name}'s data. Error: ${error}`)
            setParams(null)
        })
        .finally(()=>{
            setIsLoading(false);
        })
    }, [])

    return (
        <div style={containerStyle}>
            <SubTitle titleText={country.name}/>
            {params && 
            <>
                <p>Capital: {params.capital}</p>
                <p>Area: {params.area}</p>
                {(params.languages.length>0)?
                    (<>
                        Languages:
                        <ul>
                            {params.languages.map((language) => 
                            <li key={`${country.id}${language}`}>{language}</li>)}
                        </ul>
                    </>):
                    <p>Languages: unknown</p>}
                {params.flags && params.flags.png &&
                    <img src={params.flags.png} alt={params.flags.alt} style={imageStyle}/>
                }
            </>
            }
        </div>
    )
}

export default CountryDetailsDisplay;