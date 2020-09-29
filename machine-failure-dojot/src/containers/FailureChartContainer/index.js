import React from 'react';
import { connect } from 'react-redux';

import FailureChart from '../../components/FailureChart';

const mapStateToProps = (state) => {
  return {
    machineData: state.machineData,
  };
};

const FailureChartContainer = (props) => {
  const { machineData } = props;

  return (
    <FailureChart
      data={machineData}
    />
  );
};

export default connect(
  mapStateToProps,
)(FailureChartContainer);
