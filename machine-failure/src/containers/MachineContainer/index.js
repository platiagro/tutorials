import React from 'react';
import { connect } from 'react-redux';

import MachineContent from '../../components/MachineContent';

import { disconnect, selectMachine } from '../../store/actions';

const mapDispatchToProps = (dispatch) => {
  return {
    handleDisconnect: () =>
      dispatch(disconnect()),
      handleChangeMachine: (machine) =>
      dispatch(selectMachine(machine))
  };
};

const mapStateToProps = (state) => {
  return {
    selectedMachine: state.selectedMachine,
    isConnected: state.isConnected,
    score: state.score,
  };
};

const MachineContainer = (props) => {
  const { isConnected, selectedMachine, score, handleDisconnect, handleChangeMachine } = props;

  return (
    <MachineContent
      isConnected={isConnected}
      machine={selectedMachine}
      score={score}
      onDisconnect={handleDisconnect}
      onChangeMachine={handleChangeMachine}
    />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MachineContainer);
