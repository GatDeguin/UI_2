import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { DataProvider } from './context/DataContext';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
);