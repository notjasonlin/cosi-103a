// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MyContextProvider } from './myContext'; // Import the context provider

ReactDOM.render(
  <React.StrictMode>
    <MyContextProvider> {/* Wrap the App component with MyContextProvider */}
      <App />
    </MyContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
