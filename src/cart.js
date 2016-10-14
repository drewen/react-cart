import {sumBy} from 'lodash';

let myCart = [];

// Get all information about items in the cart
export function cart() {
  return myCart
}
export default cart;


// Empty all items from cart
export function cartClear() {
  myCart = [];
}

// Get total cost of all items in cart
export function cartTotal() {
  const stringTotal = sumBy(myCart, 'cost').toFixed(2);
  return parseFloat(stringTotal);
}
