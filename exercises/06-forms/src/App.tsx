import "./App.css";
// Import here
import React from "react";
import { useState } from "react";
import states from "./assets/states.json";
import countries from "./assets/countries.json";

type SubmitEventParam = React.MouseEvent<HTMLButtonElement>;
type ChangeEventParam =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLSelectElement>;

function App(): React.ReactNode {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    addressLine1: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    signUpForNewsLetter: false,
  });

  //const [checked, setChecked] = useState(false);
  const [showValues, setShowValues] = useState(false);

  const handleSubmit = (e: SubmitEventParam) => {
    e.preventDefault();
    formIsValid() ? setShowValues(true) : setShowValues(false);
  };

  const handleChange = (e: ChangeEventParam) => {
    // if target is checkbox we need to toggle a boolean instead of changing text
    if (e.target.name === "signUpForNewsLetter") {
      return setValues({
        ...values,
        signUpForNewsLetter: !values.signUpForNewsLetter,
      });
    }

    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const formIsValid = () => {
    return true;
  };

  return (
    <form className="container mt-4" method="POST">
      {/* You will need to handle form submission */}
      <div className="mb-3">
        <label htmlFor="firstName" className="control-label">
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          className="form-control"
          value={values.firstName}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="control-label">
          Last Name
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          className="form-control"
          value={values.lastName}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="addressLine1" className="control-label">
          Address Line 1
        </label>
        <input
          id="addressLine1"
          name="addressLine1"
          type="text"
          className="form-control"
          value={values.addressLine1}
          onChange={(e) => handleChange(e)}
        />
        <p className="help-block text-muted">
          Street Address, P.O. Box, Company Name, C/O
        </p>
      </div>

      <div className="mb-3">
        <label htmlFor="city" className="control-label">
          City / Town
        </label>
        <input
          id="city"
          name="city"
          type="text"
          className="form-control"
          value={values.city}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="state" className="control-label">
          State / Province / Region
        </label>
        {/* Loop through the states you imported here */}
        <select
          id="state"
          name="state"
          className="form-control"
          value={values.state}
          onChange={(e) => handleChange(e)}
        >
          <option selected hidden disabled></option>
          {states.map((state, index) => {
            return (
              <option key={`idx-${index}`} value={state}>
                {state}
              </option>
            );
          })}
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="postalCode" className="control-label">
          Zip / Postal Code
        </label>
        <input
          id="postalCode"
          name="postalCode"
          type="number"
          className="form-control"
          value={values.postalCode}
          onChange={(e) => handleChange(e)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="country" className="control-label">
          Country
        </label>
        {/* Loop through the countries you imported here */}
        <select
          id="country"
          name="country"
          className="form-control"
          value={values.country}
          onChange={(e) => handleChange(e)}
        >
          <option selected hidden disabled></option>
          {countries.map((country, index) => {
            return (
              <option key={`idx-${index}`} value={country}>
                {country}
              </option>
            );
          })}
        </select>
      </div>
      <div className="mb-3 form-check">
        <input
          id="signUpForNewsLetter"
          name="signUpForNewsLetter"
          type="checkbox"
          className="form-check-input"
          checked={values.signUpForNewsLetter}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="signUpForNewsLetter" className="form-check-label">
          Sign Up For Newsletter
        </label>
      </div>
      <button
        onClick={(e) => handleSubmit(e)}
        type="submit"
        className="btn btn-primary"
      >
        Submit
      </button>

      {/*
       * Find a way to only display this once the form has been submitted.
       * Hint: You will need to change "false" below with something else
       */}
      {showValues && (
        <div className="card card-body bg-light mt-4 mb-4">
          Results:
          <ul className="list-unstyled mb-0">
            {Object.entries(values).map((value, index) => {
              return <li key={`idx-${index}`}>{value[1].toString()}</li>;
            })}
          </ul>
        </div>
      )}
    </form>
  );
}

export default App;
