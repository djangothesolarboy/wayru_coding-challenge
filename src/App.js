import React from 'react';
import { render } from '@testing-library/react';
import ContactPage from './HandleSubmit';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <p className="app-intro">
            Contact Form
          </p>
        </header>
        <ContactPage/>
      </div>
    </div>
  );
}

export default App;
