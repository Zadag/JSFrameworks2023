const Person = () => {
  const person = {
    name: "Peter Piper",
    birthYear: 1940,
    occupation: "Musician",
  };

  /**
   * Create a function that get's Peter Piper's age from his birth year.
   * You can get today's year with:
   * @example new Date(Date.now()).getFullYear()
   */

  const personAge = (person) => {
    const currentYear = new Date().getFullYear();
    return currentYear - person.birthYear;
  };

  return (
    <div>
      <h1>Featured Person</h1>
      {person.name}
      <div>Name: _____</div>
      {person.occupation}
      <div>Occupation: _____</div>
      {personAge(person)}
      <div>Age: _____</div>
    </div>
  );
};

export default Person;
