import React from 'react';
import { connect } from 'react-redux';

import ConfigModal from '../../components/ConfigModal';

import { setConfig } from '../../store/actions';

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (url) =>
      dispatch(setConfig(url)),
  };
};

const mapStateToProps = (state) => {
  return {
    url: state.url,
  };
};

const ConfigModalContainer = (props) => {
  const { url, theme } = props;
  const { handleSubmit } = props;

  return (
    <ConfigModal
      theme={theme}
      url={url}
      onSubmit={handleSubmit}
    />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConfigModalContainer);
