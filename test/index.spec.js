import cartDefault, * as cart from '../src';
import {expect} from 'chai';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';

describe('integration', () => {
  describe('components', () => {
    it('mounts', () => {
      const rootDiv = document.createElement('div');
      const mountedEl = cart.mount(rootDiv);
      expect(mountedEl).to.exist;
    });

    it('returns a mountable component', () => {
      const wrapper = mount(cart.component());
      expect(wrapper.find(Provider)).to.have.lengthOf(1);
    });
  });

  describe('data', () => {
    it('add, removes, and clears', () => {
      const item = {
        id: 123,
        name: 'pencil',
        cost: 2.01
      };
      expect(cart.cart()).to.deep.equal([]);
      expect(cartDefault()).to.deep.equal([]);
      expect(cart.total()).to.equal(0);
      cart.add(item);
      expect(cart.cart()).to.deep.equal([item]);
      expect(cartDefault()).to.deep.equal([item]);
      expect(cart.total()).to.equal(2.01);
      cart.add(item);
      expect(cart.cart()).to.deep.equal([item, item]);
      expect(cartDefault()).to.deep.equal([item, item]);
      expect(cart.total()).to.equal(4.02);
      cart.add(item);
      cart.add(item);
      cart.remove({id: 123});
      expect(cart.cart()).to.deep.equal([item, item, item]);
      expect(cartDefault()).to.deep.equal([item, item, item]);
      expect(cart.total()).to.equal(6.03);
      cart.remove({index: 2});
      expect(cart.cart()).to.deep.equal([item, item]);
      expect(cartDefault()).to.deep.equal([item, item]);
      expect(cart.total()).to.equal(4.02);
      cart.clear();
      expect(cart.cart()).to.deep.equal([]);
      expect(cartDefault()).to.deep.equal([]);
      expect(cart.total()).to.equal(0);
    });
  });
});
