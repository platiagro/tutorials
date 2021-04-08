import React from "react";
import { connect } from "react-redux";

import IrrigationSwitch from "../../components/IrrigationSwitch";

import { setIrrigationMinimum } from "../../store/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeIrrigationSwitch: (value) =>
      dispatch(setIrrigationMinimum(value)),
  };
};

const mapStateToProps = (state) => {
  return {
    irrigationMinimum: state.irrigationMinimum,
  };
};

const IrrigationSwitchContainer = (props) => {
  const { irrigationMinimum } = props;
  const { handleChangeIrrigationSwitch } = props;


  return (
    <IrrigationSwitch
      irrigationMinimum={irrigationMinimum}
      onChange={handleChangeIrrigationSwitch}
    />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(IrrigationSwitchContainer);
