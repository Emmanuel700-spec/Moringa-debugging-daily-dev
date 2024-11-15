import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App';  // Import your main app component
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // React 18

root.render(
  <BrowserRouter>
    <App />  {/* This will be your main App component */}
  </BrowserRouter>,
);
