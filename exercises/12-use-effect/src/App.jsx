// Import useEffect here
import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  /**
   * dogImages
   * @type {Array} an array of image URLs
   * @example
   * [
   *     "https://images.dog.ceo/breeds/terrier-scottish/n02097298_7694.jpg",
   *     "https://images.dog.ceo/breeds/lhasa/n02098413_1137.jpg"
   * ]
   */
  const [dogImages, setDogImages] = useState([]);
  const [howManyDogs, setHowManyDogs] = useState(1); // set initial selected option

  // Solution 1

  // fetch function
  const fetchDogs = async (num) => {
    const res = await axios.get(
      `https://dog.ceo/api/breeds/image/random/${num}`
    );
    return res.data.message;
  };

  // handle select and dogImages state
  const handleChange = async (e) => {
    const dogNum = parseInt(e.target.value);
    setHowManyDogs(dogNum);
    const newDogImages = await fetchDogs(dogNum);
    setDogImages([...newDogImages]);
  };

  // on mount fetch and set initial image(s) 
  useEffect(() => {
    axios
      .get(`https://dog.ceo/api/breeds/image/random/${howManyDogs}`)
      .then((res) => {
        setDogImages([...dogImages, ...res.data.message]);
      });
  }, []);

  // Solution 2

  // useEffect(() => {
  //   axios
  //     .get(`https://dog.ceo/api/breeds/image/random/${howManyDogs}`)
  //     .then((res) => {
  //       setDogImages([...res.data.message]);
  //     });
  // }, [howManyDogs]);

  // const handleChange = (e) => {
  //   setHowManyDogs(parseInt(e.target.value));
  // };

  return (
    <div className="App">
      <h1>Dogs</h1>
      <select value={howManyDogs.toString()} onChange={handleChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <div className="container">
        {dogImages.map((dogImage, idx) => {
          return (
            <img
              key={`dog-${idx}`}
              height="200"
              src={dogImage}
              alt={"placeholder"}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
