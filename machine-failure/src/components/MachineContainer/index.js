import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import { Layout } from 'antd';

import MachineHeader from '../MachineHeader';
import MachineContent from '../MachineContent';

const { Header, Content } = Layout;

const MachineContainer = (props) => {
  const { data } = props;
  return (
    <>
      <Header>
        <MachineHeader />
      </Header>
      <Layout className='machine-container'>
        <Content className='machine-wrapper'>
          <MachineContent data={data} />
        </Content>
      </Layout>
    </>
  );
};

MachineContainer.propTypes = {
  data: PropTypes.array
};

export default MachineContainer;
