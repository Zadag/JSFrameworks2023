import "./App.css";
import LessText from "./components/LessText/LessText";
import CharacterCount from "./components/CharacterCount/CharacterCount";
import GuessTheNumber from "./components/GuessTheNumber/GuessTheNumber";

function App() {
  return (
    <>
      <div className="container pt-4 pb-4">
        <h2 className="h3">Challenge 1 - Less Text</h2>
        <LessText
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus earum culpa expedita cumque tempora, nisi sequi, ratione debitis eveniet consequatur cupiditate quibusdam, quo voluptates asperiores voluptas inventore iusto. Et, unde!"
          maxLength={100}
        />
      </div>
      <div className="bg-secondary text-white pt-4 pb-4 mb-4">
        <div className="container">
          <h1 className="h3">Challenge 2 - Character Count</h1>
          <CharacterCount />
        </div>
      </div>
      <div className="container">
        <h1 className="h3">Challenge 3 - Guessing The Number</h1>
        <GuessTheNumber />
      </div>
    </>
  );
}

export default App;
