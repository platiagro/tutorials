import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import { Row, Col, Button, Modal, Input, Select, Form, message } from 'antd';

import UrlInput from '../UrlInput';
import MeasuresChart from '../MeasuresChart';
import FailureChart from '../FailureChart';
import machines from './machines_mock';

import { post } from '../../services/api';

const { Option } = Select;

class MachineContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: '',
      isModalVisible: false,
      machine: 'Aquiles',
      machineIndex: 0,
      score: '',
      measuresData: {},
      failureData: {}
    };
    this.dataList = new Array(machines.length).fill(null).map(n => []);
    this.predictionList = new Array(machines.length).fill(null).map(n => []);
  }

  async componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  showModal = () => {
    this.setState({ isModalVisible: true });
  };

  handleOk = () => {
    this.setState({ isModalVisible: false });
    this.handleUrlSet(this.state.url);
  }

  handleCancel = () => {
    this.setState({ isModalVisible: false });
  }

  handleUrlSet = (url) => {
    const { data } = this.props;

    this.setState({ url: url });

    if (this.interval) {
      clearInterval(this.interval);
    }

    this.dataList = new Array(machines.length).fill(null).map(n => []);
    this.predictionList = new Array(machines.length).fill(null).map(n => []);

    let i = 0;
    let date = data[i]["Data"];
    this.postData(url, date);
    // Finds next date
    while (++i < data.length) {
      if (data[i]["Data"] !== date) {
        date = data[i]["Data"];
        break;
      }
    }

    // Every 4 seconds, sends data from a date for prediction
    this.interval = setInterval(() => {
      this.postData(url, date);
      // Finds next date
      while (++i < data.length) {
        if (data[i]["Data"] !== date) {
          date = data[i]["Data"];
          break;
        }
      }
      // After all data has been sent,
      // resets counter and starts all over again
      if (i === data.length) {
        i = 0;
        date = data[i]["Data"];
      }
    }, 4000);
  }

  handleMachineSelected = (machine) => {
    this.setState({ machine: machine, machineIndex: machines.indexOf(machine) });
  }

  async postData(url, date) {
    const { data } = this.props;
    const ndarray = data.filter(d => d["Data"] === date).map(Object.values);
    const names = Object.keys(data[0]);
    const response = await post(
      url, {
      'data': {
        'ndarray': ndarray,
        'names': names
      }
    });
    if (response.status === 200) {
      ndarray.forEach((arr, idx) => {
        const machineIndex = machines.findIndex(machine => machine === arr[3]);
        this.dataList[machineIndex].push(arr);
        this.predictionList[machineIndex].push(response.data.data.ndarray[idx]);
      });

      const failureData = { datasets: [] };

      const colors = [
        ['rgba(224, 162, 22, 0.1)', 'rgba(224, 162, 22, 0.3)', 'rgba(224, 162, 22, 0.5)', 'rgba(224, 162, 22, 0.7)', 'rgba(224, 162, 22, 1.0)'],
        ['rgba(46, 184, 166, 0.1)', 'rgba(46, 184, 166, 0.3)', 'rgba(46, 184, 166, 0.5)', 'rgba(46, 184, 166, 0.7)', 'rgba(46, 184, 166, 1.0)'],
        ['rgba(0, 148, 173, 0.1)', 'rgba(0, 148, 173, 0.3)', 'rgba(0, 148, 173, 0.5)', 'rgba(0, 148, 173, 0.7)', 'rgba(0, 148, 173, 1.0)'],
        ['rgba(250, 126, 25, 0.1)', 'rgba(250, 126, 25, 0.3)', 'rgba(250, 126, 25, 0.5)', 'rgba(250, 126, 25, 0.7)', 'rgba(250, 126, 25, 1.0)']
      ];
      const yesIndex = response.data.data.names.findIndex(n => n === 'Sim');
      machines.forEach((machine, machineIndex) => {
        failureData.datasets.push({
          label: machine,
          backgroundColor: colors[machineIndex % colors.length],
          borderColor: 'rgba(0, 0, 0, 0.0)',
          data: this.predictionList[machineIndex].slice(-5).map(prediction => {
            const y = prediction[yesIndex];
            const r = 155*y**3 - 268*y**2 + 150*y + 12.5;
            return { x: machineIndex + 1, y: y, r: r }
          })
        })
      });

      let score = this.state.score;
      let measuresData = this.state.measuresData;
      if (this.state.machineIndex > -1) {
        const machineData = this.dataList[this.state.machineIndex];
        measuresData = { labels: [], datasets: [] };
        measuresData.labels = ["Vibração 1","Vibração 2","Vibração 3","Vibração 4","Vibração 5","Vibração 6"];
        if (machineData.length > 0) {
          measuresData.datasets.push({
            label: 'Medidas de Vibração',
            backgroundColor: '#0094AD',
            borderColor: '#0094AD',
            borderWidth: 1,
            data: machineData[machineData.length - 1].slice(4, 10)
          });
        }
        const prediction = this.predictionList[this.state.machineIndex];
        if (prediction.length > 0) {
          score = prediction[prediction.length - 1][yesIndex].toFixed(2).replace('.', ',');
        }
      }

      this.setState({
        score: score,
        measuresData: measuresData,
        failureData: failureData
      });
    } else {
      message.error('Não foi possível acessar a URL informada.');
    }
  }

  render() {
    const { url, isModalVisible, machine, measuresData, failureData } = this.state;
    return (
      <>
        {url === '' ? (
          <UrlInput theme='orange' onUrlSet={this.handleUrlSet} />
        ) : (
            <>
              <Modal
                title='Informar URL'
                width={600}
                visible={isModalVisible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                okText='OK'
                cancelText='Cancelar'
                okButtonProps={{ className: 'orange' }}
              >
                <Input placeholder='URL' onChange={e => this.setState({url: e.target.value})} value={url} onPressEnter={this.handleOk} />
              </Modal>

              <Form layout='inline'>
                <Form.Item label='Máquinas'>
                  <Select
                    style={{ width: 300 }}
                    placeholder='Selecione'
                    value={machine}
                    onChange={this.handleMachineSelected}>
                    {machines.map((machine) => (
                      <Option key={machine}>{machine}</Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item style={{ float: 'right', margin: 0 }}>
                  <Button className='orange' style={{ width: 100 }} onClick={this.showModal}>URL</Button>
                </Form.Item>
              </Form>
              <Row gutter={16}>
                <Col span={6}>
                  <div className='white-box no-padding'>
                    <div className='white-box-header'>Máquina | <span className='blue'>{this.state.machine}</span></div>

                    <div className='white-box-content'>
                      <Button shape='circle' className='score'>
                        {this.state.score}
                      </Button>

                      <div className='text-center'>probabilidade de falha</div>
                    </div>
                  </div>
                </Col>
                <Col span={18}>
                  <div className='white-box no-padding'>
                    <div className='white-box-header'>Medidas de vibração | <span className='blue'>{this.state.machine}</span></div>
                    <div className='white-box-content'>
                      <MeasuresChart data={measuresData} />
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <div className='white-box no-padding' style={{height: 400}}>
                    <div className='white-box-header'>Probabilidade de falha  | <span className='blue'>Todas as máquinas</span></div>
                    <div className='white-box-content'>
                      <FailureChart data={failureData} />
                    </div>
                  </div>
                </Col>
              </Row>
            </>
          )}
      </>
    );
  }
}

MachineContent.propTypes = {
  data: PropTypes.array
};

export default MachineContent;
