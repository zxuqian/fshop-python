/**
 *
 * SimpleLineChart
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function SimpleLineChart() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

SimpleLineChart.propTypes = {};

export default SimpleLineChart;
