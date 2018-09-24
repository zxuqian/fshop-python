import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the listItems state domain
 */

const selectListItemsDomain = state => state.get('listItems', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ListItems
 */

const makeSelectListItems = () =>
  createSelector(selectListItemsDomain, substate => substate.toJS());

export default makeSelectListItems;
export { selectListItemsDomain };
