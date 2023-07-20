// import useEffect
import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Character from "./components/Character";
import CharacterSelect from "./components/CharacterSelect";

function App() {
  /**
   * Set up state and make AJAX requests here
   */
  const [character, setCharacter] = useState({});
  const [characterList, setCharacterList] = useState([]);

  const handleSelect = (e) => {
    setCharacter(e.target.id);
    console.log(character);
  };

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then((res) => {
      setCharacterList(res.data.results);
      setCharacter(res.data.results[0]);
      console.log("here", res.data.results[0]);
    });
  }, []);

  return (
    <div className="container">
      <div className="row text-center" id="body">
        {character ? (
          <p>...Loading</p>
        ) : (
          <>
            <Character character={character} />
            <CharacterSelect
              characterList={characterList}
              character={character}
              handleSelect={handleSelect}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
