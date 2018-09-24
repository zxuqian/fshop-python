import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the simpleTable state domain
 */

const selectSimpleTableDomain = state => state.get('simpleTable', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by SimpleTable
 */

const makeSelectSimpleTable = () =>
  createSelector(selectSimpleTableDomain, substate => substate.toJS());

export default makeSelectSimpleTable;
export { selectSimpleTableDomain };
