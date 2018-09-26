/**
 *
 * ReduxFormMuiCheckBox
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function ReduxFormMuiCheckBox({ input, label }) {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={input.value ? true : false}
          onCheck={input.onChange}
        />
      }
      label={label}
    />
  );
}

ReduxFormMuiCheckBox.propTypes = {};

export default ReduxFormMuiCheckBox;
