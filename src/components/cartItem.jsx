import React from 'react';
import { remove } from '../index';

const CartItem = props => {
  const {name, id, cost, index} = props

  return (
    <div className="__react-cart-item">
      <div className="__react-cart-item-name">{name}</div>
      <div className="__react-cart-item-cost">{Number(cost).toFixed(2)}</div>
      <div className="__react-cart-item-remove"><button onClick={() => remove({index})}>Remove</button></div>
    </div>
  );
}

export default CartItem;