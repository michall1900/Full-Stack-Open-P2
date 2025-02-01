import { useEffect, useState } from 'react';

const Filter = ({ persons, setFilterPersons}) => {
    
    const [userPatternToFilter, setUserPatternToFilter] = useState("");

    const isMatchToUsersPattern = (personName, pattern = userPatternToFilter) => {
        return !!personName.toLowerCase().match(RegExp(pattern.toLowerCase()));
    }
    
    useEffect(() => {
        setFilterPersons(persons.filter(({ name }) => isMatchToUsersPattern(name)));
    }, [userPatternToFilter, persons]);

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
