import {sumBy} from 'lodash';

// Get all information about items in the cart
export const getItems = (state) => {
  return state.items;
};

export const getTotal = (state) => {
  const stringTotal = sumBy(state.items, 'cost').toFixed(2);
  return parseFloat(stringTotal);
};
