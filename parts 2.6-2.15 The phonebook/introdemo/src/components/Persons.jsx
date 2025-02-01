import PersonItem from "./PersonItem";

const Persons = ({ filterPersons, persons, setPersons }) => (
  <ul>
    {filterPersons.map((person) => (
      <PersonItem person={person} key={person.id} persons={persons} setPersons={setPersons}/>
    ))}
  </ul>
);

export default Persons;
