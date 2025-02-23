import {useState } from "react";
import CountryDetilsDisplay from "./CountryDetailsDisplay"
import CapitalWeatherDisplay from "./CapitalWeatherDisplay"

/**
 * CountryItem component displays details of a country and its capital weather.
 *
 * @param {Object} props - The properties object.
 * @param {Object} props.country - The country data to display.
 * @param {Function} props.setMessage - Function to set a message.
 * @param {Function} props.setIsLoading - Function to set the loading state.
 *
 * @returns {JSX.Element} The rendered CountryItem component.
 */
const CountryItem = ({ country, setMessage, setIsLoading }) => {

    const [latlng, setLatlng] = useState(null);
    const [capital, setCapital] = useState(null);

    const itemStyle = {
        display: "flex",
        justifyContent: "space-between",
        width: "70vw",
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