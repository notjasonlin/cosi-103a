// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './cssfiles/index.css';
import App from './App';
import reportWebVitals from './extra/reportWebVitals';
import { MyContextProvider } from './extra/myContext'; // Import the context provider

ReactDOM.render(
  <React.StrictMode>
    <MyContextProvider> {/* Wrap the App component with MyContextProvider */}
      <App />
    </MyContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
