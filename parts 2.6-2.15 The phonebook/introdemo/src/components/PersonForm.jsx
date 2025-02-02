import { useState } from "react";
import personsServer from "../services/persons";

/**
 * PersonForm component for adding and updating persons in the phonebook.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Array} props.persons - The list of persons in the phonebook.
 * @param {Function} props.setPersons - Function to update the list of persons.
 * @param {Function} props.setAddedPerson - Function to set the recently added person.
 * @param {Function} props.setEditPerson - Function to set the recently edited person.
 *
 * @returns {JSX.Element} The rendered component.
 *
 * @example
 * <PersonForm
 *   persons={persons}
 *   setPersons={setPersons}
 *   setAddedPerson={setAddedPerson}
 *   setEditPerson={setEditPerson}
 * />
 *
 * @description
 * This component provides a form to add a new person or update an existing person's number in the phonebook.
 * It validates the input fields for name and number before submission.
 *
 * Valid name:
 * - Must start with an uppercase letter followed by lowercase letters.
 * - Can contain multiple words separated by a space.
 * - No numbers or spaces at the start/end.
 *
 * Valid number:
 * - Must start with digits.
 * - Can contain optional groups of digits each preceded by a hyphen.
 */
const PersonForm = ({ persons, setPersons, setAddedPerson, setEditPerson, setIsError, setMessage}) => {

    const [newName, setNewName] = useState("");
    const [number, setNumber] = useState("");

    /**
     * Clears the input fields for new name and number.
     * 
     * This function resets the state of `newName` and `number` to empty strings,
     * effectively clearing any input that was previously entered.
     * 
     * @function clearInput
     * @returns {void}
     */
    const clearInput = () =>{
        setNewName("");
        setNumber("");
    }

    /**
     * Sends a new person to the server and updates the state with the returned person.
     *
     * @function
     * @name sendPersonToServer
     * @returns {void}
     * @description This function creates a new person object with the provided name and number,
     * sends it to the server, and updates the state with the returned person. If the request fails,
     * an alert is shown with the error message.
     */
    const sendPersonToServer = () => {
        const newPerson = { name: newName, number: number}
        personsServer
        .addNewPerson(newPerson)
        .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson));
            setAddedPerson(returnedPerson);
            clearInput();
            setIsError(false);
            setMessage(`Successfuly added ${returnedPerson.name}.`)
        })
        .catch(error => {
            setMessage(`Fail on adding ${newName} to the list. Error: ${error}`);
            setIsError(true);
        })
    }

    /**
     * Updates the phone number of an existing person.
     *
     * @param {Object} existPerson - The existing person object to be updated.
     * @param {number} existPerson.id - The ID of the existing person.
     * @param {string} existPerson.name - The name of the existing person.
     */
    const updateNumber = (existPerson) => {
        const newPerson = {...existPerson, number: number};
        personsServer
        .editPersonNumber(newPerson)
        .then(newRecievedPerson => {
            setPersons(persons.map(person => (person.id === newRecievedPerson.id) ? newRecievedPerson : person));
            setEditPerson(newRecievedPerson);
            clearInput();
            setIsError(false);
            setMessage(`Successfuly changed ${newRecievedPerson.name}'s number to ${newRecievedPerson.number}`);
        })
        .catch(error => {
            setMessage (`Failed on update ${newPerson.name}'s number. Error: ${error}`)
            setIsError(true);
        });
    }

    
    /**
     * Handles the form submission to add a new person to the phonebook.
     * 
     * @param {Event} event - The form submission event.
     * 
     * This function prevents the default form submission behavior, checks if the person
     * already exists in the phonebook, and either sends the new person to the server or
     * prompts the user to confirm updating the existing person's number.
     */
    const addPerson = (event) => {

        event.preventDefault();

        const existPerson =  persons.find((person) => person.name === newName);
        if (!existPerson) {
            sendPersonToServer();
        }
        else if (window.confirm(`${existPerson.name} is already added to phonebook, resplace the old number with a new one?`)){
            updateNumber(existPerson);
        }
            
    };

    /**
     * Returns an event handler function that updates the state using the provided setter function.
     *
     * @param {Function} setter - The state setter function to update the state.
     * @returns {Function} An event handler function that takes an event object and updates the state with the event target's value.
     */
    const onChangeInput = (setter) => (event) => {
        setter(event.target.value);
    }


    return (
        <form onSubmit={addPerson}>
            <div>
                <label htmlFor="name">Name: <input value={newName} onChange={onChangeInput(setNewName)}
                    id="name" pattern="^[A-Z][a-z]*([ ][A-Z][a-z]*)*$" required
                    title="Enter words starting with an uppercase letter followed by lowercase letters, separated by a space. No numbers or spaces at the start/end." />
                </label>
            </div>
            <br />
            <div>
                <label htmlFor="number">Number: <input value={number} onChange={onChangeInput(setNumber)}
                    id="number" pattern="^\d+(-\d+)*$" title="Enter a number starting with digits, followed by optional groups of digits each preceded by a hyphen." required />
                </label>
            </div>
            <br />
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    );
};

export default PersonForm;
