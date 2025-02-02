import PersonItem from "./PersonItem";

const Persons = ({ filterPersons, persons, setPersons, setDeletedPerson }) => (
  <>
    {filterPersons && filterPersons.length ? (
      <ul>
        {filterPersons.map((person) => (
          <PersonItem person={person} key={person.id} persons={persons} setPersons={setPersons} setDeletedPerson={setDeletedPerson}/>
        ))}
      </ul>
    ) : (
      <p>Can't find person that is matching to your filter pattern</p>
    )}
  </>
);

export default Persons;
