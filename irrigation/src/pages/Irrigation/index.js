import React from "react";

import "./style.scss";
import { Layout } from "antd";

import IrrigationHeader from "../../components/IrrigationHeader";
import IrrigationContainer from "../../containers/IrrigationContainer";

const { Header, Content } = Layout;

const Irrigation = () => {
  return (
    <>
      <Header>
        <IrrigationHeader />
      </Header>
      <Layout className="irrigation-container">
        <Content className="irrigation-wrapper">
          <IrrigationContainer />
        </Content>
      </Layout>
    </>
  );
};

export default Irrigation;
