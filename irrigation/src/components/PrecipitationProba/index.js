import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

import { Button, Col, Row, Typography } from "antd";

const { Text } = Typography;

const PrecipitationProba = (props) => {
  const { value } = props;
  return (
    <>
      <Row>
        <Col>
          <Text strong>Previsão do tempo</Text>
        </Col>
      </Row>
      <Row>
        <Col>
        <Button>
          {value * 100}% de chance de precipitação
        </Button>
        </Col>
      </Row>
    </>
  );
};

PrecipitationProba.propTypes = {
  value: PropTypes.number,
};

export default PrecipitationProba;
