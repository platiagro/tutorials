import React from "react";
import { connect } from "react-redux";

import FruitsContent from "../../components/FruitsContent";

import { disconnect, selectFruit } from "../../store/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    handleDisconnect: () =>
      dispatch(disconnect()),
    handleFruitSelect: (fruits) =>
      dispatch(selectFruit(fruits)),
  };
};

const mapStateToProps = (state) => {
  return {
    isConnected: state.isConnected,
    selectedFruits: state.selectedFruits,
    predictionList: state.predictionList,
  };
};

const FruitsContainer = (props) => {
  const { isConnected, selectedFruits, predictionList } = props;
  const { handleDisconnect, handleFruitSelect } = props;

  return (
    <FruitsContent
      isConnected={isConnected}
      selectedFruits={selectedFruits}
      predictionList={predictionList}
      onDisconnect={handleDisconnect}
      onFruitSelect={handleFruitSelect}
    />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FruitsContainer);
