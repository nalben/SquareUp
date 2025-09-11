import React from 'react';
import logo from '@/assets/img/Logo.png';
import Logo1 from '@/assets/icons/colored/Logo.svg';
import classes from './Logo.module.scss';
import { Link } from 'react-router-dom';

const Logo = () => (
        <div>
            <Link className={classes.logo} to={'/home'}> <Logo1 /></Link>
        </div>
);

export default Logo;

