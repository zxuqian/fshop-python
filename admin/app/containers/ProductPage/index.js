/**
 *
 * ProductPage
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
import makeSelectProductPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

// material ui
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';

import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import { fetchProducts } from './actions';


function generate(element) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const listWidth = 350;

const styles = theme => ({
  listContainer: {
    position: 'fixed',
    top: theme.mixins.toolbar.minHeight,
    bottom: 0,
  },
  list: {
    // position: 'relative',
    width: listWidth,
    maxWidth: listWidth,
    height: '100%',
    backgroundColor: theme.palette.background.paper,
  }
});

/* eslint-disable react/prefer-stateless-function */
export class ProductPage extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    const {classes} = this.props;
    return (
      // <Grid item xs={12} md={4}>
      <React.Fragment>
        {/* <Typography variant="title">
          Avatar with text and icon
        </Typography> */}
        <div className={classes.listContainer}>
          <List dense={false} className={classes.list}>
            {generate(
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Single-line item"
                  secondary={'Secondary text'}
                />
                <ListItemSecondaryAction>
                  <IconButton aria-label="Delete">
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>,
            )}
          </List>
        </div>
        </React.Fragment>
      // </Grid>
    );
  }
}

ProductPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  productpage: makeSelectProductPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'productPage', reducer });
const withSaga = injectSaga({ key: 'productPage', saga });

export default compose(
  withStyles(styles),
  withReducer,
  withSaga,
  withConnect,
)(ProductPage);
