import React from "react";
import "./style.scss";

import { Col, Row, Typography } from "antd";

import MicroclimateSensor from "../MicroclimateSensor";

const { Text } = Typography;

const RealPrecipitation = () => {
  return (
    <>
      <Text strong>Precipitação real</Text>
      <br/>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <MicroclimateSensor name={"M1"} />
        </Col>
        <Col span={12}>
          <MicroclimateSensor name={"M2"} />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <MicroclimateSensor name={"M3"} />
        </Col>
        <Col span={12}>
          <MicroclimateSensor name={"M4"} />
        </Col>
      </Row>
    </>
  );
};

RealPrecipitation.propTypes = {
};

export default RealPrecipitation;
