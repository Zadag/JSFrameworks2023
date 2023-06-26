import { useState } from "react";

const LessText = ({ text, maxLength }) => {
  const [finalText, setFinalText] = useState(text);
  const [buttonText, setButtonText] = useState("More text");

  const handleClick = () => {
    if (finalText.length === maxLength) {
      setFinalText(text);
      setButtonText("Less text");
    } else {
      setFinalText(text.slice(0, maxLength));
      setButtonText("More text");
    }
  };

  return (
    <>
      <p>{finalText}</p>
      <button onClick={() => handleClick()}>{buttonText}</button>
    </>
  );
};

export default LessText;
