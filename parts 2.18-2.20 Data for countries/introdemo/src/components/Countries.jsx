import { useState, useEffect } from "react";
import CountryItem from "./CountryItem";
import CountriesList from "./CountriesList";

const Countries = ({ filterCountries, setMessage, setFilterCountries, isNotFound, setIsLoading }) => {


    const isNeedsToShowDetails = filterCountries && filterCountries.length===1;
    
    return (
        <div>
            {(filterCountries && filterCountries.length)? 
                <>
                    {(isNeedsToShowDetails)? 
                        <CountryItem setMessage={setMessage} setIsLoading={setIsLoading} 
                            country={filterCountries[0]}/> :

                        <CountriesList filterCountries={filterCountries} 
                            setFilterCountries={setFilterCountries}/>}
                </>
                    :
                <p>{isNotFound? "Can't find a country that is matching to your filter":
                    "Too many matches, specify another filter"}</p>
            }
        </div>
    );
}

export default Countries;