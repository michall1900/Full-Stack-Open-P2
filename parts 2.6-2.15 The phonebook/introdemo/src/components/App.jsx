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
 * @typedef {Object} Person
 * @property {number} id - The unique identifier of the person.
 * @property {string} name - The name of the person.
 * @property {string} number - The phone number of the person.
 * 
 * @typedef {Object} FilterProps
 * @property {Person[]} persons - The list of all persons.
 * @property {function} setFilterPersons - Function to set the filtered persons.
 * @property {Person[]} filterPersons - The list of filtered persons.
 * @property {Person} deletedPerson - The deleted person object.
 * @property {Person} addedPerson - The added person object.
 * @property {Person} editPerson - The edited person object.
 * 
 * @typedef {Object} PersonFormProps
 * @property {function} setPersons - Function to set the list of persons.
 * @property {Person[]} persons - The list of all persons.
 * @property {function} setAddedPerson - Function to set the added person.
 * @property {function} setEditPerson - Function to set the edited person.
 * 
 * @typedef {Object} PersonsProps
 * @property {Person[]} filterPersons - The list of filtered persons.
 * @property {Person[]} persons - The list of all persons.
 * @property {function} setPersons - Function to set the list of persons.
 * @property {function} setDeletedPerson - Function to set the deleted person.
 */
const App = () => {
  const [persons, setPersons] = useState([])
  const [filterPersons, setFilterPersons] = useState([]);
  const [deletedPerson, setDeletedPerson] = useState({});
  const [addedPerson, setAddedPerson] = useState({});
  const [editPerson, setEditPerson] = useState({});
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [triggerAll, setTrigerAll] = useState(true);
  const [triggerFilter, setTrigerFilter] = useState(true);
  const timerId = useRef(null);

  const polling = () => {
    if(timerId.current)
      clearTimeout(timerId.current);

    personsServer
      .getAllPersons()
      .then(persons => {
        setPersons(persons);
        setTrigerFilter(!triggerFilter);
      })
      .catch(error => {
        setMessage(`Can't get persons. Error: ${error}`);
        setIsError(true);
      })
    
    timerId.current = setTimeout(polling, 60000);
  }

  useEffect(() => {
    polling();
  }, [triggerAll])


  return (
    <div>
      <h1>Phonebook</h1>
      <Notification isError={isError} message={message} setMessage={setMessage} />
      <Filter persons={persons} setFilterPersons={setFilterPersons} filterPersons={filterPersons}
        deletedPerson={deletedPerson} addedPerson={addedPerson} editPerson={editPerson} trigger={triggerFilter}/>
      <h2>Add a new</h2>
      <PersonForm setPersons={setPersons} persons={persons} setAddedPerson={setAddedPerson} setEditPerson={setEditPerson}
        setIsError={setIsError} setMessage={setMessage} setTrigerAll={setTrigerAll} triggerAll={triggerAll}/>
      <h2>Numbers</h2>
      <Persons filterPersons={filterPersons} persons={persons} setPersons={setPersons} setDeletedPerson={setDeletedPerson}
        setIsError={setIsError} setMessage={setMessage} setTrigerAll={setTrigerAll} triggerAll={triggerAll}/>
    </div>
  );
};

export default App;
