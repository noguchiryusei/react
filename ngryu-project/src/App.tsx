import React, { useState } from 'react';
import './App.css';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports.js';
Amplify.configure(awsExports);
import { withAuthenticator } from '@aws-amplify/ui-react';

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="container">
      <header className="header">
        <button className="icon" onClick={toggleMenu}>
          ☰
        </button>
        <h1 className="title">らるめちゃん</h1>
      </header>
      <main className="main">ここにランキング</main>
      <main className="main">ここにランキング</main>
      <main className="main">ここにランキング</main>
      {menuOpen && (
        <div className="menu">
          <ul className="menuList">
            <li>メニュー1</li>
            <li>メニュー2</li>
            <li>メニュー3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default withAuthenticator(App);