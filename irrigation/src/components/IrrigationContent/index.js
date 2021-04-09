import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

import { Button, Col, Form, Row } from "antd";

import ConfigModalContainer from "../../containers/ConfigModalContainer";
import IrrigationSwitchContainer from "../../containers/IrrigationSwitchContainer";
import WaterVolumeLegendContainer from "../../containers/WaterVolumeLegendContainer";
import PrecipitationProbaContainer from "../../containers/PrecipitationProbaContainer";

import IrrigationLines from "../IrrigationLines";
// import RealPrecipitation from "../RealPrecipitation";

const IrrigationContent = (props) => {
  const { isConnected } = props;
  const { onDisconnect } = props;

  return (
    <>
      {!isConnected ? (
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
            <Col span={24}>
              <IrrigationLines />
            </Col>
            {/* <Col span={8}>
              <RealPrecipitation />
            </Col> */}
          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <WaterVolumeLegendContainer />
            </Col>
            <Col span={8}>
              <IrrigationSwitchContainer />
            </Col>
            <Col span={8}>
              <PrecipitationProbaContainer />
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

IrrigationContent.propTypes = {
  isConnected: PropTypes.bool,
  onDisconnect: PropTypes.func,
};

export default IrrigationContent;
