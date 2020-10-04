import * as actions from './../../actions';

describe('tap actions', () => {
  it('deleteTap should create DELETE_TAP action', () => {
    expect(actions.deleteTap(1)).toEqual({
      type: 'DELETE_TAP',
      id: 1
    });
  });
});