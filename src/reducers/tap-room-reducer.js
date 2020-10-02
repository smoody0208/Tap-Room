export default (state = {}, action) => {
  const { name, brand, price, alcoholContent, id } = action;
  switch (action.type) {
  case 'ADD_TAP':
    return Object.assign({}, state, {
      [id]: {
        name: name,
        brand: brand,
        price: price,
        alcoholContent: alcoholContent,
        id: id
      }
    });
  default:
    return state;
  }
};