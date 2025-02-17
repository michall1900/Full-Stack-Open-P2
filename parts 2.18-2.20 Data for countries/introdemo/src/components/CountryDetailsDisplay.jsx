import { useEffect, useState } from "react";
import countriesApi from "../services/restcountries"

const CountryDetailsDisplay = ({setMessage, country, setLatlng, setCapital, setIsLoading}) => {

    const [params, setParams] = useState(null)
    const containerStyle={
        justifyContent:"center",
        flexDirection:"column",
        margin:"0 auto"
    }
    const imageStyle={
        width:"35vw"
    }
    const validateData = (data)=>{
        if(!data || data.error || !(
            data.capital && Array.isArray(data.capital) && 
            data.area && data.languages && 
            data.flags && data.flags.png &&
            data.latlng && Array.isArray(data.latlng) && data.latlng.length===2)
        )
            throw("Received invalid data while fetching country's data.");
    }

    useEffect(()=>{
        console.log("fetch for", country.toShowName);
        setIsLoading(true);
        countriesApi
        .getCountryByName(country.toShowName)
        .then((data) => {
            console.log(data)
            validateData(data);
            const capital = data.capital.join(", ");
            setParams( {
                capital: capital,
                area: data.area,
                languages: Object.values(data.languages),
                flags: data.flags
            })
            setLatlng({lat:data.latlng[0], lon:data.latlng[1]});
            setCapital(capital);
        })
        .catch((error) => {
            setMessage(`Can't fetch ${country.toShowName}'s data. Error: ${error}`)
            setParams(null)
        })
        .finally(()=>{
            setIsLoading(false);
        })
    }, [])

    return (
        <div style={containerStyle}>
            <h2>{country.toShowName}</h2>
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
                {params.flags &&
                    <img src={params.flags.png} alt={params.flags.alt} style={imageStyle}/>
                }
            </>
            }
        </div>
    )
}

export default CountryDetailsDisplay;