import * as cart from '../src/index';
import remove from '../src/remove';
import {expect} from 'chai';

describe('remove', () => {
  beforeEach(() => {
    cart.clear();
  });

  it('should remove the only item', () => {
    const item = {
      id: 123,
      name: 'pencil',
      cost: 2.01
    };

    cart.add(item);
    cart.remove({id: 123});

    expect(cart.cart()).to.deep.equal([]);
    expect(cart.total()).to.equal(0);
  });

  it('should remove one item from multiple', () => {
    const item = {
      id: 123,
      name: 'pencil',
      cost: 2.01
    };

    cart.add(item);
    cart.add(item);
    cart.remove({id: 123});

    expect(cart.cart()).to.deep.equal([item]);
    expect(cart.total()).to.equal(2.01);
  });

  it('should remove one item from multiple with differing ids', () => {
    const item1 = {
      id: 123,
      name: 'pencil',
      cost: 2.01
    };

    const item2 = {
      id: 321,
      name: 'pencil',
      cost: 2.05
    };

    cart.add(item1);
    cart.add(item2);
    cart.remove({id: 321});

    expect(cart.cart()).to.deep.equal([item1]);
    expect(cart.total()).to.equal(2.01);

    cart.add(item2);
    cart.remove({id: 123});

    expect(cart.cart()).to.deep.equal([item2]);
    expect(cart.total()).to.equal(2.05);
  });

  it('should remove the only item by index', () => {
    const item = {
      id: 123,
      name: 'pencil',
      cost: 2.01
    };

    cart.add(item);
    cart.remove({index: 0});

    expect(cart.cart()).to.deep.equal([]);
    expect(cart.total()).to.equal(0);
  });

  it('should remove one item from multiple by index', () => {
    const item1 = {
      id: 123,
      name: 'pencil',
      cost: 2.01
    };

    const item2 = {
      id: 321,
      name: 'pencil',
      cost: 2.05
    };

    cart.add(item1);
    cart.add(item2);
    cart.remove({index: 1});

    expect(cart.cart()).to.deep.equal([item1]);
    expect(cart.total()).to.equal(2.01);

    cart.add(item2);
    cart.remove({index: 0});

    expect(cart.cart()).to.deep.equal([item2]);
    expect(cart.total()).to.equal(2.05);
  });

  it('should error when removing a non-existent item', () => {
    const item = {
      id: 123,
      name: 'pencil',
      cost: 2.01
    };

    cart.add(item);

    expect(() => cart.remove({index: 2})).to.throw('Cannot remove an item not in the cart.');
    expect(() => cart.remove({id: 4})).to.throw('Cannot remove an item not in the cart.');
    expect(() => cart.remove({})).to.throw('Cannot remove an item not in the cart.');
  });

});