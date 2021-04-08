import React from "react";
import { connect } from "react-redux";

import Sprinkler from "../../components/Sprinkler";

const mapStateToProps = (state, ownProps) => {
  return {
    index: ownProps.index,
    predictionData: state.predictionData,
    irrigationMinimum: state.irrigationMinimum,
  };
};

const SprinklerContainer = (props) => {
  const { index, irrigationMinimum, predictionData } = props;

  let volume = 0;
  if (predictionData[index].length > 0) {
    volume = predictionData[index][predictionData[index].length - 1]?.score;
  }

  return (
    <Sprinkler
      volume={volume}
      irrigationMinimum={irrigationMinimum}
    />
  );
};

export default connect(
  mapStateToProps,
)(SprinklerContainer);
