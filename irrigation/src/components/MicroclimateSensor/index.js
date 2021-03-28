import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

import { } from "antd";

const MicroclimateSensor = (props) => {
  const { name } = props;

  return (
    <div className="microclimate-sensor">
      <strong>{name}</strong>
    </div>
  );
};

MicroclimateSensor.propTypes = {
  name: PropTypes.string.isRequired,
};

export default MicroclimateSensor;
