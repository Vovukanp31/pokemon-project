import React from 'react';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import {Outlet} from "react-router-dom"
import css from './layout.module.css'

const Layout = () => {
    return (
        <div>
            <div className={css.header}><Header/></div>
            <div className={css.pageContainer}><Outlet/></div>
            <Footer/>
        </div>
    );
};

export default Layout;