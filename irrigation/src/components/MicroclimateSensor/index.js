import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

import microclimateSensor from "../../assets/microclimateSensor.png";

import { Tooltip } from "antd";

const MicroclimateSensor = (props) => {
  const { precipitation, insolation, humidity } = props;

  const precipitationFormatted = precipitation?.toFixed(2).replace(".", ",");

  return (
    <Tooltip title={(
      <>
        Sensor de microclima
        {precipitation && (
          <>
            <br/>
            precipitação: {precipitationFormatted}L
          </>
        )}
        {insolation && (
          <>
            <br/>
            insolação: {insolation}
          </>
        )}
        {humidity && (
          <>
            <br/>
            umidade do ar: {humidity}
          </>
        )}
      </>
      )}>
      <div className="microclimate-sensor">
        <img
          src={microclimateSensor}
          alt="Desenho de um sensor de microclima"
          style={{height: "96px", width: "96px"}}
        />
        {precipitation && (
          <strong>{precipitationFormatted}L</strong>
        )}
      </div>
    </Tooltip>
  );
};

MicroclimateSensor.propTypes = {
  name: PropTypes.string.isRequired,
  precipitation: PropTypes.any,
  insolation: PropTypes.any,
  humidity: PropTypes.any,
};

export default MicroclimateSensor;
