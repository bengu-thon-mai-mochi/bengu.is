import React from 'react';

const HamburgerMenu = () => (
    <nav className="nav">
        <ul className="nav__list">
            <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
            <li className="nav__item"><a href="#projects" className="nav__link">Projects</a></li>
            <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
        </ul>
    </nav>
)

export default HamburgerMenu;