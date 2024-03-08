import React from 'react';
import { useGroceryContext } from '../data/grocery-context';
import '../cssfiles/groceries/groceryList.css';

const GroceryList = () => {
  const { items, removeGrocery, removeAllGrocery } = useGroceryContext();

  return (
    <div className="grocery-list-container">
      <h2 className="grocery-list-title">Grocery List</h2>
      <button className="grocery-list-button" onClick={() => removeAllGrocery()}>Clear</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.item}{' '}
            <button className="item-remove-button" onClick={() => removeGrocery(item.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroceryList;
