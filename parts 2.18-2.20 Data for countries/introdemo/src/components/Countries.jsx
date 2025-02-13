import { useState, useEffect } from "react";
import CountryItem from "./CountryItem";

const Countries = ({ filterCountries, setMessage, setFilterCountries, isNotFound }) => {


    const isNeedsToShowDetails = filterCountries.length===1;
    const containerStyle={
        display: "flex",

        justifyContent: "center",
        margin:"auto",
        textAlign: "center",
        border: "solid",
        minHeight: "45vh"
    }
    return (
        <div style={containerStyle}>
            {(filterCountries && filterCountries.length) ? (
                filterCountries.map(country => (
                    <CountryItem key={country.id} country={country} 
                    setMessage={setMessage} setFilterCountries={setFilterCountries}
                    isNeedsToShowDetails={isNeedsToShowDetails}/>
                ))
            ) : (
                <p style={{color: "DarkSlateGray", fontWeight: "bold"}}>{isNotFound? "Can't find a country that is matching to your filter":
                    "Too many matches, specify another filter"}</p>
            )}
        </div>
    );
}

export default Countries;