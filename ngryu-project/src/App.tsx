import React, { useState } from 'react';

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <button style={styles.icon} onClick={toggleMenu}>
          ☰
        </button>
        <h1 style={styles.title}>My App</h1>
      </header>
      <main style={styles.main}>メインコンテンツエリア</main>
      {menuOpen && (
        <div style={styles.menu}>
          <ul style={styles.menuList}>
            <li>メニュー1</li>
            <li>メニュー2</li>
            <li>メニュー3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '10px',
    backgroundColor: '#f5f5f5',
    height: '100vh',
    overflow: 'hidden'
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
  },
  menuList: {
    listStyle: 'none',
    padding: '0'
  }
};

export default App;