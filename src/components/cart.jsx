import {map} from 'lodash';
import React from 'react';
import CartItem from './cartItem';

const Cart = props => {
  const {items, total} = props;

  const itemDisplay = map(items, (item, index) =>
    <CartItem key={index} {...item} />
  );

  return (
    <div className="__react-cart">
      <div className="__react-cart-items">
        {itemDisplay}
      </div>
      <div className="__react-cart-total">
        {total}
      </div>
    </div>
  );
}

export default Cart;