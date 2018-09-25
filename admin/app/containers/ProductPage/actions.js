/*
 *
 * ProductPage actions
 *
 */

import { DEFAULT_ACTION, FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function fetchProducts() {
  return {
    type: FETCH_PRODUCTS,
  }
}

export function productsFetched(products) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    products,
  }
}

export function productsFetchingError(error) {
  return {
    type: FETCH_PRODUCTS_ERROR,
    error
  }
}