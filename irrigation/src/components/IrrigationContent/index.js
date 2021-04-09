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
              <div className="white-box no-padding" style={{marginTop: "40px"}}>
                <div className="white-box-header">
                  Linhas de irrigação
                </div>

                <div className="white-box-content">
                  <IrrigationLines />
                </div>
              </div>
            </Col>
            {/* <Col span={8}>
              <RealPrecipitation />
            </Col> */}
          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <div className="white-box no-padding" style={{marginTop: "40px", height: 200}}>
                <div className="white-box-header">
                  Legenda | <span className="blueish">Volume de água</span>
                </div>

                <div className="white-box-content">
                  <WaterVolumeLegendContainer />
                </div>
              </div>
            </Col>
            <Col span={8}>
              <div className="white-box no-padding" style={{marginTop: "40px", height: 200}}>
                <div className="white-box-header">
                  Quantidade mínima para acionar o regador
                </div>

                <div className="white-box-content">
                  <IrrigationSwitchContainer />
                </div>
              </div>
            </Col>
            <Col span={8}>
              <div className="white-box no-padding" style={{marginTop: "40px", height: 200}}>
                <div className="white-box-header">
                  Previsão do tempo
                </div>

                <div className="white-box-content">
                  <PrecipitationProbaContainer />
                </div>
              </div>
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
