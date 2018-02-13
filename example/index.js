import React from 'react';
import ReactDOM from 'react-dom';
import { cart, total, clear, add, remove, component } from '../src';

const items = [
  {
    name: 'Apple',
    cost: 1.00,
    id: 1,
    key: 1
  },
  {
    name: 'Banana',
    cost: 1.05,
    id: 2,
    key: 2
  },
  {
    name: 'Cucumber',
    cost: 2.15,
    id: 3,
    key: 3
  },
  {
    name: 'Durian',
    cost: 5.25,
    id: 4,
    key: 4
  }
];

const StockItem = props => {
  const { name, cost, id } = props

  return (
    <div className="stock-item" id={`item-${id}`}>
      <div className="stock-item-name">Name: {name}</div>
      <div className="stock-item-cost">Cost: {cost.toFixed(2)}</div>
      <button  className="stock-item-add" onClick={() => add({name, cost, id})}>Add</button>
    </div>
  );
};

const StoreExample = () => {
const itemComponents = items.map(item => <StockItem {...item} />);
  const totalComponent = component();
  return (
    <div>
      {itemComponents}
      {totalComponent}
    </div>
  );
};

ReactDOM.render(<StoreExample />, document.getElementById('app'));
