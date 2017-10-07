import reducers from '../../src/store/reducers';
import {add, remove, clear} from '../../src/store/action-creators';
import {getItems, getTotal} from '../../src/store/selectors';
import {expect} from 'chai';

describe('store', () => {

  describe('add', () => {
    const initialState = {
      items: []
    };

    const item = {
      id: 123,
      name: 'pencil',
      cost: 2.01
    };

    it('should add an item', () => {
      const newState = reducers(initialState, add(item));

      expect(getItems(newState)).to.deep.equal([item]);
      expect(getTotal(newState)).to.equal(2.01);
    });

    it('should add three items', () => {
      const firstState = reducers(initialState, add(item));

      expect(getItems(firstState)).to.deep.equal([item]);
      expect(getTotal(firstState)).to.equal(2.01);

      const secondState = reducers(firstState, add(item));
      expect(getItems(secondState)).to.deep.equal([item, item]);
      expect(getTotal(secondState)).to.equal(4.02);

      const thirdState = reducers(secondState, add(item));
      expect(getItems(thirdState)).to.deep.equal([item, item, item]);
      expect(getTotal(thirdState)).to.equal(6.03);
    });

    it('should require a name to add', () => {
      const type = 'ADD_ITEM';
      const badItem = {
        id: 123,
        cost: 2.01
      };

      const newState = reducers(initialState, {item: badItem, type});
      expect(newState).to.deep.equal(initialState);
      expect(() => add(badItem)).to.throw();
    });

    it('should require a cost to add', () => {
      const type = 'ADD_ITEM';
      const badItem = {
        id: 123,
        name: 'pencil'
      };

      const newState = reducers(initialState, {item: badItem, type});
      expect(newState).to.deep.equal(initialState);
      expect(() => add(badItem)).to.throw();
    });

    it('should require a id to add', () => {
      const type = 'ADD_ITEM';
      const badItem = {
        name: 'pencil',
        cost: 2.01
      };

      const newState = reducers(initialState, {item: badItem, type});
      expect(newState).to.deep.equal(initialState);
    });
  });

  describe('remove', () => {
    const item = {
      id: 123,
      name: 'pencil',
      cost: 2.01
    };

    it('should remove the only item', () => {
      const initialState = {
        items: [item]
      };

      const newState = reducers(initialState, remove({ id: 123 }));

      expect(getItems(newState)).to.deep.equal([]);
      expect(getTotal(newState)).to.equal(0);
    });

    it('should remove one item from multiple', () => {
      const initialState = {
        items: [item, item]
      };

      const newState = reducers(initialState, remove({id: 123}));

      expect(getItems(newState)).to.deep.equal([item]);
      expect(getTotal(newState)).to.equal(2.01);
    });

    it('should remove one item from multiple with differing ids', () => {
      const item2 = {
        id: 321,
        name: 'pencil',
        cost: 2.05
      };

      const initialState = {
        items: [item, item2]
      };
      const newState = reducers(initialState, remove({id: 321}));

      expect(getItems(newState)).to.deep.equal([item]);
      expect(getTotal(newState)).to.equal(2.01);

      const otherState = reducers(initialState, remove({id: 123}));

      expect(getItems(otherState)).to.deep.equal([item2]);
      expect(getTotal(otherState)).to.equal(2.05);
    });

    it('should remove the only item by index', () => {
      const initialState = {
        items: [item]
      };

      const newState = reducers(initialState, remove({index: 0}));

      expect(getItems(newState)).to.deep.equal([]);
      expect(getTotal(newState)).to.equal(0);
    });

    it('should remove one item from multiple by index', () => {
      const item2 = {
        id: 321,
        name: 'pencil',
        cost: 2.05
      };

      const initialState = {
        items: [item, item2]
      };
      const newState = reducers(initialState, remove({index: 1}));

      expect(getItems(newState)).to.deep.equal([item]);
      expect(getTotal(newState)).to.equal(2.01);

      const otherState = reducers(initialState, remove({index: 0}));

      expect(getItems(otherState)).to.deep.equal([item2]);
      expect(getTotal(otherState)).to.equal(2.05);
    });

    it('should do nothing when removing a non-existent item', () => {
      const initialState = {
        items: [item],
        total: 2.01
      };

      const newState = reducers(initialState, remove({id: 111111}));

      expect(getItems(newState)).to.deep.equal([item]);
      expect(getTotal(newState)).to.equal(2.01);

      const otherState = reducers(initialState, remove({index: 111111}));

      expect(getItems(otherState)).to.deep.equal([item]);
      expect(getTotal(otherState)).to.equal(2.01);
    });
  });

  describe('clear', () => {
    it('removes all items from cart', () => {
      const initialState = {
        canBe: 'anything'
      };

      const newState = reducers(initialState, clear());
      expect(getItems(newState)).to.deep.equal([]);
      expect(getTotal(newState)).to.equal(0);
    });
  });
});
