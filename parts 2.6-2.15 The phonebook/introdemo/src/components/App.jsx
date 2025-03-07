import { useState, useEffect, useRef } from "react";
import personsServer from "../services/persons";
import PersonForm from "./PersonForm";
import Filter from "./Filter";
import Persons from "./Persons";
import Notification from "./Notification";
import ClipLoader from "react-spinners/ClipLoader";

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
  const [isLoading, setIsLoading] = useState(false);
  const timerId = useRef(null);



  /**
   * Handles notifications by setting the error state, logging the message, and updating the message state.
   *
   * @param {string} customErrorMessage - The custom error message to be displayed.
   * @param {boolean} isErrorNotification - A flag indicating whether the notification is an error.
   * @param {Object} [errorObject] - The error object containing additional error information.
   * @param {Object} [errorObject.response] - The response object from the error.
   * @param {Object} [errorObject.response.data] - The data object from the response.
   * @param {string} [errorObject.response.data.error] - The error message from the response data.
   */
  const notificationHandler = (customErrorMessage, isErrorNotification, errorObject)=>{
    setIsError(isErrorNotification)
    if(errorObject && errorObject.response && errorObject.response.data && errorObject.response.data.error){
      customErrorMessage = `${customErrorMessage} ${errorObject.response.data.error}`
    }
    (isErrorNotification)? console.error(customErrorMessage): console.log(customErrorMessage);
    setMessage(`${customErrorMessage}`)
  }
  /**
   * Polls the server to get the list of persons and updates the state accordingly.
   * If there is an existing timer, it clears it before setting a new one.
   * On successful retrieval of persons, updates the persons state and triggers the filter.
   * On failure, sets an error message and updates the error state.
   * Sets a timeout to call itself again after 60 seconds.
   * 
   * @function polling
   * @returns {void} 
   */
  const polling = () => {
    if(timerId.current)
      clearTimeout(timerId.current);
    setIsLoading(true);
    personsServer
      .getAllPersons()
      .then(persons => {
        if(!Array.isArray(persons))
          throw new Error("The received data is not an array.")
        setPersons(persons);
        timerId.current = setTimeout(polling, 30000);
      })
      .catch(error => {
        notificationHandler("Can't get phonebook. Try again later.", true, error);
        setPersons([])
        timerId.current = null;
      })
      .finally(() => {
        setTrigerFilter(triggerFilter => !triggerFilter);
        setIsLoading(false);
      })
  }

  useEffect(() => {
    polling();
  }, [triggerFetch])


  return (
    <div>
      <h1>Phonebook</h1>
      <Notification isError={isError} message={message} setMessage={setMessage} />
      <ClipLoader loading={isLoading}/>
      <Filter persons={persons} setFilterPersons={setFilterPersons} filterPersons={filterPersons}
        deletedPerson={deletedPerson} addedPerson={addedPerson} editPerson={editPerson} triggerFilter={triggerFilter}/>
      <h2>Add a new</h2>
      <PersonForm notificationHandler={notificationHandler} setPersons={setPersons} persons={persons} setAddedPerson={setAddedPerson} setEditPerson={setEditPerson}
        setTriggerFetch={setTriggerFetch} setIsLoading={setIsLoading}/>
      <h2>Numbers</h2>
      <Persons filterPersons={filterPersons} persons={persons} setPersons={setPersons} setDeletedPerson={setDeletedPerson}
        setIsError={setIsError} setMessage={setMessage} setTriggerFetch={setTriggerFetch}
        setIsLoading={setIsLoading} notificationHandler={notificationHandler}/>
    </div>
  );
};

export default App;
