import React from "react";
import { connect } from "react-redux";

import MicroclimateSensor from "../../components/MicroclimateSensor";

const mapStateToProps = (state, ownProps) => {
  return {
    name: ownProps.name,
    precipitationData: state.precipitationData,
  };
};

const nameToIndex = {
  "M1": 0,
  "M2": 1,
  "M3": 2,
  "M4": 3,
};

const MicroclimateSensorContainer = (props) => {
  const { name, precipitationData } = props;

  const index = nameToIndex[name];

  return (
    <MicroclimateSensor name={name} value={precipitationData[index]} />
  );
};

export default connect(
  mapStateToProps,
)(MicroclimateSensorContainer);
