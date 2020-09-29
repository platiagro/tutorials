import React from 'react';
import { connect } from 'react-redux';

import MeasuresChart from '../../components/MeasuresChart';

const mapStateToProps = (state) => {
  return {
    sensorData: state.sensorData,
  };
};

const MeasuresChartContainer = (props) => {
  const { sensorData } = props;

  return (
    <MeasuresChart
      data={sensorData}
    />
  );
};

export default connect(
  mapStateToProps,
)(MeasuresChartContainer);
