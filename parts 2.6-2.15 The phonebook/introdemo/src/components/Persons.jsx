import PersonItem from "./PersonItem";

/**
 * Persons component renders a list of filtered persons or a message if no persons match the filter.
 *
 * @param {Object} props - The props object.
 * @param {Array} props.filterPersons - The array of filtered persons to display.
 * @param {Array} props.persons - The array of all persons.
 * @param {Function} props.setPersons - The function to update the persons state.
 * @param {Function} props.setDeletedPerson - The function to set the deleted person state.
 * @param {Function} props.setIsError - The function to set the error state.
 * @param {Function} props.setMessage - The function to set the message state.
 * @param {boolean} props.triggerFetch - A boolean to trigger some action.
 * @param {Function} props.setTriggerFetch - The function to set the triggerAll state.
 *
 * @returns {JSX.Element} The rendered component.
 */
const Persons = ({ filterPersons, persons, setPersons, setDeletedPerson, setIsError, setMessage, triggerFetch, setTriggerFetch}) => (
  <>
    {filterPersons && filterPersons.length ? (
      <ul>
        {filterPersons.map((person) => (
          <PersonItem person={person} key={person.id} persons={persons} setPersons={setPersons} 
            setDeletedPerson={setDeletedPerson} setIsError={setIsError} setMessage={setMessage}
            setTriggerFetch={setTriggerFetch} triggerFetch={triggerFetch}/>
        ))}
      </ul>
    ) : (
      <p>Can't find person that is matching to your filter's pattern</p>
    )}
  </>
);

export default Persons;
