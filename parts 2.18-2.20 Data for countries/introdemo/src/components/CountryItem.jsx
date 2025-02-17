import {useState } from "react";
import CountryDetilsDisplay from "./CountryDetailsDisplay"
import CapitalWeatherDisplay from "./CapitalWeatherDisplay"

const CountryItem = ({ country, setMessage, setFilterCountries, isNeedsToShowDetails, setIsLoading }) => {

    const [latlng, setLatlng] = useState(null);
    const [capital, setCapital] = useState(null);


    const onClickShowButton = (event) => {
        setFilterCountries([JSON.parse(JSON.stringify(country))]);
    }
    const spanStyle = {
        margin:"1vh",
        textAlign:"start"
    }
    const itemStyle = {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        flexWrap:"wrap",
    }
    const buttonStyle={
        margin:"5px",
        background:"",
        fontFamily:"Garamond, sans-serif",
        fontWeight: "800",
        borderRadius: "5px",
        textAlign:"end"
    }

    const labelAndButtonDiv = {
        width: "50vw",
        margin: "5px 0",
        display: "flex",
        justifyContent:"space-between",
        alignItems: "center"

    }
    return (
        <div style={itemStyle}>
            {(!isNeedsToShowDetails) ? (
                <div style={labelAndButtonDiv}>
                    <span style={spanStyle}>{country.toShowName}</span> <button style={buttonStyle} onClick={onClickShowButton}>show</button>
                </div>
            ) : (
                <>
                    <CountryDetilsDisplay setMessage={setMessage} country={country} 
                        setLatlng={setLatlng} setCapital={setCapital} setIsLoading={setIsLoading}/>
                    {latlng && <CapitalWeatherDisplay latlng={latlng} capital={capital} setMessage={setMessage} 
                    setIsLoading={setIsLoading}/>}
                </>
            )}

        </div>
    )
}


export default CountryItem;