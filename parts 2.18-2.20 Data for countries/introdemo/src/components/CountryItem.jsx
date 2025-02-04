import {useState } from "react";
import CountryDetilsDisplay from "./CountryDetailsDisplay"
import CapitalWeatherDisplay from "./CapitalWeatherDisplay"

const CountryItem = ({ country, setMessage, setFilterCountries, isNeedsToShowDetails }) => {

    const [latlng, setLatlng] = useState(null);
    const [capital, setCapital] = useState(null);


    const onClickShowButton = (event) => {
        setFilterCountries([JSON.parse(JSON.stringify(country))]);
    }


    return (
        <div>
            {(!isNeedsToShowDetails) ? (
                <>
                    {country.toShowName} <button onClick={onClickShowButton}>show</button>
                </>
            ) : (
                <>
                    <CountryDetilsDisplay setMessage={setMessage} country={country} 
                        setLatlng={setLatlng} setCapital={setCapital}/>
                    {latlng && <CapitalWeatherDisplay latlng={latlng} capital={capital} setMessage={setMessage}/>}
                </>
            )}

        </div>
    )
}


export default CountryItem;