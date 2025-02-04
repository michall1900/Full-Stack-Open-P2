import { useState, useEffect } from "react";
import CountryItem from "./CountryItem";

const Countries = ({ filterCountries, setMessage, setFilterCountries, isNotFound }) => {


    const isNeedsToShowDetails = filterCountries.length===1;

    return (
        <>
            {(filterCountries && filterCountries.length) ? (
                filterCountries.map(country => (
                    <CountryItem key={country.id} country={country} 
                    setMessage={setMessage} setFilterCountries={setFilterCountries}
                    isNeedsToShowDetails={isNeedsToShowDetails}/>
                ))
            ) : (
                <p>{isNotFound? "Can't find a country that is matching to your filter":
                    "Too many matches, specify another filter"}</p>
            )}
        </>
    );
}

export default Countries;