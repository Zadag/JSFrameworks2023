import "./App.css";
import LessText from "./components/LessText/LessText";
import WeatherDisplay from "./components/WeatherDisplay/WeatherDisplay";

// Import CharacterCount here

//Import GuessTheNumber

const appText = "The quick brown fox jumped over the lazy dog";
const maxLength = 10;

function App() {
  return (
    <>
      <div className="container pt-4 pb-4">
        <h1 className="h3">Challenge 1 - Less Text</h1>
        <LessText text={appText} maxLength={maxLength} />
      </div>
      <div className="bg-secondary text-white pt-4 pb-4 mb-4">
        <div className="container">
          <h1 className="h3">Challenge 2 - Character Count</h1>
          {/* Add CharacterCount here */}
        </div>
      </div>
      <div className="container">
        <h1 className="h3">Challenge 3 - Guessing The Number</h1>
        {/* Add GuessingTheNumber here */}
      </div>
      <div className="container">
        <h1 className="h3">Challenge 4 - Weather</h1>
        <WeatherDisplay fahrenTemp={45} />
      </div>
    </>
  );
}

export default App;
