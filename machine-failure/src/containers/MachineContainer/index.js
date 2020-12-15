import React from 'react';
import { connect } from 'react-redux';

import MachineContent from '../../components/MachineContent';

import { disconnect } from '../../store/actions';

const mapDispatchToProps = (dispatch) => {
  return {
    handleDisconnect: () =>
      dispatch(disconnect()),
  };
};

const mapStateToProps = (state) => {
  return {
    isConnected: state.isConnected,
    score: state.score,
  };
};

const MachineContainer = (props) => {
  const { isConnected, score, handleDisconnect } = props;

  return (
    <MachineContent
      isConnected={isConnected}
      machine='Minerva'
      score={score}
      onDisconnect={handleDisconnect}
    />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MachineContainer);
