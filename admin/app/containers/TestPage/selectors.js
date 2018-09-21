import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the testPage state domain
 */

const selectTestPageDomain = state => state.get('testPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by TestPage
 */

const makeSelectTestPage = () =>
  createSelector(selectTestPageDomain, substate => substate.toJS());

export default makeSelectTestPage;
export { selectTestPageDomain };
