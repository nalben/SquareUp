import React from 'react';
import logo from '@/assets/img/Logo.png';
import classes from './Logo.module.scss';
import { Link } from 'react-router-dom';

const Logo = () => (
        <Link className={classes.logo} to={'/home'}><img src={logo} alt="logo"  /></Link>
);

export default Logo;

