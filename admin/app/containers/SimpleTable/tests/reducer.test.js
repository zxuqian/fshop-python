import { fromJS } from 'immutable';
import simpleTableReducer from '../reducer';

describe('simpleTableReducer', () => {
  it('returns the initial state', () => {
    expect(simpleTableReducer(undefined, {})).toEqual(fromJS({}));
  });
});
