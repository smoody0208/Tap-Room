import tapRoomReducer from '../../reducers/tap-room-reducer';
import * as c from './../../actions/ActionTypes';

describe('tapRoomReducer', () => {

  const currentState = {
    1: {
      name: 'RICH and RARE',
      brand: 'Blended Canadian Whisky',
      price: '$20',
      alcoholContent: '80 proof',
      id: 1
    },
    2: {
      name: 'Hangar 1 Vodka',
      brand: 'Straight Vodka ',
      price: '$30',
      alcoholContent: '80 proof',
      id: 2
    }
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(tapRoomReducer({}, { type: null })).toEqual({});
  })
  let action;
  const tapData = {
    name: 'Rich and Rare Canadian Whiskey',
    brand: 'Whiskey',
    price: '$20',
    alcoholContent: '80 proof',
    id: 1
  };

    test('Should successfully add new ticket data to masterTapList', () => {
      const { name, brand, price, alcoholContent, id } = tapData;
      action = {
        type: c.ADD_TAP,
        name: name,
        brand: brand,
        price: price,
        alcoholContent: alcoholContent,
        id: id
      };
  
      expect(tapRoomReducer({}, action)).toEqual({
        [id] : {
          name: name,
          brand: brand,
          price: price,
          alcoholContent: alcoholContent,
          id: id
        }
      });
    });    

      test('Should successfully delete a tap', () => {
      action = {
        type: c.DELETE_TAP,
        id: 1
    };
    expect(tapRoomReducer(currentState, action)).toEqual({
      2: { 
      name: 'Hangar 1 Vodka',
      brand: 'Straight Vodka ',
      price: '$30',
      alcoholContent: '80 proof',
      id: 2
    }
    });
  });

});