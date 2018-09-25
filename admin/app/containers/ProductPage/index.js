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
import makeSelectProductPage, { makeSelectProducts } from './selectors';
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
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';

import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import { fetchProducts } from './actions';

const listWidth = 350;

const styles = theme => ({
  container: {
    position: 'fixed',
    top: theme.mixins.toolbar.minHeight,
    bottom: 0,
    display: 'flex',
    backgroundColor: theme.palette.background.paper,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  listPaper: {
    position: 'relative',
  },
  list: {
    // position: 'relative',
    flexShrink: 0,
    width: listWidth,
    maxWidth: listWidth,
    height: '100%',
  },
  form: {
    textAlign: 'center',
    marginTop: theme.spacing.unit * 2,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '30%',
  },
});

/* eslint-disable react/prefer-stateless-function */
export class ProductPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    const { classes, products } = this.props;
    return (
      // <Grid item xs={12} md={4}>
      <React.Fragment>
        {/* <Typography variant="title">
          Avatar with text and icon
        </Typography> */}
        <div className={classes.container}>
          <Paper elevation={8} className={classes.listPaper}>
            <List dense={false} className={classes.list}>
              {products.map(product => (
                <ListItem key={product.id}>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={product.title}
                    secondary={product.description}
                  />
                  <ListItemSecondaryAction>
                    <IconButton aria-label="Delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
            <Button
              variant="fab"
              color="primary"
              aria-label="Add"
              className={classes.fab}
            >
              <AddIcon />
            </Button>
          </Paper>
          <form className={classes.form} noValidate autoComplete="off">
            <TextField
              id="standard-name"
              label="Name"
              className={classes.textField}
              margin="normal"
            />
            <TextField
              id="standard-uncontrolled"
              label="Uncontrolled"
              defaultValue="foo"
              className={classes.textField}
              margin="normal"
            />
            <TextField
              required
              id="standard-required"
              label="Required"
              defaultValue="Hello World"
              className={classes.textField}
              margin="normal"
            />
            <TextField
              error
              id="standard-error"
              label="Error"
              defaultValue="Hello World"
              className={classes.textField}
              margin="normal"
            />
            <TextField
              disabled
              id="standard-disabled"
              label="Disabled"
              defaultValue="Hello World"
              className={classes.textField}
              margin="normal"
            />
            <TextField
              id="standard-password-input"
              label="Password"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
            />
            <TextField
              id="standard-read-only-input"
              label="Read Only"
              defaultValue="Hello World"
              className={classes.textField}
              margin="normal"
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              id="standard-dense"
              label="Dense"
              className={classNames(classes.textField, classes.dense)}
              margin="dense"
            />
            <TextField
              id="standard-multiline-flexible"
              label="Multiline"
              multiline
              rowsMax="4"
              className={classes.textField}
              margin="normal"
            />
            <TextField
              id="standard-multiline-static"
              label="Multiline"
              multiline
              rows="4"
              defaultValue="Default Value"
              className={classes.textField}
              margin="normal"
            />
            <TextField
              id="standard-helperText"
              label="Helper text"
              defaultValue="Default Value"
              className={classes.textField}
              helperText="Some important text"
              margin="normal"
            />
            <TextField
              id="standard-with-placeholder"
              label="With placeholder"
              placeholder="Placeholder"
              className={classes.textField}
              margin="normal"
            />
            <TextField
              id="standard-textarea"
              label="With placeholder multiline"
              placeholder="Placeholder"
              multiline
              className={classes.textField}
              margin="normal"
            />
            <TextField
              id="standard-number"
              label="Number"
              type="number"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
            />
            <TextField
              id="standard-search"
              label="Search field"
              type="search"
              className={classes.textField}
              margin="normal"
            />
            <TextField
              id="standard-bare"
              className={classes.textField}
              defaultValue="Bare"
              margin="normal"
            />
          </form>
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
  products: makeSelectProducts(),
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

const withReducer = injectReducer({ key: 'productPage', reducer });
const withSaga = injectSaga({ key: 'productPage', saga });

export default compose(
  withStyles(styles),
  withReducer,
  withSaga,
  withConnect,
)(ProductPage);
