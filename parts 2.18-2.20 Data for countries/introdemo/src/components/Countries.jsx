import { useState } from "react";
import CountryItem from "./CountryItem";

const Countries = ({ filterCountries, setMessage, setFilterCountries }) => {

    return (
        <>
            {filterCountries && filterCountries.length ? (
                filterCountries.map(country => (
                    <CountryItem key={country.id} country={country} 
                    setMessage={setMessage} setFilterCountries={setFilterCountries}
                    isNeedsToShow={filterCountries.length === 1}/>
                ))
            ) : (
                <p>Too many matches, specify another filter</p>
            )}
        </>
    );
}

export default Countries;