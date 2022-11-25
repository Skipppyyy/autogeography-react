import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // this css is passed down b/c in end, just loading all components to html using js -> all to one page
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

