import CartComponent from '../../src/components/cart';
import CartItemComponent from '../../src/components/cartItem'
import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

describe('components:cart', () => {
  it('renders', () => {
    const wrapper = shallow(<CartComponent />);
    expect(wrapper.find('.__react-cart')).to.have.length(1);
    expect(wrapper.find('.__react-cart-items')).to.have.length(1);
    expect(wrapper.find('.__react-cart-items').children()).to.have.length(0);
    expect(wrapper.find(CartItemComponent)).to.have.length(0);
    expect(wrapper.find('.__react-cart-total')).to.have.length(1);
    expect(wrapper.find('.__react-cart-total').text()).to.equal('');
  });

  it('displays items in the cart', () => {
    const item = {
      id: 123,
      name: 'pencil',
      cost: 2.01
    };

    let wrapper = shallow(<CartComponent items={[item]} />);
    expect(wrapper.find('.__react-cart-items').children()).to.have.length(1);
    expect(wrapper.find(CartItemComponent)).to.have.length(1);

    wrapper = shallow(<CartComponent items={[item, item]} />);
    expect(wrapper.find('.__react-cart-items').children()).to.have.length(2);
    expect(wrapper.find(CartItemComponent)).to.have.length(2);
  });

  it('displays total cost of all items in cart', () => {
    const wrapper = shallow(<CartComponent total={2.01}/>);
    expect(wrapper.find('.__react-cart-total').text()).to.equal('2.01');
  });
});