import { useState, useEffect, useRef } from "react";
import personsServer from "../services/persons";
import PersonForm from "./PersonForm";
import Filter from "./Filter";
import Persons from "./Persons";
import Notification from "./Notification";

/**
 * App component for the Phonebook application.
 * Manages the state of persons, filtered persons, and tracks added, deleted, and edited persons.
 * 
 * @component
 * @example
 * return (
 *   <App />
 * )
 * 
 * @returns {JSX.Element} The rendered component.
 * 
 * 
 */
const App = () => {
  const [persons, setPersons] = useState([])
  const [filterPersons, setFilterPersons] = useState([]);
  const [deletedPerson, setDeletedPerson] = useState({});
  const [addedPerson, setAddedPerson] = useState({});
  const [editPerson, setEditPerson] = useState({});
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [triggerFetch, setTriggerFetch] = useState(true);
  const [triggerFilter, setTrigerFilter] = useState(true);
  const timerId = useRef(null);

  /**
   * Polls the server to get the list of persons and updates the state accordingly.
   * If there is an existing timer, it clears it before setting a new one.
   * On successful retrieval of persons, updates the persons state and triggers the filter.
   * On failure, sets an error message and updates the error state.
   * Sets a timeout to call itself again after 60 seconds.
   */
  const polling = () => {
    if(timerId.current)
      clearTimeout(timerId.current);

    personsServer
      .getAllPersons()
      .then(persons => {
        setPersons(persons);
        setTrigerFilter(triggerFilter => !triggerFilter);
      })
      .catch(error => {
        setMessage(`Can't get persons. Error: ${error}`);
        setIsError(true);
      })
    
    timerId.current = setTimeout(polling, 30000);
  }

  useEffect(() => {
    polling();
  }, [triggerFetch])


  return (
    <div>
      <h1>Phonebook</h1>
      <Notification isError={isError} message={message} setMessage={setMessage} />
      <Filter persons={persons} setFilterPersons={setFilterPersons} filterPersons={filterPersons}
        deletedPerson={deletedPerson} addedPerson={addedPerson} editPerson={editPerson} triggerFilter={triggerFilter}/>
      <h2>Add a new</h2>
      <PersonForm setPersons={setPersons} persons={persons} setAddedPerson={setAddedPerson} setEditPerson={setEditPerson}
        setIsError={setIsError} setMessage={setMessage} setTriggerFetch={setTriggerFetch} triggerFetch={triggerFetch}/>
      <h2>Numbers</h2>
      <Persons filterPersons={filterPersons} persons={persons} setPersons={setPersons} setDeletedPerson={setDeletedPerson}
        setIsError={setIsError} setMessage={setMessage} setTriggerFetch={setTriggerFetch} triggerFetch={triggerFetch}/>
    </div>
  );
};

export default App;
