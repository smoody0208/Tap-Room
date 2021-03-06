import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, brand, price, alcoholContent, id } = action;
  switch (action.type) {
  case c.ADD_TAP:
    return Object.assign({}, state, {
      [id]: {
        name: name,
        brand: brand,
        price: price,
        alcoholContent: alcoholContent,
        id: id
      }
    });
    case c.DELETE_TAP:
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};