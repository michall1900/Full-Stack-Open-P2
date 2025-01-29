import { useState } from "react";
import shortid from "shortid";

const Form = ({persons, setPersons }) => {
    
  const [newName, setNewName] = useState("");
  const addPerson = (event) => {
    
    event.preventDefault();

    setPersons(persons.concat({ name: newName, id: shortid.generate() }));
    setNewName("");
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
