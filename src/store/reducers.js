import {isUndefined, sumBy, findIndex, reject} from 'lodash';
import {ADD_ITEM, REMOVE_ITEM, CLEAR} from './actions';

const getTotal = (items) => {
  const stringTotal = sumBy(items, 'cost').toFixed(2);
  return parseFloat(stringTotal);
};

const initialState = {
  items: [],
  total: 0
};

const addItem = (state, action) => {
  const newItem = action.item;

  if (!newItem.name) {
    return state;
  }

  if (isUndefined(newItem.cost)) {
    return state;
  }

  if (isUndefined(newItem.id)) {
    return state;
  }

  const newItems = state.items.concat(newItem)

  return {
    items: newItems,
    total: getTotal(newItems)
  }
};

const removeItem = (state, action) => {
  const {items} = state;
  let foundIndex;

  if (!isUndefined(action.index) && action.index < items.length) {
    foundIndex = action.index;
  } else if (!isUndefined(action.id)) {
    const itemIndex = findIndex(items, {id: action.id});
    if (itemIndex < items.length && itemIndex >= 0) {
      foundIndex = itemIndex;
    }
  }

  if (!isUndefined(foundIndex)) {
    const newItems = reject(items, (value, index) => index === foundIndex);

    return {
      items: newItems,
      total: getTotal(newItems)
    }
  }

  return state;
};

const clearCart = (state, action) => {
  return initialState;
};

const reducers = {
  [ADD_ITEM]: addItem,

  [REMOVE_ITEM]: removeItem,

  [CLEAR]: clearCart
};


export default (state = initialState, action) => {

  const typeFunction = reducers[action.type];

  return typeFunction ? typeFunction(state, action) : state; 
}