import React from "react";
import PropTypes from "prop-types";

import { Slider, Typography } from "antd";

const { Text } = Typography;

const marks = {
  0: {
    style: {
      color: '#000',
    },
    label: <strong>0L</strong>,
  },
  1: {
    style: {
      color: '#000',
    },
    label: <strong>1L</strong>,
  },
  2: {
    style: {
      color: '#000',
    },
    label: <strong>2L</strong>,
  },
  3: {
    style: {
      color: '#000',
    },
    label: <strong>3L</strong>,
  },
  4: {
    style: {
      color: '#000',
    },
    label: <strong>4L</strong>,
  },
  5: {
    style: {
      color: '#000',
    },
    label: <strong>5L</strong>,
  },
};

const IrrigationSwitch = (props) => {
  const { irrigationMinimum } = props;
  const { onChange } = props;

  return (
    <>
      <Text strong>Quantidade mínima para acionar o regador</Text>
      <br/>
      <Slider
        value={irrigationMinimum}
        min={0}
        max={5}
        marks={marks}
        onChange={onChange}
      />
    </>
  );
};

IrrigationSwitch.propTypes = {
  irrigationMinimum: PropTypes.number,
  onChange: PropTypes.func,
};

export default IrrigationSwitch;

