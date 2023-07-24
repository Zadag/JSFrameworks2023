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
  const [character, setCharacter] = useState(null);
  const [characterList, setCharacterList] = useState([]);

  const handleSelect = (e) => {
    setCharacter(characterList[parseInt(e.target.value) - 1]);
  };

  // Get all characters and save in state
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then((res) => {
      setCharacterList(res.data.results);
      setCharacter(res.data.results[0]);
      console.log("character", res.data.results[0]);
      console.log("character list", res.data.results);
    });
  }, []);

  console.log(Boolean(character));
  return (
    <div className="container">
      <div className="row text-center" id="body">
        {!character ? (
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
