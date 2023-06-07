import Cats from "./components/Cats/Cats";
import SingleParentElement from "./components/SingleParentElement/SingleParentElement";
import Person from "./components/Person/Person";
import Me from "./components/Me/_Me_";

function App() {
  return (
    <div className="text-center">
      <div className="bg-secondary text-white pt-3 pb-1">
        <Cats />
      </div>
      <div className="bg-info pt-3 pb-1">
        <SingleParentElement />
      </div>
      <div className="pt-3 pb-3">
        <Person />
      </div>
      <Me />
    </div>
  );
}

export default App;
