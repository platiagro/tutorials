import React from "react";
import PropTypes from "prop-types";

import { Slider, Typography } from "antd";

const { Text } = Typography;

const IrrigationSwitch = (props) => {
  const { onChange } = props;

  return (
    <>
      <Text strong>Quantidade mínima para acionar o regador</Text>
      <br/>
      <Slider
        min={1}
        max={5}
        onChange={onChange}
      />
    </>
  );
};

IrrigationSwitch.propTypes = {
  onChange: PropTypes.func,
};

export default IrrigationSwitch;

