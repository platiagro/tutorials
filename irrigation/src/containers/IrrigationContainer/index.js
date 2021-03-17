import React from "react";
import { connect } from "react-redux";

import IrrigationContent from "../../components/IrrigationContent";

import { disconnect } from "../../store/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    handleDisconnect: () =>
      dispatch(disconnect()),
  };
};

const mapStateToProps = (state) => {
  return {
    isConnected: state.isConnected,
    predictionList: state.predictionList,
  };
};

const IrrigationContainer = (props) => {
  const { isConnected, predictionList } = props;
  const { handleDisconnect } = props;

  return (
    <IrrigationContent
      isConnected={isConnected}
      predictionList={predictionList}
      onDisconnect={handleDisconnect}
    />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(IrrigationContainer);
