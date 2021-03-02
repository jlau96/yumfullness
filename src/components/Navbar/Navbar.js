import React, { Component } from 'react';
import './Navbar.css';
import { MenuItems } from './MenuItems';
import { Button } from '../Button';

class NavBar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItem">
                <h1 className="navbar-logo">
                    <i className="fas fa-at"></i>
                    Yumfullness
                </h1>
                <div className="menu-icon" onClick={ this.handleClick }>
                    <i className={ this.state.clicked ? 'fas fa-times' : 'fas fa-bars' }></i>
                </div>
                <ul className={ this.state.clicked ? 'nav-menu active' : 'nav-menu' }>
                    { MenuItems.map( (item, index) => {
                        return (
                            <li key={ index }>
                                <a className={ item.cName } href={ item.url }>
                                    { item.label }
                                </a>
                            </li>
                        )
                    })}
                </ul>
                {/* <Button>Sign Up</Button> */}
            </nav>
        )
    }
}

export default NavBar;