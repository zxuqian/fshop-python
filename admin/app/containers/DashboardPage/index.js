/**
 *
 * DashboardPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectDashboardPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

// Router
import { Switch, Route } from 'react-router-dom';

// material ui
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles';

import SimpleLineChart from 'containers/SimpleLineChart/Loadable';
import SimpleTable from 'containers/SimpleTable/Loadable';

// JSS
const styles = theme => ({
  chartContainer: {
    marginLeft: -22,
  },
  tableContainer: {
    height: 320,
  },
});

/* eslint-disable react/prefer-stateless-function */
export class DashboardPage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Typography variant="display1" gutterBottom>
          Orders
        </Typography>
        <Typography component="div" className={classes.chartContainer}>
          <SimpleLineChart />
        </Typography>
        <Typography variant="display1" gutterBottom>
          Products
        </Typography>
        <div className={classes.tableContainer}>
          <SimpleTable />
        </div>
      </React.Fragment>
    );
  }
}

DashboardPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  dashboardpage: makeSelectDashboardPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'dashboardPage', reducer });
const withSaga = injectSaga({ key: 'dashboardPage', saga });

export default compose(
  withStyles(styles),
  withReducer,
  withSaga,
  withConnect,
)(DashboardPage);
