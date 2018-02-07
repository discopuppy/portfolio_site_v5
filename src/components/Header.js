import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <div className="header__container">
            <div className="header__content">
                <div className="nav__container">
                    <div className="nav__container2">
                        <span className="nav__item">
                            <NavLink to="/" activeClassName="is-active" className="nav__link" exact={true}>Portfolio</NavLink>
                        </span>
                        <span className="nav__item">
                            <NavLink to="/about" activeClassName="is-active" className="nav__link" exact={true}>About</NavLink>
                        </span>
                        <span className="nav__item">
                            <NavLink to="/contact" activeClassName="is-active" className="nav__link">Hire Now</NavLink>
                        </span>
                    </div>
                </div>
                <div className="logo__container">
                    <NavLink to="/about" style={{ textDecoration: 'none', color: 'black' }} exact={true}>Zac Moss</NavLink>
                </div>
            </div>
        </div>
    </header>
);

export default Header;