import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

import { Row, Col, Button, Select, Form, Skeleton } from "antd";

import ConfigModalContainer from "../../containers/ConfigModalContainer";
import MeasuresChartContainer from "../../containers/MeasuresChartContainer";
import FailureChartContainer from "../../containers/FailureChartContainer";

import machines from "./machines_mock";

const { Option } = Select;

const MachineContent = (props) => {
  const { isConnected, machine, score } = props;
  const { onDisconnect } = props;

  return (
    <>
      {!isConnected ? (
        <ConfigModalContainer theme="orange" />
      ) : (
        <>
          <Form layout="inline">
            <Form.Item label="Máquinas">
              <Select
                style={{ width: 300 }}
                placeholder="Selecione"
                value={machine}
              >
                {machines.map((machine) => (
                  <Option key={machine}>{machine}</Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item style={{ float: "right", margin: 0 }}>
              <Button className="orange" onClick={onDisconnect}>
                Redefinir URL e Dispositivos
              </Button>
            </Form.Item>
          </Form>
          <Row gutter={16}>
            <Col span={6}>
              <div className="white-box no-padding">
                <div className="white-box-header">
                  Máquina | <span className="blue">{machine}</span>
                </div>

                <div className="white-box-content">
                  {score ? (
                    <Button shape="circle" className="score">
                      {score}
                    </Button>
                  ) : (
                    <Skeleton active />
                  )}
                  <div className="text-center">probabilidade de falha</div>
                </div>
              </div>
            </Col>
            <Col span={18}>
              <div className="white-box no-padding">
                <div className="white-box-header">
                  Medidas de vibração | <span className="blue">{machine}</span>
                </div>
                <div className="white-box-content">
                  <MeasuresChartContainer />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div className="white-box no-padding" style={{ height: 400 }}>
                <div className="white-box-header">
                  Probabilidade de falha |{" "}
                  <span className="blue">Todas as máquinas</span>
                </div>
                <div className="white-box-content">
                  <FailureChartContainer />
                </div>
              </div>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

MachineContent.propTypes = {
  isConnected: PropTypes.bool,
  machine: PropTypes.string,
};

export default MachineContent;
