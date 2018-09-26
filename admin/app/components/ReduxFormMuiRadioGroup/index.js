/**
 *
 * ReduxFormMuiRadioGroup
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import RadioGroup from '@material-ui/core/RadioGroup'

function ReduxFormMuiRadioGroup({ input, ...rest }) {
  return (
    <RadioGroup
      {...input}
      {...rest}
      onChange={(event, value) => input.onChange(value)}
    />
  );
}

ReduxFormMuiRadioGroup.propTypes = {};

export default ReduxFormMuiRadioGroup;
