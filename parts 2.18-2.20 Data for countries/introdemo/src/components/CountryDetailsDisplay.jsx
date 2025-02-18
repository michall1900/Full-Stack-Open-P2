import { useEffect, useState } from "react";
import countriesApi from "../services/restcountries"
import SubTitle from "./SubTitle";

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
                languages: (data.languages)? Object.values(data.languages): ["unknown"],
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
                {params.capital && (<p>Capital: {params.capital}</p>)}
                {params.area && (<p>Area: {params.area}</p>)}
                {params.languages &&
                    (<>
                        Languages:
                        <ul>
                            {params.languages.map((language) => 
                            <li key={`${country.id}${language}`}>{language}</li>)}
                        </ul>
                    </>)}
                {params.flags && params.flags.png &&
                    <img src={params.flags.png} alt={params.flags.alt} style={imageStyle}/>
                }
            </>
            }
        </div>
    )
}

export default CountryDetailsDisplay;