import { useState, useEffect } from "react";
import CountryItem from "./CountryItem";

const Countries = ({ filterCountries, setMessage, setFilterCountries }) => {

    const [isNeedsToShowDetails, setIsNeedToShowDetails] = useState(false);

    useEffect(()=>{
        
        setIsNeedToShowDetails(filterCountries && filterCountries.length === 1)

    }, [filterCountries])

    //console.log(isNeedsToShowDetails);

    return (
        <>
            {filterCountries && filterCountries.length ? (
                filterCountries.map(country => (
                    <CountryItem key={country.id} country={country} 
                    setMessage={setMessage} setFilterCountries={setFilterCountries}
                    isNeedsToShowDetails={isNeedsToShowDetails} />
                ))
            ) : (
                <p>Too many matches, specify another filter</p>
            )}
        </>
    );
}

export default Countries;