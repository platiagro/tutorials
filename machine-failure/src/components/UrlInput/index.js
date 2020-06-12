import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import { Button, Modal, Input } from 'antd';

class UrlInput extends React.Component {
  state = {
    url: '',
    isModalVisible: false
  };

  showModal = () => {
    this.setState({ isModalVisible: true });
  };

  setUrl = (e) => {
    this.setState({ url: e.target.value })
  }

  handleOk = () => {
    this.setState({ isModalVisible: false });
    this.props.onUrlSet(this.state.url);
  }

  handleCancel = () => {
    this.setState({ isModalVisible: false });
  }

  render() {
    const { isModalVisible } = this.state;
    const { theme } = this.props;
    return (
      <>
        <Modal
          title='Informar URL'
          width={600}
          visible={isModalVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText='OK'
          cancelText='Cancelar'
          okButtonProps={{className: theme}}
        >
          <Input placeholder='URL' onChange={this.setUrl} onPressEnter={this.handleOk} />
        </Modal>

        <div className='center-box'>
          <h1>URL do fluxo</h1>
          <p>Informe a URL do fluxo gerada na implantação</p>
          <Button
            className={theme}
            onClick={this.showModal}>
            Informar URL
          </Button>
        </div>
      </>
    );
  }
}


UrlInput.propTypes = {
  onUrlSet: PropTypes.func,
  theme: PropTypes.string
};

export default UrlInput;
