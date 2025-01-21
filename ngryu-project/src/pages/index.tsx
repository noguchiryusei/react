import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from '../components/Footer/Footer';  // AppをAppWithAuthに変更
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);