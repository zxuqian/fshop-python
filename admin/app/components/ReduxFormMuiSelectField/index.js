/**
 *
 * ReduxFormMuiSelectField
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

function ReduxFormMuiSelectField({
  input,
  label,
  className,
  meta: { touched, error },
  children,
  ...custom
}) {
  return (
    <FormControl className={className}>
      <InputLabel htmlFor={input.name}>{label}</InputLabel>
      <Select
        // floatingLabelText={label}
        helperText={touched && error}
        {...input}
        // onChange={(event, index, value) => {console.log(value); input.onChange(value)}}
        children={children}
        {...custom}
      />
    </FormControl>
  );
}

ReduxFormMuiSelectField.propTypes = {};

export default ReduxFormMuiSelectField;
