import {
  useState,
  ChangeEvent,
  FormEvent,
  SetStateAction,
  Dispatch,
} from "react";
// import something here
import { useNavigate } from "react-router-dom";
// import Axios (or use Fetch)
import axios from "axios";

interface ISignIn {
  setJwt: Dispatch<SetStateAction<string>>;
}

interface ILoginResponse {
  token: string;
}

function SignIn({ setJwt }: ISignIn) {
  const navigate = useNavigate();
  /**
   * User input
   */
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  /**
   * Handling AJAX loading and errors
   */
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  /**
   * Complete all the logging in and logout logic
   */

  /**
   * If the user is logged in, you should render the <Home /> component instead.
   */

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    // make request to backend for jwt
    // store that jwt in state or context?
    // route the user to the appropriate page
    e.preventDefault();
    setIsLoading(true);
    console.log("before fetch");
    try {
      const response = await axios<ILoginResponse>(
        "http://localhost:7001/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            username,
            password,
          },
        }
      );
      /**
       * Needed for TypeScript. Checking that the token is there.
       */
      if (!response.data.token) {
        throw new Error("Missing access token in login response");
      }
      /**
       * I'm telling React the user is logged in by store the token in state.
       * If I was using localStorage, I would also store the token in localStorage too
       * @example localStorage.setItem("token", response.data.token);
       */
      setJwt(response.data.token);
      setUsername("");
      // send user to Movie page
      navigate("/home");
    } catch (error) {
      console.error(error);
      console.log("test");
      /**
       * If the response returns an HTTP status of 401 when loggin in,
       * this means that username or password is incorrect.
       */
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        setErrorMessage("Invalid username or password");
      } else setErrorMessage("We are sorry, unexpected error occurred.");
    }

    setPassword("");
    setIsLoading(false);
  };

  const logout = () => {
    setJwt("");
  };

  return (
    <div className="container mt-2 mb-5">
      <h1>Login</h1>
      {/* Handle form submission */}
      <form
        className="form-inline mb-2"
        method="POST"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="form-group">
          <label htmlFor="username" className="mr-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="form-control mr-3"
            required={true}
            value={username}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUsername(e.target.value)
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="mr-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control mr-3"
            required={true}
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          Login
        </button>
      </form>
      <p className="form-text">
        <small>
          The username is <em>username</em> and the password is{" "}
          <em>password</em>
        </small>
      </p>
      {isLoading && <p>Loading ...</p>}
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
    </div>
  );
}

export default SignIn;
