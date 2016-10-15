import {cart, cartTotal} from '../../src/data/cart';
import {expect} from 'chai';

describe('data:cart', () => {
  it('should return the empty cart', () => {
    expect(cart()).to.deep.equal([]);
  });

  it('should total an empty cart', () => {
    expect(cartTotal()).to.equal(0);
  });
});