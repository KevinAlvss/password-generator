import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ToastContainer } from 'react-toastify';

import GlobalStyle from './GlobalStyle';
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
