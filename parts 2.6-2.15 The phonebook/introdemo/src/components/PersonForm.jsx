import { useState } from "react";
import personsServer from "../services/persons";

const PersonForm = ({ persons, setPersons}) => {

    const [newName, setNewName] = useState("");
    const [number, setNumber] = useState("");

    const clearInput = () =>{
        setNewName("");
        setNumber("");
    }
    const sendPersonToServer = () => {
        const newPerson = { name: newName, number: number}
        personsServer
        .addNewPerson(newPerson)
        .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson));
            clearInput();
        })
        .catch(error => {
            alert(`Fail on adding ${newName} to the list. Error: ${error}`);
        })
    }

    const updateNumber = (existPerson) => {
        const newPerson = {...existPerson, number: number};
        personsServer
        .editPersonNumber(newPerson)
        .then(newRecievedPerson => {
            setPersons(persons.map(person => (person.id === newRecievedPerson.id) ? newRecievedPerson : person));
            clearInput();
        })
        .catch(error => {
            alert (`Failed on update ${newPerson.name} number. Error: ${error}`)
        });
    }
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
