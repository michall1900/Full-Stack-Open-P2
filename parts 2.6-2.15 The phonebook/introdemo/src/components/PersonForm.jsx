import { useState } from "react";
import shortid from "shortid";

const PersonForm = ({persons, setPersons, filterPersons, setFilterPersons, isMatchToUsersPattern }) => {

  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");


  const addPerson = (event) => {
    
    event.preventDefault();


    if(persons.every((line) => line.name !== newName)){

        const newPerson = { name: newName, id: shortid.generate(), number:number }
        setPersons(persons.concat(newPerson));
        if(isMatchToUsersPattern(newName))
            setFilterPersons(filterPersons.concat(newPerson))
        setNewName("");
        setNumber("");
    }
    else
        alert(`${newName} is already added to phonebook`)
  };

  const onChangeInput = (setter) => (event)=>{
    setter(event.target.value);
  }


return (
    <form onSubmit={addPerson}>
        <div>
            <label htmlFor="name">Name: <input value={newName} onChange={onChangeInput(setNewName)} 
                    id="name" pattern="^[A-Z][a-z]*([ ][A-Z][a-z]*)*$" required
                    title="Enter words starting with an uppercase letter followed by lowercase letters, separated by a space. No numbers or spaces at the start/end."/>
            </label>
        </div>
        <br/>
        <div>
            <label htmlFor="number">Number: <input value={number} onChange={onChangeInput(setNumber)} 
                    id="number" pattern="^\d+(-\d+)*$" title = "Enter a number starting with digits, followed by optional groups of digits each preceded by a hyphen." required/>
            </label>
        </div>
        <br/>
        <div>
            <button type="submit">Add</button>
        </div>
    </form>
);
};

export default PersonForm;
