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
import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';

// redux form
import { Field, reduxForm } from 'redux-form/immutable'; // Important! Because we are using ImmutableJS
import ReduxFormMuiTextField from 'components/ReduxFormMuiTextField';
import ReduxFormMuiCheckBox from 'components/ReduxFormMuiCheckBox';
import ReduxFormMuiRadioGroup from 'components/ReduxFormMuiRadioGroup';
import ReduxFormMuiSelectField from 'components/ReduxFormMuiSelectField';

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

  handleSubmit = (values) => {
    console.log(values);
  }

  render() {
    const { classes, products, handleSubmit } = this.props;
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
          <form onSubmit={handleSubmit(this.handleSubmit)} className={classes.form} noValidate autoComplete="off">
            <Field
              id="standard-name"
              name="title"
              label="Title"
              className={classes.textField}
              margin="normal"
              component={ReduxFormMuiTextField}
            />
            <Field
              id="standard-uncontrolled"
              name="description"
              label="Description"
              className={classes.textField}
              margin="normal"
              component={ReduxFormMuiTextField}
            />
            <Field
              required
              id="standard-required"
              name="details"
              label="Details"
              className={classes.textField}
              margin="normal"
              component={ReduxFormMuiTextField}
            />
            <Field
              error
              id="standard-error"
              name="price"
              label="Price"
              className={classes.textField}
              margin="normal"
              component={ReduxFormMuiTextField}
            />
            <Field 
              className={classes.textField}
              label="Category"
              // multiple
              name="category"
              inputProps={{
                name: 'category'
              }}
              component={ReduxFormMuiSelectField}
            >
              <MenuItem value="test">test</MenuItem>
            </Field>
            <Button type="submit" variant="contained" color="primary">Submit</Button>
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
const withReduxForm = reduxForm({
  form: 'ProductForm'
})

export default compose(
  withStyles(styles),
  withReduxForm,
  withReducer,
  withSaga,
  withConnect,
)(ProductPage);
