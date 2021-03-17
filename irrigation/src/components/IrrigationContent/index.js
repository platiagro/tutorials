import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

import { Button, Form } from "antd";

import ConfigModalContainer from "../../containers/ConfigModalContainer";

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
                Redefinir URL e Dispositivos
              </Button>
            </Form.Item>
          </Form>
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
