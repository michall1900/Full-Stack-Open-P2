import PersonItem from "./PersonItem";

const Persons = ({ persons }) => (
  <ul>
    {persons.map((person) => (
      <PersonItem person={person} key={person.id}/>
    ))}
  </ul>
);

export default Persons;
