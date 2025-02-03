import { useEffect, useState } from "react";
import countriesApi from "../services/restcountries"

const CountryItem = ({ name, isNeedToShow, setMessage, forKey }) => {
    const [params, setParams] = useState({})
    useEffect(()=>{
        countriesApi
        .getCountryByName(name)
        .then((data)=>{
            setParams({
                Capital: data.capital.join(", "),
                Area: data.area,
                Languages: Object.values(data.languages),
                flags: data.flags
            })
        })
        .catch((error)=>{
            setMessage(`Can't fetch ${name}'s data. Error: ${error}`)
        })
    }, [])
    return (
        <>
            {(!isNeedToShow)? (
                <p>{name}</p>
            ) : (
                <>
                    <h2>{name}</h2>
                    {params.Capital && (<p>Capital: {params.Capital}</p>)}
                    {params.Area && (<p>Area: {params.Area}</p>)}
                    {params.Languages && 
                    (<ul>
                        {params.Languages.map((language)=> <li key={`${forKey}${language}`}>{language}</li>)}
                    </ul>)}
                    {params.flags && 
                    <img src={params.flags.png} alt={params.flags.alt}/>
                    }
                </>
            )}
        </>
    )
}

export default CountryItem;