import { useState } from 'react'
import shortid from 'shortid'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', id: shortid.generate()}]) 
  const [newName, setNewName] = useState('')


  const addPerson = (event) => {
    event.preventDefault();

    setPersons(persons.concat({name: newName, id: shortid.generate()}));
    setNewName('');
  }

  const changeName = (event) => {
    setNewName(event.target.value);
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={changeName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul> 
        {persons.map(({name, id}) => <li key={id}>{name}</li> )}
      </ul>
    </div>
  )
}

export default App