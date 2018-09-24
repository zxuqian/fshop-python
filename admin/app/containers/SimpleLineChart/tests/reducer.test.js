import { fromJS } from 'immutable';
import simpleLineChartReducer from '../reducer';

describe('simpleLineChartReducer', () => {
  it('returns the initial state', () => {
    expect(simpleLineChartReducer(undefined, {})).toEqual(fromJS({}));
  });
});
