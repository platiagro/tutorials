import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

import { Row, Col, Button, Select, Form } from "antd";

import ConfigModalContainer from "../../containers/ConfigModalContainer";
import FruitBox from "../../components/FruitBox";
import AggregatePricesChartContainer from "../../containers/AggregatePricesChartContainer";

import fruits from "../../fruits_mock";

const fruitIndexList = fruits.map(fruit => {
  return fruits.indexOf(fruit);
});

const { Option } = Select;

const FruitsContent = (props) => {
  const { isConnected, selectedFruits, predictionList } = props;
  const { onDisconnect, onFruitSelect } = props;

  const priceList = fruitIndexList.map(index => {
    if (predictionList[index].length > 0) {
      return predictionList[index][predictionList[index].length - 1].Preco.toFixed(2).replace(".", ",");
    } else {
      return "??";
    }
  });

  const predictionData = fruitIndexList.map(index => {
    return {
      labels: predictionList[index].slice(-15).map(data => data.find(d => /\d+-\d+-\d/.test(d))),
      datasets: [{
        data: predictionList[index].slice(-15).map(p => p),
        fill: true,
        backgroundColor: "#975fe4",
        borderColor: "#975fe4",
        pointBackgroundColor: "rgba(0,0,0,0.0)",
        pointBorderColor: "rgba(0,0,0,0.0)"
      }]
    };
  });

  return (
    <>
      {!isConnected ? (
        <ConfigModalContainer theme="green" />
      ) : (
        <>
          <Form layout="inline">
            <Form.Item label="Frutas">
              <Select
                mode="multiple"
                style={{ width: 800 }}
                placeholder="Selecione"
                value={selectedFruits}
                onChange={onFruitSelect}
              >
                {fruits.map((fruit) => (
                  <Option key={fruit}>{fruit}</Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item style={{ float: "right", margin: 0 }}>
              <Button className="green" onClick={onDisconnect}>
                Redefinir URL
              </Button>
            </Form.Item>
          </Form>
          <Row>
            <Col span={6}>
              <FruitBox
                name={selectedFruits.length > 0 ? selectedFruits[0] : "Nome da fruta"}
                price={priceList.length > 0 ? priceList[0] : "0,00" }
                data={predictionData.length > 0 ? predictionData[0] : []}
              />
            </Col>
            <Col span={6}>
              <FruitBox
                name={selectedFruits.length > 1 ? selectedFruits[1] : "Nome da fruta"}
                price={priceList.length > 1 ? priceList[1] : "0,00" }
                data={predictionData.length > 1 ? predictionData[1] : []}
              />
            </Col>
            <Col span={6}>
              <FruitBox
                name={selectedFruits.length > 2 ? selectedFruits[2] : "Nome da fruta"}
                price={priceList.length > 2 ? priceList[2] : "0,00" }
                data={predictionData.length > 2 ? predictionData[2] : []}
              />
            </Col>
            <Col span={6}>
              <FruitBox
                name={selectedFruits.length > 3 ? selectedFruits[3] : "Nome da fruta"}
                price={priceList.length > 3 ? priceList[3] : "0,00" }
                data={predictionData.length > 3 ? predictionData[3] : []}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div className="white-box no-padding" style={{ height: 400 }}>
                <div className="white-box-header">
                  Valor Agregado
                </div>
                <div className="white-box-content">
                  <AggregatePricesChartContainer />
                </div>
              </div>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

FruitsContent.propTypes = {
  isConnected: PropTypes.bool,
  selectedFruits: PropTypes.arrayOf(PropTypes.string),
  dataList: PropTypes.arrayOf(PropTypes.array),
  predictionList: PropTypes.arrayOf(PropTypes.array),
  onFruitSelect: PropTypes.func,
  onDisconnect: PropTypes.func,
};

export default FruitsContent;
