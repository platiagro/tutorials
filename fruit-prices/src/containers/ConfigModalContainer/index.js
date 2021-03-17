import React from 'react';
import { connect } from 'react-redux';

import ConfigModal from '../../components/ConfigModal';

import { setConfig } from '../../store/actions';

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (url, sensor, machine) =>
      dispatch(setConfig(url, sensor, machine)),
  };
};

const mapStateToProps = (state) => {
  return {
    url: state.url,
    sensor: state.sensor,
    machine: state.machine,
  };
};

const ConfigModalContainer = (props) => {
  const { url, sensor, theme } = props;
  const { handleSubmit } = props;

  return (
    <ConfigModal
      theme={theme}
      url={url}
      sensor={sensor}
      onSubmit={handleSubmit}
    />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConfigModalContainer);
