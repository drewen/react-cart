import {expect} from 'chai';
import {add, remove, clear} from '../../src/store/action-creators'
import store from '../../src/store'

describe('action-creators', () => {

  describe('add', () => {
    beforeEach(() => {
      store.dispatch(clear())
    });

    it('should add an item', () => {
      const item = {
        id: 123,
        name: 'pencil',
        cost: 2.01
      };

      store.dispatch(add(item));

      const cart = store.getState();
      expect(cart.items).to.deep.equal([item]);
    });

    it('should add three items', () => {
      const item = {
        id: 123,
        name: 'pencil',
        cost: 2.01
      };

      store.dispatch(add(item));
      store.dispatch(add(item));
      store.dispatch(add(item));

      const cart = store.getState();
      expect(cart.items).to.deep.equal([item, item, item]);
    });

    it('should require a name to add', () => {
      const item = {
        id: 123,
        cost: 2.01
      };

      expect(() => add(item)).to.throw('A name is required for each item added.');
    });

    it('should require a cost to add', () => {
      const item = {
        id: 123,
        name: 'pencil'
      };

      expect(() => add(item)).to.throw('A cost is required for each item added.');
    });

    it('should require a id to add', () => {
      const item = {
        name: 'pencil',
        cost: 2.01
      };

      expect(() => add(item)).to.throw('An id is required for each item added.');
    });
  });

  describe('remove', () => {
    beforeEach(() => {
      store.dispatch(clear())
    });

    it('should remove the only item', () => {
      const item = {
        id: 123,
        name: 'pencil',
        cost: 2.01
      };

      store.dispatch(add(item));
      store.dispatch(remove({id: 123}));

      const cart = store.getState();
      expect(cart.items).to.deep.equal([]);
    });

    it('should remove one item from multiple', () => {
      const item = {
        id: 123,
        name: 'pencil',
        cost: 2.01
      };

      store.dispatch(add(item));
      store.dispatch(add(item));
      store.dispatch(remove({id: 123}));

      const cart = store.getState();
      expect(cart.items).to.deep.equal([item]);
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

      store.dispatch(add(item1));
      store.dispatch(add(item2));
      store.dispatch(remove({id: 321}));

      let cart = store.getState();
      expect(cart.items).to.deep.equal([item1]);

      store.dispatch(add(item2));
      store.dispatch(remove({id: 123}));

      cart = store.getState();
      expect(cart.items).to.deep.equal([item2]);
    });

    it('should remove the only item by index', () => {
      const item = {
        id: 123,
        name: 'pencil',
        cost: 2.01
      };

      store.dispatch(add(item));
      store.dispatch(remove({index: 0}));

      const cart = store.getState();
      expect(cart.items).to.deep.equal([]);
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

      store.dispatch(add(item1));
      store.dispatch(add(item2));
      store.dispatch(remove({index: 1}));

      let cart = store.getState();
      expect(cart.items).to.deep.equal([item1]);

      store.dispatch(add(item2));
      store.dispatch(remove({index: 0}));

      cart = store.getState();
      expect(cart.items).to.deep.equal([item2]);
    });

    it('should error when no index or id provided', () => {
      expect(() => remove({})).to.throw('An index or id is required to remove an item.');
    });

  });
})
