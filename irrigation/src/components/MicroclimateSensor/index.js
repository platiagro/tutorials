import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const MicroclimateSensor = (props) => {
  const { name, value } = props;

  return (
    <div className="microclimate-sensor">
      <strong>{name}</strong>
      {value.toFixed(2).replace(".", ",")}L
    </div>
  );
};

MicroclimateSensor.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number,
};

export default MicroclimateSensor;
