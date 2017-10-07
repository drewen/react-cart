import CartItemComponent from '../../src/components/cartItem';
import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

describe('components:cartItem', () => {

  it('renders', () => {
    const wrapper = shallow(<CartItemComponent key={1} name="pencil" id={123} cost={2.01} />);
    expect(wrapper.find('.__react-cart-item')).to.have.length(1);
    expect(wrapper.find('.__react-cart-item-name')).to.have.length(1);
    expect(wrapper.find('.__react-cart-item-name').text()).to.equal('pencil');
    expect(wrapper.find('.__react-cart-item-cost')).to.have.length(1);
    expect(wrapper.find('.__react-cart-item-cost').text()).to.equal('2.01');
  });
});
