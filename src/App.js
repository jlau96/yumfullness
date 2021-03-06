import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ContactForm from './components/ContactForm/UserForm';
import Navbar from "./components/Navbar/Navbar";
import OrderForm from './components/OrderForm/OrderForm';
import Homepage from './components/Homepage/Homepage';
import NotFound from './components/NotFound/NotFound'
import BottomNav from '@material-ui/core/BottomNavigation';
import BottomNavAction from '@material-ui/core/BottomNavigationAction';
import Testimonials from './components/Testimonials/Testimonials';
import Menu from './components/Menu/Menu';
import ScrollToTop from './components/ScrollToTop/ScollToTop';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/menu"> 
            <Menu />
          </Route>
          <Route exact path="/order"> 
            <OrderForm />
          </Route>
          <Route exact path="/testimonials"> 
            <Testimonials />
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
      <ScrollToTop />
      <footer>
        <div className="footer-f">Website designed & built by <a href="https://www.linkedin.com/in/jeffrey-lau/" style = {{ color: "blue" }} >Jeffrey Lau</a></div>
      </footer>
    </div>
  );
}

export default App;
