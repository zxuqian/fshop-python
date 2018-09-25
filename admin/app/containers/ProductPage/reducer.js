/*
 *
 * ProductPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
} from './constants';

export const initialState = fromJS({
  loading: false,
  error: false,
  products: [],
});

function productPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case FETCH_PRODUCTS:
      return state
        .set('loading', true)
        .set('error', false)
        .set('products', []);
    case FETCH_PRODUCTS_SUCCESS:
      return state.set('products', action.products).set('loading', false);
    case FETCH_PRODUCTS_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default productPageReducer;
