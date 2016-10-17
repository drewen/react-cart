[![Build Status](https://travis-ci.org/drewen/react-cart.svg?branch=master)](https://travis-ci.org/drewen/react-cart)
[![Coverage Status](https://coveralls.io/repos/github/drewen/react-cart/badge.svg?branch=master)](https://coveralls.io/github/drewen/react-cart?branch=master)
[![npm version](https://badge.fury.io/js/react-cart.svg)](https://badge.fury.io/js/react-cart)

Item Interface:
An item must have the following properties:
- name: The name of the item
- cost: The numeric cost of the item. In totalling, all costs will be rounded to two decimal places.
- id: An identifier for the particular item. Can either be unique to the item, or unique to all items of the same type, ie all "apple" items could have the same id, or each "apple" could have its own id.

Shopping Cart Data Functions:
- `cart()` - Returns the list of items currently in the cart.
- `add({item: item})` - Adds an item to the cart.
- `remove({id: itemId}) OR remove({index: itemIndex})` - Removes an item by index or itemId from the cart.
- `total()` - Returns the total numeric cost of all items in the cart.
- `clear()` - Removes all items from the cart.

React-esque functions:
- `mount(element)` - Mounts the shopping cart to the provided DOM element.
- `component` - Returns a react element for the shopping cart. This can either be rendered with `reactDom.render()` or be used within component tree.