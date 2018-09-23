/**
 *
 * SimpleTable
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function SimpleTable() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

SimpleTable.propTypes = {};

export default SimpleTable;
