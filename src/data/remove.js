import {isUndefined, findIndex} from 'lodash';
import cartModule from './cart';

export default function(query) {
  const myCart = cartModule();
  if (!isUndefined(query.index) && query.index < myCart.length) {
    return myCart.splice(query.index, 1);
  } else if (!isUndefined(query.id)) {
    const itemIndex = findIndex(myCart, {id: query.id});
    if (itemIndex < myCart.length && itemIndex >= 0) {
      return myCart.splice(itemIndex, 1);
    }
  }

  throw new Error('Cannot remove an item not in the cart.');
}
