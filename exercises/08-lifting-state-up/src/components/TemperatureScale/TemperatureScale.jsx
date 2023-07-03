import PropTypes from "prop-types";

const TemperatureScale = ({ setScale }) => {
  return (
    <div className="btn-group" role="group" aria-label="Convert temperature">
      <button className="btn btn-outline-primary" onClick={() => setScale("F")}>
        Fahrenheit
      </button>
      <button className="btn btn-outline-primary" onClick={() => setScale("C")}>
        Celsius
      </button>
    </div>
  );
};

TemperatureScale.propTypes = {
  setScale: PropTypes.func.isRequired,
};

export default TemperatureScale;
