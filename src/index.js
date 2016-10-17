import cartModule, {cartClear, cartTotal} from './data/cart';
import addModule from './data/add';
import removeModule from './data/remove';
import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import CartContainer from './components/CartContainer';
import store from './store';

// Get all information about items in the cart
export const cart = cartModule;

export default cartModule;

// Clear all items from cart
export const clear = cartClear;

// Get total cost of all items in cart
export const total = cartTotal;

// Add item to cart
export const add = addModule;

// Remove item from cart
export const remove = removeModule;

export const mount = (element) => {
  return ReactDOM.render(
    <Provider store={store}>
      <CartContainer />
    </Provider>,
    element
  );
};

export const component = () => {
  return (
    <Provider store={store}>
      <CartContainer />
    </Provider>
  );
}