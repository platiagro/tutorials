import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

import { Button, Col, Form, Row } from "antd";

import ConfigModalContainer from "../../containers/ConfigModalContainer";

import IrrigationLines from "../IrrigationLines";
import IrrigationSwitch from "../IrrigationSwitch";
import RealPrecipitation from "../RealPrecipitation";
import WaterVolumeLegend from "../WaterVolumeLegend";
import PrecipitationProba from "../PrecipitationProba";

const IrrigationContent = (props) => {
  const { isConnected } = props;
  const { onDisconnect } = props;

  return (
    <>
      {isConnected ? (
        <ConfigModalContainer theme="blue" />
      ) : (
        <>
          <Form layout="inline">
            <Form.Item style={{ float: "right", margin: 0 }}>
              <Button className="blue" onClick={onDisconnect}>
                Redefinir URL
              </Button>
            </Form.Item>
          </Form>
          <Row gutter={16}>
            <Col span={16}>
              <IrrigationLines />
            </Col>
            <Col span={8}>
              <RealPrecipitation />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <WaterVolumeLegend />
            </Col>
            <Col span={8}>
              <IrrigationSwitch />
            </Col>
            <Col span={8}>
              <PrecipitationProba />
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

IrrigationContent.propTypes = {
  isConnected: PropTypes.bool,
  predictionList: PropTypes.arrayOf(PropTypes.array),
  onDisconnect: PropTypes.func,
};

export default IrrigationContent;
