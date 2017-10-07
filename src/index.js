import * as actionCreators from './store/action-creators';
import {getTotal, getItems} from './store/selectors';
import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import CartContainer from './components/cartContainer';
import store from './store';

// Get all information about items in the cart
export const cart = () => getItems(store.getState());
export default cart;

// Get total cost of all items in cart
export const total = () => getTotal(store.getState());

// Clear all items from cart
export const clear = () => store.dispatch(actionCreators.clear());

// Add item to cart
export const add = (item) => store.dispatch(actionCreators.add(item));

// Remove item from cart
export const remove = (query) => store.dispatch(actionCreators.remove(query));

export const component = () => {
  return (
    <Provider store={store}>
      <CartContainer />
    </Provider>
  );
};

export const mount = (element) => {
  return ReactDOM.render(component(), element);
};
