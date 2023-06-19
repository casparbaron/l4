import { createRoot } from 'react-dom/client';
import { Suspense, useState } from 'react';
import Logo from './logo.png';
import './styles.css';
import { App } from './App';
import Footer from './footer';
import PopupComponent from './widget';

createRoot(document.getElementById('root')).render(
  <>
    <Suspense fallback={null}>
      <App />
    </Suspense>

    <PopupComponent />

    <img src={Logo} style={{ position: 'absolute', top: 40, left: 40, width: 30 }} />

    <Footer />

    {/* Add the scroll-to-top button */}
    <button
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }}
      style={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        width: 40,
        height: 40,
        borderRadius: '50%',
        backgroundColor: 'blue',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
      }}
    >
      ↑
    </button>
  </>
);
