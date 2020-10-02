import tapRoomReducer from '../../reducers/tap-room-reducer';

describe('tapRoomReducer', () => {

  let action;
  const tapData = {
    name: 'Rich and Rare Canadian Whiskey',
    brand: 'Whiskey',
    price: '$20',
    alcoholContent: '80 proof',
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(tapRoomReducer({}, { type: null })).toEqual({});
  })


    test('Should successfully add new ticket data to masterTapList', () => {
      const { name, brand, price, alcoholContent, id } = tapData;
      action = {
        type: 'ADD_TAP',
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
  
  });  