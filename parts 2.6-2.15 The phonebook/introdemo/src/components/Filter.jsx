import { useEffect, useState } from 'react';

const Filter = ({ persons, filterPersons, setFilterPersons, editPerson, deletedPerson, addedPerson}) => {
    
    const [userPatternToFilter, setUserPatternToFilter] = useState("");

    const isMatchToUsersPattern = (personName, pattern = userPatternToFilter) => {
        return !!personName.toLowerCase().match(RegExp(pattern.toLowerCase()));
    }
    
    useEffect(() => {
        setFilterPersons(persons.filter(({ name }) => isMatchToUsersPattern(name)));
    }, [userPatternToFilter]);


    useEffect (()=>{
        if (editPerson.name && isMatchToUsersPattern (editPerson.name))
            setFilterPersons(filterPersons.map( person => (person.id === editPerson.id)? editPerson: person))
    },[editPerson])


    useEffect (()=>{
        if(deletedPerson.name && isMatchToUsersPattern (deletedPerson.name))
            setFilterPersons(filterPersons.filter (person => person.id !== deletedPerson.id));
    },[deletedPerson])


    useEffect (()=>{
        if (addedPerson.name && isMatchToUsersPattern (addedPerson.name))
            setFilterPersons(filterPersons.concat(addedPerson));
    },[addedPerson])

    const changeFilter = (event) => {
        if (event.target.value.match(/^[\sa-zA-Z]*$/)) {
            setUserPatternToFilter(event.target.value);
        }
        else
            alert("The filter can include only letters or whitespaces");
    };

    return (
        <div>
            <label htmlFor="filter">
                Filter shown with:{" "}
                <input
                    value={userPatternToFilter}
                    onChange={changeFilter}
                    id="filter"
                    title="The filter can include only letters or whitespaces"
                />
            </label>
            <br />
        </div>
    );
};

export default Filter;
