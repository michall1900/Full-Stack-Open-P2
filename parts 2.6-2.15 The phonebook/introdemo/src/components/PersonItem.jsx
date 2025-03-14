import personsServer from "../services/persons";

/**
 * Component representing a single person item in the phonebook.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {Object} props.person - The person object containing name and number.
 * @param {Function} props.setPersons - Function to update the list of persons.
 * @param {Array} props.persons - The current list of persons.
 * @param {Function} props.setDeletedPerson - Function to set the deleted person.
 * @param {Function} props.setIsError - Function to set the error state.
 * @param {Function} props.setMessage - Function to set the message state.
 * @param {boolean} props.triggerFetch - A boolean to trigger re-render.
 * @param {Function} props.setTriggerFetch - Function to toggle the triggerAll state.
 * @returns {JSX.Element} The rendered component.
 */

const PersonItem = ({ person, setPersons, persons, setDeletedPerson, setTriggerFetch, setIsLoading, notificationHandler }) => {

    /**
     * Deletes a person from the list after confirming with the user.
     *
     * @param {number} id - The ID of the person to delete.
     * @param {string} name - The name of the person to delete.
     * @returns {Function} A function that, when called, will delete the person.
     */
    const deletePerson = (id, name) => () => {
        if (window.confirm(`Are you sure you want to delete ${name}?`)) {
            setIsLoading(true);
            personsServer
                .deletePerson(id)
                .then(_ => {
                    const index= persons.findIndex((person)=>person.id===id)
                    const deletedPerson = {...persons[index]}
                    setPersons([...persons.slice(0,index), ...persons.slice(index+1, persons.length)])
                    setDeletedPerson(deletedPerson)
                    notificationHandler(`${deletedPerson.name} deleted successfuly.`, false)
                })
                .catch(error => {
                    setTriggerFetch(triggerFetch => !triggerFetch);
                    notificationHandler(`Can't delete ${name}.`, true, error)
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }

    return (
        <li>
            {person.name} {person.number} <button onClick={deletePerson(person.id, person.name)}>Delete</button>
        </li>
    )
}
export default PersonItem;