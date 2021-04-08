import React from "react";
import PropTypes from "prop-types";

import { Slider, Typography } from "antd";

const { Text } = Typography;

const WaterVolumeLegend = (props) => {
  const { irrigationMinimum } = props;

  const marks = {
    0: {
      style: {
        color: '#000',
      },
      label: <strong>0L</strong>,
    },
    7: {
      style: {
        color: '#1890ff',
      },
      label: <strong>7L</strong>,
    },
    10: {
      style: {
        color: '#faad14',
      },
      label: <strong>10L</strong>,
    },
    14: {
      style: {
        color: '#ff4d4f',
      },
      label: <strong>&gt;14L</strong>,
    },
  };
  marks[irrigationMinimum] = {
    style: {
      color: '#52c41a',
    },
    label: <strong>{irrigationMinimum}L</strong>,
  };

  return (
    <>
      <Text strong>Volume de água</Text>
      <Slider disabled marks={marks} step={null} max={14} defaultValue={14} />
    </>
  );
};

WaterVolumeLegend.propTypes = {
  irrigationMinimum: PropTypes.number,
};

export default WaterVolumeLegend;
