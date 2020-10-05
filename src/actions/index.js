export const deleteTap = id => ({
  type: 'DELETE_TAP',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addTap = (tap) => {
  const { name, brand, price, alcoholContent, id } = tap;
  return {
    type: 'ADD_TAP',
    name: name,
    brand: brand,
    price: price,
    alcoholContent: alcoholContent,
    id: id
  }
}