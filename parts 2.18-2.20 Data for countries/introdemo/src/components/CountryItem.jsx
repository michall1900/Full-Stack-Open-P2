import { useEffect, useState } from "react";
import countriesApi from "../services/restcountries"

const CountryItem = ({ country, setMessage, setFilterCountries, isNeedsToShow }) => {
    const [params, setParams] = useState({})

    useEffect(()=>{
        if(isNeedsToShow){
            countriesApi
            .getCountryByName(country.toShowName)
            .then((data)=>{
                if(data.error){
                    throw(data.error);
                }
                setParams({
                    Capital: data.capital.join(", "),
                    Area: data.area,
                    Languages: Object.values(data.languages),
                    flags: data.flags
                })
            })
            .catch((error)=>{
                setMessage(`Can't fetch ${country.toShowName}'s data. Error: ${error}`)
            })
        }
    }, [isNeedsToShow])

    const onClickShowButton = (event)=>{
        setFilterCountries([country]);
    }


    return (
        <div>
            {(!isNeedsToShow)? (
                <>
                    {country.toShowName} <button onClick={onClickShowButton}>show</button>
                </>
            ) : (
                <>
                    <h2>{country.toShowName}</h2>
                    {params.Capital && (<p>Capital: {params.Capital}</p>)}
                    {params.Area && (<p>Area: {params.Area}</p>)}
                    {params.Languages && 
                    (<ul>
                        {params.Languages.map((language)=> <li key={`${country.id}${language}`}>{language}</li>)}
                    </ul>)}
                    {params.flags && 
                    <img src={params.flags.png} alt={params.flags.alt}/>
                    }
                </>
            )}
            
        </div>
    )
}

export default CountryItem;