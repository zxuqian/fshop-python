/**
 *
 * ListItems
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function ListItems() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

ListItems.propTypes = {};

export default ListItems;
