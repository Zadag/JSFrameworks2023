const Character = ({ character }) => {
  console.log(character);
  return (
    <>
      <h1 id="title-head">{character.name}</h1>
      <div id="main-img">
        <img height="250" src={character.image} alt="placeholder" />
        <div>
          <a href="http://rickandmorty.wikia.com/wiki/Rick_Sanchez">
            {character.name}
          </a>
        </div>
      </div>
    </>
  );
};

export default Character;
