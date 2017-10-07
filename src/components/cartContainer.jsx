import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getItems, getTotal} from '../store/selectors'
import Cart from './cart';

class CartContainer extends Component {
  render() {
    const {items, total} = this.props;

    return <Cart items={items} total={total} />;
  }
}

function mapStateToProps(state) {
  return {
    items: getItems(state),
    total: getTotal(state)
  };
}

export default connect(mapStateToProps)(CartContainer);
