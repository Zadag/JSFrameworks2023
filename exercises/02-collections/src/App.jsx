<<<<<<< HEAD
import "./App.css";
import { technologies } from "./images/technologies";
import { phones } from "./images/phones";

function App() {
  const technologiesJSX = technologies.map((img) => <img src={img}></img>);
  const phonesJSX = Object.values(phones).map((img) => <img src={img}></img>);

  return <div className="App">{[...technologiesJSX, ...phonesJSX]}</div>;
=======
import './App.css';

import { phones } from './images/phones';
import { technologies } from './images/technologies';

function App() {
  return (
    <div className="App">
      {Object.values(phones).map((imageUrl, index) => {
        return <img alt="a phone" src={imageUrl} key={`phone-${index}`} />;
      })}

      {technologies.map((item, index) => {
        return (
          <img alt="a technology" src={item} key={`technology-${index}`} />
        );
      })}
    </div>
  );
>>>>>>> 1102a559497e14c7cbd0096e6cec5a4f1808d6fb
}

export default App;
