import { useEffect, useState } from "react";

const Filter = ({countriesNamesList, setFilterCountries, triggerFilter, setIsNotFound})=>{

    const [pattern, setPattern] = useState("");

    const containerStyle = {
        display: "flex",
        alignItems: "center",
        fontSize: "calc(1vw + 10px)",
        justifyContent: "center",
        textAlign: "center",
        margin: "2vh auto",
        width: "100%",
        fontFamily: "'Georgia'"
    }

    const labelStyle = {
        marginRight: "10px",
        whiteSpace: "nowrap" 
    };
    
    const inputStyle = {
        padding: "8px 10px",
        border: "2px solid #ccc", 
        borderRadius: "4px",
        maxHeight: "1.5vh" 
    };


    useEffect(()=>{
        if(!pattern || !pattern.length){
            setFilterCountries([]);
            setIsNotFound(false);
        }
        else{
            const newCountryList = [];
            const toLowerPattern = pattern.toLowerCase();
            for(const country of countriesNamesList){
                if(country.name.match(toLowerPattern) || country.officialName.match(toLowerPattern)){
                    newCountryList.push(country);
                    if(newCountryList.length > 10){
                        break;
                    }
                }
            }
            setIsNotFound(!newCountryList.length);
            setFilterCountries((newCountryList.length > 10)? [] : newCountryList)
        }
        

    }, [triggerFilter, pattern])

    const changePattern = (event)=>{
        setPattern(event.target.value);
    }

    return(
        <div style = {containerStyle}>
            <label htmlFor="filter" style={labelStyle}>Find countries: <input id="filter" value={pattern} onChange={changePattern} style={inputStyle} maxLength={15}/></label>
        </div>
    )
}

export default Filter;