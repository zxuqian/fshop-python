import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the simpleLineChart state domain
 */

const selectSimpleLineChartDomain = state =>
  state.get('simpleLineChart', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by SimpleLineChart
 */

const makeSelectSimpleLineChart = () =>
  createSelector(selectSimpleLineChartDomain, substate => substate.toJS());

export default makeSelectSimpleLineChart;
export { selectSimpleLineChartDomain };
