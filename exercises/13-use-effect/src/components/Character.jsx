const Character = ({ character }) => {
  return (
    <>
      <h1 id="title-head">{character.name}</h1>
      <div id="main-img">
        <a href="http://rickandmorty.wikia.com/wiki/Rick_Sanchez">
          {character.name}
          <img height="250" src={character.url} />
        </a>
      </div>
    </>
  );
};

export default Character;
