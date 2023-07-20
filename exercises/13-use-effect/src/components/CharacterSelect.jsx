import { useState } from "react";

const CharacterSelect = ({ characterList, handleSelect, character }) => {
  return (
    <div className="linkfooter">
      <p>Select your favorite character</p>
      {/* Handle event here */}
      <select
        id="dropdown"
        type="text"
        onChange={handleSelect}
        //value={character.id}
      >
        <option>Choose a character</option>
        {characterList.map((char) => {
          return (
            <option key={char.id} value={char.id}>
              {char.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CharacterSelect;
