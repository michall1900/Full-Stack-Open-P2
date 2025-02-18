import {useState } from "react";
import CountryDetilsDisplay from "./CountryDetailsDisplay"
import CapitalWeatherDisplay from "./CapitalWeatherDisplay"

const CountryItem = ({ country, setMessage, setIsLoading }) => {

    const [latlng, setLatlng] = useState(null);
    const [capital, setCapital] = useState(null);

    const itemStyle = {
        display: "flex",
        justifyContent: "space-between",
        width: "75vw",
        flexWrap:"wrap",
        alignItems:"start",
        alignContent: "flex-start",
        margin:"3vh auto"
    }
    
    
    return (
        <div style={itemStyle}>
            <CountryDetilsDisplay setMessage={setMessage} country={country} 
                setLatlng={setLatlng} setCapital={setCapital} setIsLoading={setIsLoading}/>
            {latlng && <CapitalWeatherDisplay latlng={latlng} capital={capital || "the country"} setMessage={setMessage} 
            setIsLoading={setIsLoading}/>}
        </div>

    )
}


export default CountryItem;