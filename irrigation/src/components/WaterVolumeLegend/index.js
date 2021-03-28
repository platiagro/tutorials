import React from "react";

import { Slider, Typography } from "antd";

const { Text } = Typography;

const marks = {
  0: {
    style: {
      color: '#000',
    },
    label: <strong>0L</strong>,
  },
  5: {
    style: {
      color: '#52c41a',
    },
    label: <strong>5L</strong>,
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

const WaterVolumeLegend = () => {
  return (
    <>
      <Text strong>Volume de água</Text>
      <br/>
      <Slider disabled marks={marks} step={null} max={14} defaultValue={14} />
    </>
  );
};

WaterVolumeLegend.propTypes = {
};

export default WaterVolumeLegend;
