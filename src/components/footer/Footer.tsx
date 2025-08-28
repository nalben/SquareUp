import React from 'react';
import Navbar from '../navbar/Navbar';
import classes from './Footer.module.scss'
import Logo from '../UI/logo/Logo';
import Stayconnected from '../stayconnected/Stayconnected';
import Call from '@/assets/icons/call.svg'
import Geo from '@/assets/icons/geo.svg'
import Male from '@/assets/icons/male.svg'

const Footer = () => {
    return (
        <footer className={`${classes.footer} border-content`}>
            <div className={classes.footer_top}>
                <Logo />
                <Navbar direction='row' style='footer' />
                <Stayconnected />
            </div>
            <div className={classes.footer_bottom}>
                <div className={classes.footer_spans}>
                    <h5>
                        <Male />
                        <span>hello@squareup.com</span>
                    </h5>
                    <h5>
                        <Call />
                        <span>+91 91813 23 2309</span>
                    </h5>
                    <h5>
                        <Geo />
                        <span>Somewhere in the World</span>
                    </h5>
                </div>
                <span className={classes.span}>© 2023 SquareUp. All rights reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;

{/* <Navbar direction="row" style='footer'/> */}