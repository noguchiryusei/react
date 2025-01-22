import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<<< HEAD:ngryu-project/src/pages/index.tsx
import Footer from '../components/Footer/Footer';  // AppをAppWithAuthに変更
========
import Footer from '../components/Footer/Footer';
>>>>>>>> d8b1830 (footer):ngryu-project/src/pages/main.tsx
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
<<<<<<<< HEAD:ngryu-project/src/pages/index.tsx
    <Footer />
========
    <Footer /> 
>>>>>>>> d8b1830 (footer):ngryu-project/src/pages/main.tsx
  </React.StrictMode>
);