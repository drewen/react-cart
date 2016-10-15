import React from 'react';

const CartItem = props => {
  const {name, id, cost} = props

  return (
    <div className="__react-cart-item">
      <div className="__react-cart-item-name">{name}</div>
      <div className="__react-cart-item-cost">{cost}</div>
    </div>
  );
}

export default CartItem;