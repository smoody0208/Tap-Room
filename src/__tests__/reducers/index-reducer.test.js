import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import tapRoomReducer from '../../reducers/tap-room-reducer';


let store = createStore(rootReducer);
describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterTapList: {},
      formVisibleOnPage: false
    });
  });

  test('Check that initial state of tapRoomReducer matches root reducer', () => {
    const action = {
      type: 'ADD_TAP',
      name: 'Rich and Rare Canadian Whiskey',
      brand: 'Whiskey',
      price: '$20',
      alcoholContent: '80 proof',
      id: 1
    };
    store.dispatch(action);
    expect(store.getState().masterTapList).toEqual(tapRoomReducer(undefined, { type: null }));
  });
  
  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    const action = {
      type: 'TOGGLE_FORM'
    }
    store.dispatch(action);
    expect(store.getState().masterTapList).toEqual(formVisibleReducer(undefined, { type: null }));
  });

});