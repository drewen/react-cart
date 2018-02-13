import {map} from 'lodash';
import React from 'react';
import CartItem from './cartItem';
import { clear } from '../index'

const Cart = props => {
  const {items, total} = props;

  const itemDisplay = map(items, (item, index) =>
    <CartItem key={index} index={index} {...item} />
  );

  return (
    <div className="__react-cart">
      <div className="__react-cart-items">
        {itemDisplay}
      </div>
      <div className="__react-cart-total">
        <div className="__react-cart-total-label">Total</div>
        <div className="__react-cart-total-amount">
          {total && Number(total).toFixed(2)}
        </div>
        <div className="__react-cart-total-clear">
          <button onClick={clear}>Clear</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;