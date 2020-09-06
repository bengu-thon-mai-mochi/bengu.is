import React from 'react';
import HamburgerMenu from './HamburgerMenu'; 
import LandingImage from './LandingImage';
import './Header.css';

const Header = () => (
    <header>
        <div className="header__bar">
            <h1>{"<Bengü.is.coding>"}</h1>
            <HamburgerMenu />
        </div>
        <LandingImage />
    </header>
)

export default Header;