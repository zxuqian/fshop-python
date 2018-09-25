/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

// material ui
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// import HomePage from 'containers/HomePage/Loadable';
import Header from 'components/Header';
import Drawer from 'components/Drawer';
import DashboardPage from 'containers/DashboardPage/Loadable';
import ProductPage from 'containers/ProductPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    // padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
  },
});

class App extends React.Component {
  state = {
    open: true,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <Header open={this.state.open} handleDrawerOpen={this.handleDrawerOpen} />
          <Drawer open={this.state.open} handleDrawerClose={this.handleDrawerClose} />
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Switch>
              <Route exact path="/" component={DashboardPage} />
              <Route exact path="/products" component={ProductPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
