import React from 'react';
import Logo from '../UI/logo/Logo';
import classes from './Header.module.scss'
import Mainbtn from '../UI/mainbtn/Mainbtn';
import Navbar from '../navbar/Navbar';
import Burgermenu from '../burger/Burgermenu';

const Header = () => {
    return (
        <header className={`${classes.header} border-content`}>
            <Logo />
            <Navbar direction="row" style='header'/>
            <Mainbtn text="Contact Us" href="/contact" variant="accent"/>
            <Burgermenu />
        </header>
    );
};

export default Header;