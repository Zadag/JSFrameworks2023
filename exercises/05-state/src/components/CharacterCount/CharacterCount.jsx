import { useState } from "react";

const CharacterCount = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleChange}
        cols="30"
        rows="10"
      ></textarea>
      <p>Character count: {text.length}</p>
    </div>
  );
};

export default CharacterCount;
