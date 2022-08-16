const Persons = ({ personsToShow, deletePerson }) => {
  return (
    <div>
      {personsToShow.map((person) => (
        <div className="note" key={person.name}>
          {person.name} {person.number}{" "}
          <button onClick={() => deletePerson(person.id, person.name)}>
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Persons;
