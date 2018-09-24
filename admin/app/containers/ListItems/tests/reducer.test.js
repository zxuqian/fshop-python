import { fromJS } from 'immutable';
import listItemsReducer from '../reducer';

describe('listItemsReducer', () => {
  it('returns the initial state', () => {
    expect(listItemsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
