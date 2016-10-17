import * as cart from '../src';
import {expect} from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'enzyme';

describe('root', () => {
  it('mounts', () => {
    const rootDiv = document.createElement('div');
    const mountedEl = cart.mount(rootDiv);
    expect(mountedEl).to.exist;
  });

  it('returns a mountable component', () => {
    const rootDiv = document.createElement('div');
    const mountedEl = ReactDOM.render(cart.component(), rootDiv);
    expect(mountedEl).to.exist;
  });
});