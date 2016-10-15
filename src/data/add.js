import {isUndefined} from 'lodash';

import store from '../store';

// Add item to cart
export default function(item) {
  if (!item.name) {
    throw new Error('A name is required for each item added.');
  }

  if (isUndefined(item.cost)) {
    throw new Error('A cost is required for each item added.');
  }

  if (isUndefined(item.id)) {
    throw new Error('An id is required for each item added.');
  }

  store.dispatch({
    type: 'ADD_ITEM',
    item
  });
}
