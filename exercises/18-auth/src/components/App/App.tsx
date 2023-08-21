import { useState, ChangeEvent } from "react";
// import something here
import { Routes, Route } from "react-router-dom";
// import Axios (or use Fetch)
import axios from "axios";
import Home from "../Home/Home";
import SignIn from "../SignIn/SignIn";

interface ILoginResponse {
  token: string;
}

function App() {
  const [jwt, setJwt] = useState("");

  const logout = () => {
    setJwt("");
  };
  /**
   * Complete all the logging in and logout logic
   */

  /**
   * If the user is logged in, you should render the <Home /> component instead.
   */

  return (
    <Routes>
      <Route path="/home" element={<Home token={jwt} logout={logout} />} />
      <Route path="/search" element={<SignIn setJwt={setJwt} />} />
    </Routes>
  );
}

export default App;
