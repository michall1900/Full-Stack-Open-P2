import { useEffect, useState } from 'react';

/**
 * Filter component for filtering a list of persons based on a user-provided pattern.
 *
 * A valid pattern can include only letters or whitespaces.
 *
 * @component
 * @param {Object[]} persons - The list of persons to filter.
 * @param {Object[]} filterPersons - The current list of filtered persons.
 * @param {Function} setFilterPersons - Function to update the list of filtered persons.
 * @param {Object} editPerson - The person object that has been edited.
 * @param {Object} deletedPerson - The person object that has been deleted.
 * @param {Object} addedPerson - The person object that has been added.
 *
 * @returns {JSX.Element} The rendered Filter component.
 */
const Filter = ({ persons, filterPersons, setFilterPersons, editPerson, deletedPerson, addedPerson}) => {
    
    const [userPatternToFilter, setUserPatternToFilter] = useState("");

    /**
     * Checks if a given person's name matches a user-defined pattern.
     *
     * @param {string} personName - The name of the person to check.
     * @param {string} [pattern=userPatternToFilter] - The pattern to match against. Defaults to `userPatternToFilter`.
     * @returns {boolean} - Returns `true` if the person's name matches the pattern, otherwise `false`.
     */
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

    /**
     * Handles the change event for the filter input.
     * 
     * This function updates the filter pattern used to filter users based on the input value.
     * It only allows letters and whitespaces in the input. If the input contains any other characters,
     * an alert is shown to the user.
     * 
     * @param {Object} event - The event object from the input change event.
     * @param {Object} event.target - The target element of the event.
     * @param {string} event.target.value - The current value of the input field.
     */
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
