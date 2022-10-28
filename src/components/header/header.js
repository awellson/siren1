import React from 'react';
import {Link} from 'react-scroll'
import logo from '../../svg/logo.svg'

import './header.css'


const Header = () => {;
    return (
        <div className="header">
            <div className="container header__container">
                <a href="/"><img src={logo} role="presentation" width="207" height="49" alt="logo"/></a>
                <div className="header__link">
                    <Link to="button_zip" spy={true} smooth={true}>Link to form</Link>
                </div>
            </div>
        </div>
    );
}

export default Header;