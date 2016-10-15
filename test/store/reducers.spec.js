import reducers from '../../src/store/reducers';
import {expect} from 'chai';

describe('reducers', () => {

  describe('add', () => {
    const initialState = {
      items: [],
      total: 0
    };

    const item = {
      id: 123,
      name: 'pencil',
      cost: 2.01
    };
    
    const type = 'ADD_ITEM';

    it('should add an item', () => {
      const newState = reducers(initialState, {item, type});

      expect(newState.items).to.deep.equal([item]);
      expect(newState.total).to.equal(2.01);
    });

    it('should add three items', () => {
      const firstState = reducers(initialState, {item, type});

      expect(firstState.items).to.deep.equal([item]);
      expect(firstState.total).to.equal(2.01);

      const secondState = reducers(firstState, {item, type});
      expect(secondState.items).to.deep.equal([item, item]);
      expect(secondState.total).to.equal(4.02);

      const thirdState = reducers(secondState, {item, type});
      expect(thirdState.items).to.deep.equal([item, item, item]);
      expect(thirdState.total).to.equal(6.03);
    });

    it('should require a name to add', () => {
      const badItem = {
        id: 123,
        cost: 2.01
      };

      const newState = reducers(initialState, {item: badItem, type});
      expect(newState).to.deep.equal(initialState);
    });

    it('should require a cost to add', () => {
      const badItem = {
        id: 123,
        name: 'pencil'
      };

      const newState = reducers(initialState, {item: badItem, type});
      expect(newState).to.deep.equal(initialState);
    });

    it('should require a id to add', () => {
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

    const type = 'REMOVE_ITEM';
    
    it('should remove the only item', () => {
      const initialState = {
        items: [item],
        total: 2.01
      };

      const newState = reducers(initialState, {id: 123, type});

      expect(newState.items).to.deep.equal([]);
      expect(newState.total).to.equal(0);
    });

    it('should remove one item from multiple', () => {
      const initialState = {
        items: [item, item],
        total: 4.02
      };

      const newState = reducers(initialState, {id: 123, type});

      expect(newState.items).to.deep.equal([item]);
      expect(newState.total).to.equal(2.01);
    });

    it('should remove one item from multiple with differing ids', () => {
      const item2 = {
        id: 321,
        name: 'pencil',
        cost: 2.05
      };

      const initialState = {
        items: [item, item2],
        total: 4.06
      };
      const newState = reducers(initialState, {id: 321, type});

      expect(newState.items).to.deep.equal([item]);
      expect(newState.total).to.equal(2.01);

      const otherState = reducers(initialState, {id: 123, type});

      expect(otherState.items).to.deep.equal([item2]);
      expect(otherState.total).to.equal(2.05);
    });

    it('should remove the only item by index', () => {
      const initialState = {
        items: [item],
        total: 2.01
      };

      const newState = reducers(initialState, {index: 0, type});

      expect(newState.items).to.deep.equal([]);
      expect(newState.total).to.equal(0);
    });

    it('should remove one item from multiple by index', () => {
      const item2 = {
        id: 321,
        name: 'pencil',
        cost: 2.05
      };

      const initialState = {
        items: [item, item2],
        total: 4.06
      };
      const newState = reducers(initialState, {index: 1, type});

      expect(newState.items).to.deep.equal([item]);
      expect(newState.total).to.equal(2.01);

      const otherState = reducers(initialState, {index: 0, type});

      expect(otherState.items).to.deep.equal([item2]);
      expect(otherState.total).to.equal(2.05);
    });

    it('should do nothing when removing a non-existent item', () => {
      const initialState = {
        items: [item],
        total: 2.01
      };

      const newState = reducers(initialState, {id: 111111, type});

      expect(newState.items).to.deep.equal([item]);
      expect(newState.total).to.equal(2.01);

      const otherState = reducers(initialState, {index: 111111, type});

      expect(otherState.items).to.deep.equal([item]);
      expect(otherState.total).to.equal(2.01);
    });
  });

  describe('clear', () => {
    const type = 'CLEAR';
    it('removes all items from cart', () => {
      const initialState = {
        canBe: 'anything'
      };

      const newState = reducers(initialState, {type});
      expect(newState).to.deep.equal({items: [], total: 0});
    });
  });
});