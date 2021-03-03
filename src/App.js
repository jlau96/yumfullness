import React from 'react';
import './App.css';
import UserForm from './components/Form/UserForm';
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <UserForm />
    </div>
  );
}

export default App;
