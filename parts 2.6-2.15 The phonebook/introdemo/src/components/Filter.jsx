const Filter = ({persons, setFilterPersons, userPatternToFilter, 
    setUserPatternToFilter, isMatchToUsersPattern}) =>{
    
    const filterPersons = (newPattern) =>{
        setFilterPersons(persons.filter(({name})=> isMatchToUsersPattern(name, newPattern)))
    }

    const changeFilter = (event) =>{
        if(event.target.value.match(/^[\sa-zA-Z]*$/)){
            setUserPatternToFilter(event.target.value);
            filterPersons(event.target.value);
        }
        else
            alert("The filter can include only letters or whitespaces");
    }

    return (
        <div>
            <label htmlFor="filter">Filter shown with: <input value={userPatternToFilter} onChange={changeFilter} 
                id="filter" title="The filter can include only letters or whitespaces"/>
            </label>
            <br/>
        </div>
    )
}


export default Filter;