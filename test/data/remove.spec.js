import remove from '../../src/data/remove';
import add from '../../src/data/add';
import store from '../../src/store';
import {expect} from 'chai';

describe('data:remove', () => {
  beforeEach(() => {
    store.dispatch({
      type: 'CLEAR'
    })
  });

  it('should remove the only item', () => {
    const item = {
      id: 123,
      name: 'pencil',
      cost: 2.01
    };

    add(item);
    remove({id: 123});

    const cart = store.getState();
    expect(cart.items).to.deep.equal([]);
    expect(cart.total).to.equal(0);
  });

  it('should remove one item from multiple', () => {
    const item = {
      id: 123,
      name: 'pencil',
      cost: 2.01
    };

    add(item);
    add(item);
    remove({id: 123});

    const cart = store.getState();
    expect(cart.items).to.deep.equal([item]);
    expect(cart.total).to.equal(2.01);
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

    add(item1);
    add(item2);
    remove({id: 321});

    let cart = store.getState();
    expect(cart.items).to.deep.equal([item1]);
    expect(cart.total).to.equal(2.01);

    add(item2);
    remove({id: 123});

    cart = store.getState();
    expect(cart.items).to.deep.equal([item2]);
    expect(cart.total).to.equal(2.05);
  });

  it('should remove the only item by index', () => {
    const item = {
      id: 123,
      name: 'pencil',
      cost: 2.01
    };

    add(item);
    remove({index: 0});

    const cart = store.getState();
    expect(cart.items).to.deep.equal([]);
    expect(cart.total).to.equal(0);
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

    add(item1);
    add(item2);
    remove({index: 1});

    let cart = store.getState();
    expect(cart.items).to.deep.equal([item1]);
    expect(cart.total).to.equal(2.01);

    add(item2);
    remove({index: 0});

    cart = store.getState();
    expect(cart.items).to.deep.equal([item2]);
    expect(cart.total).to.equal(2.05);
  });

  it('should error when no index or id provided', () => {
    expect(() => remove({})).to.throw('An index or id is required to remove an item.');
  });

});