import React from 'react';
import './App.css';
import ContactForm from './components/ContactForm/UserForm';
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ContactForm />
    </div>
  );
}

export default App;
