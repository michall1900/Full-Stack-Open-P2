import personsServer from "../services/persons";

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