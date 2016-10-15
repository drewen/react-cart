import store from '../store';

// Get all information about items in the cart
export function cart() {
  return store.getState().items;
}
export default cart;

// Empty all items from cart
export function cartClear() {
  store.dispatch({
    type: 'CLEAR'
  });
}

// Get total cost of all items in cart
export function cartTotal() {
  return store.getState().total;
}
