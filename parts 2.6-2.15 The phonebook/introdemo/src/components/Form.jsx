import { useState } from "react";
import shortid from "shortid";

const Form = ({persons, setPersons }) => {

  const [newName, setNewName] = useState("");
  
  const fixName = () =>{

    console.log(newName);
    
    let name = newName.trim().replace( /\s+/ ,' ');
    
    return (name.split(' ').map(word=> word[0].toUpperCase() + word.slice(1, word.length).toLowerCase()).join(' ')); 
  }

  const addPerson = (event) => {
    
    event.preventDefault();

    const realName = fixName(); 
    console.log(realName);

    if(persons.every((line) => line.name !== realName)){
        setPersons(persons.concat({ name: newName, id: shortid.generate() }));
        setNewName("");
    }
    else
        alert(`${realName} is already added to phonebook`)
  };

  const changeName = (event) => {
    setNewName(event.target.value);
  };

  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={changeName} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Form;
