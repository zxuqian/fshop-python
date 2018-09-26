/*
 *
 * ProductPage actions
 *
 */

import { DEFAULT_ACTION, FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR, FETCH_CATEGORIES, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_ERROR } from './constants';

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

// Categories
export function fetchCategories() {
  return {
    type: FETCH_CATEGORIES,
  }
}

export function categoriesFetched(categories) {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    categories,
  }
}

export function categoriesFetchingError(error) {
  return {
    type: FETCH_CATEGORIES_ERROR,
    error
  }
}