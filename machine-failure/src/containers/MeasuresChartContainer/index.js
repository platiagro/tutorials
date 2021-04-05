import React from 'react';
import { connect } from 'react-redux';

import MeasuresChart from '../../components/MeasuresChart';

import machines from '../../machines_mock';

const mapStateToProps = (state) => {
  return {
    sensorData: state.sensorData[machines.indexOf(state.selectedMachine)],
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
