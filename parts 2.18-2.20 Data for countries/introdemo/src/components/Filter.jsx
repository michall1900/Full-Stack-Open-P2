import { useEffect, useState } from "react";

/**
 * Filter component for filtering a list of countries based on user input.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Array} props.countriesNamesList - List of country names to filter.
 * @param {Function} props.setFilterCountries - Function to set the filtered list of countries.
 * @param {boolean} props.triggerFilter - Boolean to trigger the filter effect.
 * @param {Function} props.setIsNotFound - Function to set the "not found" state.
 * @returns {JSX.Element} The rendered Filter component.
 */
const Filter = ({countriesNamesList, setFilterCountries, triggerFilter, setIsNotFound})=>{
    const MAX_COUNTRIES = 10;
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
                if(country.name.match(toLowerPattern)){
                    newCountryList.push(country);
                    if(newCountryList.length > MAX_COUNTRIES){
                        break;
                    }
                }
            }
            setIsNotFound(!newCountryList.length);
            setFilterCountries((newCountryList.length > MAX_COUNTRIES)? [] : newCountryList)
        }
        

    }, [triggerFilter, pattern])

    /**
     * Handles the change event for an input field and updates the pattern state.
     *
     * @param {Object} event - The event object from the input field.
     * @param {Object} event.target - The target element of the event.
     * @param {string} event.target.value - The new value of the input field.
     */
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