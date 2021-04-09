import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

import { Button, Col, Row } from "antd";

const PrecipitationProba = (props) => {
  const { value } = props;
  return (
    <>
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
