import { useState } from "react";

const WeatherDisplay = ({ fahrenTemp }) => {
  const [isCelcius, setIsCelcius] = useState(false);

  const handleClick = () => {
    setIsCelcius(!isCelcius);
  };

  return (
    <div>
      <p>
        The temperature is{" "}
        {isCelcius ? ((5 / 9) * (fahrenTemp - 32)).toFixed(0) : fahrenTemp}{" "}
        degrees
      </p>
      <button onClick={() => handleClick()}>
        Show {isCelcius ? "fahrenheiht" : "celsius"}
      </button>
    </div>
  );
};

export default WeatherDisplay;
