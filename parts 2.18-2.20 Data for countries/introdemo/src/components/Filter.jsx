import { useEffect, useState } from "react";

const Filter = ({countriesNamesList, setFilterCountries, triggerFilter})=>{

    const [pattern, setPattern] = useState("");

    useEffect(()=>{
        if(!pattern || !pattern.length)
            setFilterCountries([]);
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
            
            setFilterCountries((newCountryList.length > 10)? [] : newCountryList)
        }
        

    }, [triggerFilter, pattern])

    const changePattern = (event)=>{
        setPattern(event.target.value);
    }

    return(
        <div>
            <label htmlFor="filter">Find countries: <input id="filter" value={pattern} onChange={changePattern}/></label>
        </div>
    )
}

export default Filter;