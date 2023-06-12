import "./App.css";
import { technologies } from "./images/technologies";
import { phones } from "./images/phones";

function App() {
  const technologiesJSX = technologies.map((img) => <img src={img}></img>);
  const phonesJSX = Object.values(phones).map((img) => <img src={img}></img>);

  return <div className="App">{[technologiesJSX, phonesJSX]}</div>;
}

export default App;
