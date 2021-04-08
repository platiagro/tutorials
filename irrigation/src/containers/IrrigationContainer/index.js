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
  };
};

const IrrigationContainer = (props) => {
  const { isConnected } = props;
  const { handleDisconnect } = props;

  return (
    <IrrigationContent
      isConnected={isConnected}
      onDisconnect={handleDisconnect}
    />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(IrrigationContainer);
