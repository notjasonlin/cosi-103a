import React, { createContext, useState, useContext } from 'react';

const GroceryContext = createContext();

export const GroceryProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    const addGrocery = (item) => {
        setItems([...items, { id: Date.now(), item }]);
    };

    const removeGrocery = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    const removeAllGrocery = () => {
        setItems([]);
    };

    return (
        <GroceryContext.Provider value={{ items, addGrocery, removeGrocery, removeAllGrocery }}>
            { children }
        </GroceryContext.Provider>
    );
};

export const useGroceryContext = () => {
    return useContext(GroceryContext);
};