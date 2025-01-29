const ShowList = ({ persons }) => (
  <ul>
    {persons.map(({ name, id }) => (
      <li key={id}>{name}</li>
    ))}
  </ul>
);

export default ShowList;
