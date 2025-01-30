const ShowList = ({ persons }) => (
  <ul>
    {persons.map(({ name, id, number }) => (
      <li key={id}>{name} {number}</li>
    ))}
  </ul>
);

export default ShowList;
