import React from "react";
import "./style.scss";

import { Col, Row } from "antd";

import IrrigationSystem from "../IrrigationSystem";
import MicroclimateSensor from "../MicroclimateSensor";

const IrrigationLines = () => {
  return (
    <div style={{margin: "40px 0"}}>
      <Row className="irrigation-line" justify="space-around" gutter={[0, 16]}>
        <Col flex="none">
          <IrrigationSystem volume={3} />
        </Col>
        <Col flex="none">
          <IrrigationSystem volume={6} />
        </Col>
        <Col flex="none">
          <IrrigationSystem volume={8} />
        </Col>
        <Col flex="none">
          <IrrigationSystem volume={11} />
        </Col>
        <Col flex="none">
          <IrrigationSystem volume={15} />
        </Col>
        <Col flex="none">
          <IrrigationSystem volume={18} />
        </Col>
      </Row>
      <Row justify="center" gutter={[16, 16]}>
        <Col span={4}>
          <MicroclimateSensor name="M1" />
        </Col>
        <Col span={4}>
          <MicroclimateSensor name="M2" />
        </Col>
      </Row>
      <Row className="irrigation-line" justify="space-around" gutter={[0, 16]}>
        <Col flex="none">
          <IrrigationSystem volume={3} />
        </Col>
        <Col flex="none">
          <IrrigationSystem volume={6} />
        </Col>
        <Col flex="none">
          <IrrigationSystem volume={8} />
        </Col>
        <Col flex="none">
          <IrrigationSystem volume={11} />
        </Col>
        <Col flex="none">
          <IrrigationSystem volume={15} />
        </Col>
        <Col flex="none">
          <IrrigationSystem volume={18} />
        </Col>
      </Row>
      <Row justify="center" gutter={[16, 16]}>
        <Col span={4}>
          <MicroclimateSensor name="M3" />
        </Col>
        <Col span={4}>
          <MicroclimateSensor name="M4" />
        </Col>
      </Row>
      <Row className="irrigation-line" justify="space-around" gutter={[0, 16]}>
        <Col flex="none">
          <IrrigationSystem volume={3} />
        </Col>
        <Col flex="none">
          <IrrigationSystem volume={6} />
        </Col>
        <Col flex="none">
          <IrrigationSystem volume={8} />
        </Col>
        <Col flex="none">
          <IrrigationSystem volume={11} />
        </Col>
        <Col flex="none">
          <IrrigationSystem volume={15} />
        </Col>
        <Col flex="none">
          <IrrigationSystem volume={18} />
        </Col>
      </Row>
    </div>
  );
};

IrrigationLines.propTypes = {};

export default IrrigationLines;
