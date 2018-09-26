/**
 *
 * ReduxFormMuiTextField
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import TextField from '@material-ui/core/TextField';

function ReduxFormMuiTextField({
  input,
  // label,
  meta: { touched, error },
  ...custom
}) {
  return (
    <TextField
      helperText={touched && error}
      {...input}
      {...custom}
    />
  );
}

ReduxFormMuiTextField.propTypes = {};

export default ReduxFormMuiTextField;
