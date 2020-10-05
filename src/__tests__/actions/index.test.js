import * as actions from './../../actions';

describe('tap actions', () => {
  it('deleteTap should create DELETE_TAP action', () => {
    expect(actions.deleteTap(1)).toEqual({
      type: 'DELETE_TAP',
      id: 1
    });
  });
  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });
  it('addTap should create ADD_TAP action', () => {
    expect(actions.addTap({name: 'Rich and Rare Canadian Whiskey', brand: 'Whiskey', price: '$20', alcoholContent: '80 proof', id: 1})).toEqual({
      type: 'ADD_TAP',
      name: 'Rich and Rare Canadian Whiskey',
      brand: 'Whiskey',
      price: '$20',
      alcoholContent: '80 proof',
      id: 1
    });
  });
});