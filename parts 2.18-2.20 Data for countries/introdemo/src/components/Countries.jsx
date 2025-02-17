import { useState, useEffect } from "react";
import CountryItem from "./CountryItem";

const Countries = ({ filterCountries, setMessage, setFilterCountries, isNotFound, setIsLoading }) => {


    const isNeedsToShowDetails = filterCountries.length===1;
    
    return (
        <div>
            {(filterCountries && filterCountries.length) ? (
                filterCountries.map(country => (
                    <CountryItem key={country.id} country={country} 
                    setMessage={setMessage} setFilterCountries={setFilterCountries}
                    isNeedsToShowDetails={isNeedsToShowDetails} setIsLoading={setIsLoading}/>
                ))
            ) : (
                <p>{isNotFound? "Can't find a country that is matching to your filter":
                    "Too many matches, specify another filter"}</p>
            )}
        </div>
    );
}

export default Countries;