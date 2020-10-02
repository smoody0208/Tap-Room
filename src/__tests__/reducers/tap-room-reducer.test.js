import tapRoomReducer from '../../reducers/tap-room-reducer';

describe('tapRoomReducer', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(tapRoomReducer({}, { type: null })).toEqual({});
  });
});