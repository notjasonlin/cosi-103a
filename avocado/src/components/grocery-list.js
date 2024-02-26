import React from 'react';
import { useGroceryContext } from '../data/grocery-context';

const GroceryList = () => {
  const { items, removeGrocery, removeAllGrocery} = useGroceryContext();

  return (
    <div>
      <h2>Grocery List</h2>
      <button onClick={() => removeAllGrocery()}>Clear</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.item}{' '}
            <button onClick={() => removeGrocery(item.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroceryList;