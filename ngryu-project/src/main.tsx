import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <button style={styles.icon} onClick={toggleMenu}>
          ☰
        </button>
        <h1 style={styles.title}>らるめちゃん</h1>
      </header>
      <main style={styles.main}>ここに何が入るんだろうね</main>
      {menuOpen && (
        <div style={styles.menu}>
          <ul>
            <li><a href="https://www.mcdonalds.co.jp/">マクドナルドは</a></li>
            <li>おやつに</li>
            <li>含まれますか</li>
          </ul>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '10px',
    backgroundColor: '#f5f5f5'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
    backgroundColor: '#333',
    color: '#fff'
  },
  icon: {
    fontSize: '24px',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    color: '#fff'
  },
  title: {
    margin: '0'
  },
  main: {
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
  },
  menu: {
    position: 'absolute',
    top: '50px',
    left: '0',
    width: '200px',
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'left',
    padding: '10px',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)'
  }
};

ReactDOM.render(<App />, document.getElementById('root'));