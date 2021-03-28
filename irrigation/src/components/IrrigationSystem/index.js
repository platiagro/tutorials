import React from "react";
import PropTypes from "prop-types";

import { Button } from "antd";

const IrrigationSystem = (props) => {
  const { volume } = props;

  let type = "danger";

  if (volume < 5) {
    type = "secondary";
  } else if (volume < 7) {
    type = "green";
  } else if (volume < 10) {
    type = "primary";
  } else if (volume < 14) {
    type = "warning";
  }

  return (
    <Button type={type} shape="circle" size="large" {...props}><strong>{volume}L</strong></Button>
  );
};

IrrigationSystem.propTypes = {
  volume: PropTypes.number.isRequired,
};

export default IrrigationSystem;
