import { takeLatest, call, put, select } from 'redux-saga/effects';
import { FETCH_PRODUCTS } from './constants';
import request from 'utils/request';
import { productsFetched, productsFetchingError } from './actions';

// Individual exports for testing
export default function* products() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(FETCH_PRODUCTS, getProducts);
}

export function* getProducts() {
  const requestURL = `/api/products`;
  
  try {
    const products = yield call(request, requestURL);
    yield put(productsFetched(products));
  } catch (error) {
    yield put(productsFetchingError(error));
  }
}
