import React from "react";

import "./style.scss";
import { Layout } from "antd";

import FruitsHeader from "../../components/FruitsHeader";
import FruitsContainer from "../../containers/FruitsContainer";

const { Header, Content } = Layout;

const Fruits = () => {
  return (
    <>
      <Header>
        <FruitsHeader />
      </Header>
      <Layout className="fruits-container">
        <Content className="fruits-wrapper">
          <FruitsContainer />
        </Content>
      </Layout>
    </>
  );
};

export default Fruits;
