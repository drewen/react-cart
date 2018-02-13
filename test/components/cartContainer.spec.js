import CartContainer from '../../src/components/cartContainer';
import CartComponent from '../../src/components/cart';
import CartItemComponent from '../../src/components/cartItem';
import {add, remove, clear} from '../../src';
import store from '../../src/store';
import React from 'react';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';

describe('components:cartContainer', () => {
  before(() => {
    clear();
  });
  afterEach(() => {
    clear();
  });

  it('receives props from the store', () => {
    const wrapper = shallow(<CartContainer store={store} />);
    expect(wrapper.props().items).to.deep.equal([]);
    expect(wrapper.props().total).to.equal(0);
  });

  it('renders', () => {
    const wrapper = mount(<CartContainer store={store} />);
    const cartComponent = wrapper.find(CartComponent);
    expect(cartComponent.length).to.equal(1);
    expect(cartComponent.props()).to.deep.equal({items: [], total: 0});

    const cartItemComponents = wrapper.find(CartItemComponent);
    expect(cartItemComponents.length).to.equal(0);
  });

  it('has an initial state based on cart data', () => {
    const item = {
      id: 123,
      name: 'pencil',
      cost: 2.01
    };

    add(item);

    const wrapper = mount(<CartContainer store={store} />);
    const cartComponent = wrapper.find(CartComponent);
    wrapper.update();
    expect(cartComponent.length).to.equal(1);
    expect(cartComponent.props()).to.deep.equal({items: [item], total: 2.01});
    const cartItemComponents = wrapper.find(CartItemComponent);
    expect(cartItemComponents.length).to.equal(1);
    wrapper.unmount();

    add(item);

    const wrapper2 = mount(<CartContainer store={store} />);
    wrapper2.update();
    const cartComponent2 = wrapper2.find(CartComponent);
    expect(cartComponent2.length).to.equal(1);
    expect(cartComponent2.props()).to.deep.equal({items: [item, item], total: 4.02});
    const cartItemComponents2 = wrapper2.find(CartItemComponent);
    expect(cartItemComponents2.length).to.equal(2);
    wrapper2.unmount();
  });

  it('updates cart items and total when an item is added', () => {
    const item = {
      id: 123,
      name: 'pencil',
      cost: 2.01
    };

    const wrapper = mount(<CartContainer store={store} />);

    add(item);

    wrapper.update();
    const cartComponent = wrapper.find(CartComponent);
    expect(cartComponent.length).to.equal(1);
    expect(cartComponent.props()).to.deep.equal({items: [item], total: 2.01});
    const cartItemComponents = wrapper.find(CartItemComponent);
    expect(cartItemComponents.length).to.equal(1);
  });

  it('updates cart items and total when an item is removed', () => {
    const item = {
      id: 123,
      name: 'pencil',
      cost: 2.01
    };

    const wrapper = mount(<CartContainer store={store} />);

    add(item);

    wrapper.update();
    const cartComponent = wrapper.find(CartComponent);
    expect(cartComponent.length).to.equal(1);
    expect(cartComponent.props()).to.deep.equal({items: [item], total: 2.01});
    const cartItemComponents = wrapper.find(CartItemComponent);
    expect(cartItemComponents.length).to.equal(1);

    remove({id: 123});

    wrapper.update();
    const cartComponentUpdated = wrapper.find(CartComponent);
    expect(cartComponentUpdated.props()).to.deep.equal({items: [], total: 0});
    expect(wrapper.find(CartItemComponent).length).to.equal(0);
  });

  it('updates cart items and total when an item is removed via button', () => {
    const item = {
      id: 123,
      name: 'pencil',
      cost: 2.01
    };

    const wrapper = mount(<CartContainer store={store} />);

    add(item);

    wrapper.update();
    const cartComponent = wrapper.find(CartComponent);
    expect(cartComponent.length).to.equal(1);
    expect(cartComponent.props()).to.deep.equal({items: [item], total: 2.01});
    const cartItemComponent = wrapper.find(CartItemComponent);
    expect(cartItemComponent.length).to.equal(1);

    const removeButton = cartItemComponent.find('button')
    expect(removeButton.length).to.equal(1);
    expect(removeButton.text()).to.equal('Remove');
    removeButton.simulate('click')

    wrapper.update();
    const cartComponentUpdated = wrapper.find(CartComponent);
    expect(cartComponentUpdated.props()).to.deep.equal({items: [], total: 0});
    expect(wrapper.find(CartItemComponent).length).to.equal(0);
  });

  it('clears all cart items when cleared', () => {
    const item = {
      id: 123,
      name: 'pencil',
      cost: 2.01
    };

    let wrapper = mount(<CartContainer store={store} />);

    add(item);
    add(item);
    add(item);

    wrapper = wrapper.update();
    const cartComponent = wrapper.find(CartComponent);
    expect(cartComponent.length).to.equal(1);
    expect(cartComponent.props()).to.deep.equal({items: [item, item, item], total: 6.03});
    const cartItemComponent = wrapper.find(CartItemComponent);
    expect(cartItemComponent.length).to.equal(3);

    const clearButton = cartComponent.find('.__react-cart-total-clear button')
    expect(clearButton.length).to.equal(1);
    expect(clearButton.text()).to.equal('Clear');
    clearButton.simulate('click')
    debugger
    wrapper = wrapper.update();
    const cartComponentUpdated = wrapper.find(CartComponent);
    expect(cartComponentUpdated.props()).to.deep.equal({items: [], total: 0});
    expect(wrapper.find(CartItemComponent).length).to.equal(0);
  });
});
