import {isUndefined} from 'lodash';
import {ADD_ITEM, REMOVE_ITEM, CLEAR} from './actions';

export const add = (item) => {
  if (!item.name) {
    throw new Error('A name is required for each item added.');
  }

  if (isUndefined(item.cost)) {
    throw new Error('A cost is required for each item added.');
  }

  if (isUndefined(item.id)) {
    throw new Error('An id is required for each item added.');
  }

  return {
    type: ADD_ITEM,
    item
  };
}

export const remove = (query) => {
  const {id, index} = query;

  if (isUndefined(index) && isUndefined(id)) {
    throw new Error('An index or id is required to remove an item.');
  }

  return {
    type: REMOVE_ITEM,
    id,
    index
  };
}

export const clear = () => {
  return {
    type: CLEAR
  };
}
