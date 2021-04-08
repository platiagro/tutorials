import React from "react";
import { connect } from "react-redux";

import PrecipitationProba from "../../components/PrecipitationProba";

const mapStateToProps = (state) => {
  return {
    precipitationProba: state.precipitationProba,
  };
};

const PrecipitationProbaContainer = (props) => {
  const { precipitationProba } = props;

  return (
    <PrecipitationProba value={precipitationProba} />
  );
};

export default connect(
  mapStateToProps,
)(PrecipitationProbaContainer);
