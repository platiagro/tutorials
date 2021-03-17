import React from "react";
import { connect } from "react-redux";

import AggregatePricesChart from "../../components/AggregatePricesChart";

const mapStateToProps = (state) => {
  return {
    predictionList: state.predictionList,
  };
};

const AggregatePricesChartContainer = (props) => {
  const { predictionList } = props;

  return (
    <AggregatePricesChart
      data={predictionList}
    />
  );
};

export default connect(
  mapStateToProps,
)(AggregatePricesChartContainer);
