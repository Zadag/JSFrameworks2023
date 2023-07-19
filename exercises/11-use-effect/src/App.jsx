import { useState, useEffect } from "react";
import "./App.css";
import ronSwansonImage from "./assests/ronswanson.png";
import axios from "axios";

function App() {
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  /**
   * Make an AJAX call with the useEffect hook
   */
  useEffect(() => {
    setTimeout(() => {
      axios
        .get("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
        .then((res) => {
          const quote = res.data[0];
          setQuote(quote);
        })
        .catch((err) => setError(err))
        .finally(setIsLoading(false));
    }, 1000);
  }, []);

  return (
    <body class="bg-warning text-center">
      <img src={ronSwansonImage} alt="" width="450" height="423" class="mt-4" />
      <div class="container">
        {isLoading ? <p>...Loading</p> : null}
        {error ? <p>Something went wrong</p> : null}
        <blockquote
          id="quote"
          class="blockquote bg-dark text-white border-0 mb-4"
        >
          {quote}
        </blockquote>
      </div>
    </body>
  );
}

export default App;
