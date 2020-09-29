import React from 'react';

import './style.scss';
import { Layout } from 'antd';

import MachineHeader from '../../components/MachineHeader';
import MachineContainer from '../../containers/MachineContainer';

const { Header, Content } = Layout;

const Machine = () => {
  return (
    <>
      <Header>
        <MachineHeader />
      </Header>
      <Layout className='machine-container'>
        <Content className='machine-wrapper'>
          <MachineContainer />
        </Content>
      </Layout>
    </>
  );
};

export default Machine;
