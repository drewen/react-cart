import getCart, * as cart from '../../src/data/cart';
import {expect} from 'chai';

describe('cart', () => {
  beforeEach(() => {
    cart.cartClear();
  });

  it('should return the empty cart', () => {
    // Run as the default function
    expect(getCart()).to.deep.equal([]);
    // Also run as a named function
    expect(cart.cart()).to.deep.equal([]);
  });

  it('should total an empty cart', () => {
    expect(cart.cartTotal()).to.equal(0);
  });
});