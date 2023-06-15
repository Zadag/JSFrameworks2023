import "./App.css";
import AccordianSection from "./components/AccordianSection";
import accordian from "./content/accordian";

function App() {
  return (
    <div class="ui styled accordion">
      {accordian.map((accord) => (
        <AccordianSection accordian={accord} />
      ))}
    </div>
  );
}

export default App;
