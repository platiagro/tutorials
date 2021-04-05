import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

import { Button, Form, Input, Modal } from "antd";

class ConfigModal extends React.Component {
  state = {
    url: "",
    isModalVisible: false,
  };

  showModal = () => {
    this.setState({ isModalVisible: true });
  };

  setUrl = (e) => {
    this.setState({ url: e.target.value });
  };

  handleOk = () => {
    this.setState({ isModalVisible: false });
    this.props.onSubmit(this.state.url);
  };

  handleCancel = () => {
    this.setState({ isModalVisible: false });
  };

  render() {
    const { isModalVisible } = this.state;
    const { theme } = this.props;
    const layout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
    };
    return (
      <>
        <Modal
          title="Informar URL do fluxo implantado na PlatIAgro"
          width={600}
          visible={isModalVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="OK"
          cancelText="Cancelar"
          okButtonProps={{ className: theme }}
        >
          <Form {...layout} name="url">
            <Form.Item label="URL" name="url">
              <Input
                placeholder="https://xx.xx.xx.xx"
                onChange={this.setUrl}
                onPressEnter={this.handleOk}
              />
            </Form.Item>
          </Form>
        </Modal>

        <div className="center-box">
          <h1>Conecte este dashboard à PlatIAgro</h1>
          <p>Informe a URL do fluxo implantado na PlatIAgro</p>
          <Button className={theme} onClick={this.showModal}>
            Informar
          </Button>
        </div>
      </>
    );
  }
}

ConfigModal.propTypes = {
  theme: PropTypes.string,
  url: PropTypes.string,
  sensor: PropTypes.string,
  machine: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default ConfigModal;
