import "./App.css";
import { technologies } from "./images/technologies";
import { phones } from "./images/phones";

function App() {
  return (
    <div className="App">
      {[
        ...technologies.map((image) => {
          return <img src={image}></img>;
        }),
        ...Object.values(phones).map((image) => {
          return <img src={image}></img>;
        }),
      ]}
    </div>
  );
}

export default App;
