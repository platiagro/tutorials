
import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

import { Button } from "antd";

import LatestPricesChart from "../LatestPricesChart";

const FruitBox = (props) => (
  <div className={`white-box ${props.name === "Nome da fruta" ? "disabled" : "" }`}>
    <div className="white-box-title">Preço estimado</div>
    <div className="white-box-name">{props.name}</div>
    <div className="white-box-price">{props.price}</div>
    <div className="white-box-chart">
      {props.data && props.data.labels && <LatestPricesChart data={props.data} />}
    </div>
    <div className="white-box-divider"></div>
    <Button disabled>Negociar</Button>
  </div>
);

FruitBox.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
};

export default FruitBox;
