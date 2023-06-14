<<<<<<< HEAD
import "./App.css";
import Heading from "./Heading";
import Welcome from "./Welcome";
=======
import './App.css';

import { Heading } from './components/Heading/Heading';
import { Welcome } from './components/Heading/welcome/Welcome';
>>>>>>> 1102a559497e14c7cbd0096e6cec5a4f1808d6fb

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Welcome />
      <Heading>Welcome to my React App!</Heading>
=======
      <Heading>Welcome to my React App</Heading>
      <Welcome name="Ariadna" />
      <Welcome />
>>>>>>> 1102a559497e14c7cbd0096e6cec5a4f1808d6fb
    </div>
  );
}

export default App;
