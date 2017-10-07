import {getItems, getTotal} from '../../src/store/selectors';
import {expect} from 'chai';

describe('selectors', () => {
  const itemTests = [
    {
      description: 'empty cart',
      items: [],
      total: 0
    },
    {
      description: 'one item',
      items: [
        {
          id: 123,
          name: 'pencil',
          cost: 2.01
        }
      ],
      total: 2.01
    },
    {
      description: 'two items same cost',
      items: [
        {
          id: 123,
          name: 'pencil',
          cost: 2.01
        },
        {
          id: 123,
          name: 'pencil',
          cost: 2.01
        }
      ],
      total: 4.02
    },
    {
      description: 'two items different cost',
      items: [
        {
          id: 123,
          name: 'pencil',
          cost: 2.01
        },
        {
          id: 125,
          name: 'pin',
          cost: 9.63
        }
      ],
      total: 11.64
    }
  ];

  describe('getItems', () => {
    itemTests.forEach(({description, items}) => {
      it(`returns items from state with ${description}`, () => {
        expect(getItems({items})).to.deep.equal(items);
      });
    });
  });

  describe('getTotal', () => {
    itemTests.forEach(({description, items, total}) => {
      it(`returns total from state with ${description}`, () => {
        expect(getTotal({items})).to.equal(total);
      });
    });
  });
});
