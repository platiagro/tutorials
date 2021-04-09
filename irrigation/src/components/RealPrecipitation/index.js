import React from "react";
import "./style.scss";

import { Col, Row, Typography } from "antd";

import MicroclimateSensorContainer from "../../containers/MicroclimateSensorContainer";

const { Text } = Typography;

const RealPrecipitation = () => {
  return (
    <>
      <Text strong>Precipitação real</Text>
      <br/>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <MicroclimateSensorContainer name={"M1"} />
        </Col>
        <Col span={6} offset={3}>
          <MicroclimateSensorContainer name={"M2"} />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <MicroclimateSensorContainer name={"M3"} />
        </Col>
        <Col span={6} offset={3}>
          <MicroclimateSensorContainer name={"M4"} />
        </Col>
      </Row>
    </>
  );
};

RealPrecipitation.propTypes = {};

export default RealPrecipitation;
