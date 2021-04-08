import React from "react";
import { connect } from "react-redux";

import WaterVolumeLegend from "../../components/WaterVolumeLegend";

const mapStateToProps = (state) => {
  return {
    irrigationMinimum: state.irrigationMinimum,
  };
};

const WaterVolumeLegendContainer = (props) => {
  const { irrigationMinimum } = props;

  return (
    <WaterVolumeLegend irrigationMinimum={irrigationMinimum} />
  );
};

export default connect(
  mapStateToProps,
)(WaterVolumeLegendContainer);
