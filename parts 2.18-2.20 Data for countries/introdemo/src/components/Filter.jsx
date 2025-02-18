import { useEffect, useState } from "react";

const Filter = ({countriesNamesList, setFilterCountries, triggerFilter, setIsNotFound})=>{

    const [pattern, setPattern] = useState("");

    const labelStyle = {
        paddingRight:"10px",
        height: "100%"
    }

    const inputStyle={
        borderRadius: "5px",
        border: "2px solid black",
        minWidth: "max(20vw, 100px)",
        height:"auto",
        fontSize:"max(1.5vw, 15px)"
    }
    const containerStyle={
        margin: "30px auto",
        display: "flex",
        justifyContent: "center",
        fontWeight: "700",
        width: "80vw",
        alignItems: "center",
        flexWrap:"wrap"
    }

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
        <div style={containerStyle}>
            <label htmlFor="filter" style={labelStyle}>Find countries: </label><input id="filter" value={pattern} onChange={changePattern} maxLength={15} style={inputStyle}/>
        </div>
    )
}

export default Filter;