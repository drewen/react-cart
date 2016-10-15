import React, {Component} from 'react';
import {connect} from 'react-redux';
import Cart from './cart';

class CartContainer extends Component {
  render() {
    const {items, total} = this.props;

    return <Cart items={items} total={total} />;
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
    total: state.total
  };
}

export default connect(mapStateToProps)(CartContainer);