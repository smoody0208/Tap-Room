import tapRoomReducer from '../../reducers/tap-room-reducer';

import ticketListReducer from '../../reducers/ticket-list-reducer';

describe('tapRoomReducer', () => {

  let action;
  const ticketData = {
    name: 'Rich and Rare Canadian Whiskey',
    brand: 'Whiskey',
    price: '$20',
    alcoholContent: '80 proof',
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(tapRoomReducer({}, { type: null })).toEqual({});
  });
});