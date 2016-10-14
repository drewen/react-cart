import {isUndefined} from 'lodash';

import myCart from './cart';

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

  myCart().push(item);
}
