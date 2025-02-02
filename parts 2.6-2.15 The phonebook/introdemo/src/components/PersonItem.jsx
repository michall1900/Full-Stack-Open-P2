import personsServer from "../services/persons";

/**
 * Component to render a single person's information with a delete button.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.person - The person object containing name and number.
 * @param {Function} props.setPersons - Function to update the list of persons.
 * @param {Array} props.persons - The current list of persons.
 * @param {Function} props.setDeletedPerson - Function to set the deleted person.
 *
 * @returns {JSX.Element} The rendered component.
 */
const PersonItem = ({person, setPersons, persons, setDeletedPerson}) =>{

    const deletePerson = (id, name) => () => {
        if(window.confirm(`Are you sure you want to delete ${name}?`)){
            personsServer
            .deletePerson(id)
            .then(deletedPerson =>{
                setPersons(persons.filter((({id}) => id !== deletedPerson.id)))
                setDeletedPerson(deletedPerson);
            })
            .catch(error =>{
                alert(`Can't delete ${name}, Error: ${error}`);
            })
        }
    }

    return (
        <li>
            {person.name} {person.number} <button onClick ={deletePerson(person.id, person.name)}>Delete</button>
        </li>
    )
}
export default PersonItem;