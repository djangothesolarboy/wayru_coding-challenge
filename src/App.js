import React from 'react';
import './App.css';
import { ContactForm } from './ContactForm';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <p className="app-intro">
            Contact Form
          </p>
        </header>
        <ContactForm/>
      </div>
    </div>
  );
}

export default App;
