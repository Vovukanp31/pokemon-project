import React from 'react';

import css from './header.module.css';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={css.headerContainer}>
            <aside className={css.logoImage}>
                <Link to={'/'}><img src="/Poké_Ball_icon.svg.png" alt="pokeball logo"/></Link>
            </aside>

            <div></div>
            <div></div>
        </header>
    );
};

export default Header;