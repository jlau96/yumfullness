import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ContactForm from './components/ContactForm/UserForm';
import Navbar from "./components/Navbar/Navbar";
import OrderForm from './components/OrderForm/OrderForm';
import Homepage from './components/Homepage/Homepage';
import NotFound from './components/NotFound/NotFound'

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/order"> 
            <OrderForm />
          </Route>
          <Route exact path="/contact"> 
            <ContactForm />
          </Route>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route component={ NotFound } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
