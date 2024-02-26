import React from 'react';
import { useGroceryContext } from '../data/grocery-context';

const GroceryList = () => {
  const { items, removeGrocery } = useGroceryContext();

  return (
    <div>
      <h2>Grocery List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => removeGrocery(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroceryList;