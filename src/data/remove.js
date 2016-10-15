import {isUndefined} from 'lodash';

import store from '../store';

export default function(query) {
  const {id, index} = query;

  if (isUndefined(index) && isUndefined(id)) {
    throw new Error('An index or id is required to remove an item.');
  }

  store.dispatch({
    type: 'REMOVE_ITEM',
    id,
    index
  });
}
