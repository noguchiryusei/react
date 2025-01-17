import React from 'react';
import ReactDOM from 'react-dom/client';
import AppWithAuth from './App';  // AppをAppWithAuthに変更
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppWithAuth /> {/* ここでAppWithAuthをレンダリング */}
  </React.StrictMode>
);