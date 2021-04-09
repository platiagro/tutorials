import React from "react";
import "./style.scss";

import { Col, Row } from "antd";

import SprinklerContainer from "../../containers/SprinklerContainer";
import MicroclimateSensorContainer from "../../containers/MicroclimateSensorContainer";

const IrrigationLines = () => {
  return (
      <div className="irrigation-field">
        <Row className="irrigation-line" justify="space-around" gutter={[0, 16]}>
          <Col flex="none">
            <SprinklerContainer index={0} />
          </Col>
          <Col flex="none">
            <SprinklerContainer index={1} />
          </Col>
          <Col flex="none">
            <SprinklerContainer index={2} />
          </Col>
          <Col flex="none">
            <SprinklerContainer index={3} />
          </Col>
          <Col flex="none">
            <SprinklerContainer index={4} />
          </Col>
          <Col flex="none">
            <SprinklerContainer index={5} />
          </Col>
        </Row>
        <Row justify="center" gutter={[0, 16]}>
          <Col span={3}>
            <MicroclimateSensorContainer name="M1" />
          </Col>
          <Col span={3} offset={6}>
            <MicroclimateSensorContainer name="M2" />
          </Col>
        </Row>
        <Row className="irrigation-line" justify="space-around" gutter={[0, 16]}>
          <Col flex="none">
            <SprinklerContainer index={6} />
          </Col>
          <Col flex="none">
            <SprinklerContainer index={7} />
          </Col>
          <Col flex="none">
            <SprinklerContainer index={8} />
          </Col>
          <Col flex="none">
            <SprinklerContainer index={9} />
          </Col>
          <Col flex="none">
            <SprinklerContainer index={10} />
          </Col>
          <Col flex="none">
            <SprinklerContainer index={11} />
          </Col>
        </Row>
        <Row justify="center" gutter={[0, 16]}>
          <Col span={3}>
            <MicroclimateSensorContainer name="M3" />
          </Col>
          <Col span={3} offset={6}>
            <MicroclimateSensorContainer name="M4" />
          </Col>
        </Row>
        <Row className="irrigation-line" justify="space-around" gutter={[0, 16]}>
          <Col flex="none">
            <SprinklerContainer index={12} />
          </Col>
          <Col flex="none">
            <SprinklerContainer index={13} />
          </Col>
          <Col flex="none">
            <SprinklerContainer index={14} />
          </Col>
          <Col flex="none">
            <SprinklerContainer index={15} />
          </Col>
          <Col flex="none">
            <SprinklerContainer index={16} />
          </Col>
          <Col flex="none">
            <SprinklerContainer index={17} />
          </Col>
        </Row>
      </div>
  );
};

IrrigationLines.propTypes = {};

export default IrrigationLines;
