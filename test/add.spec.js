import * as cart from '../src/index';
import add from '../src/add';
import {expect} from 'chai';

describe('add', () => {
  beforeEach(() => {
    cart.clear();
  });

  it('should add an item', () => {
    const item = {
      id: 123,
      name: 'pencil',
      cost: 2.01
    };

    cart.add(item);

    expect(cart.cart()).to.deep.equal([item]);
    expect(cart.total()).to.equal(2.01);
  });

  it('should add three items', () => {
    const item = {
      id: 123,
      name: 'pencil',
      cost: 2.01
    };

    cart.add(item);
    cart.add(item);
    cart.add(item);

    expect(cart.cart()).to.deep.equal([item, item, item]);
    expect(cart.total()).to.equal(6.03);
  });

  it('should require a name to add', () => {
    const item = {
      id: 123,
      cost: 2.01
    };

    expect(() => cart.add(item)).to.throw('A name is required for each item added.');
  });

  it('should require a cost to add', () => {
    const item = {
      id: 123,
      name: 'pencil'
    };

    expect(() => cart.add(item)).to.throw('A cost is required for each item added.');
  });

  it('should require a id to add', () => {
    const item = {
      name: 'pencil',
      cost: 2.01
    };

    expect(() => cart.add(item)).to.throw('An id is required for each item added.');
  });
});