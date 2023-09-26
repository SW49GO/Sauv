import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Router from './components/Router';
import { MonProvider } from './components/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MonProvider>
      <Router/>
    </MonProvider>
  </React.StrictMode>
);

