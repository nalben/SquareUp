import React from 'react';
import Navbar from '../navbar/Navbar';
import classes from './Footer.module.scss';
import Logo from '../_UI/logo/Logo';
import Stayconnected from '../stayconnected/Stayconnected';
import { icons, SvgIcon } from '@/utils/icons'; // твой require.context файл
import contactData from '@/assets/data/footer/contacts.json'; // JSON с mail, call, geo

const Footer: React.FC = () => {
    return (
        <footer className={`${classes.footer} border-content`}>
            <div className={classes.footer_top}>
                <Logo />
                <Navbar direction="row" style="footer" />
                <Stayconnected />
            </div>

            <div className={classes.footer_bottom}>
                <div className={classes.footer_spans}>
                    {contactData.map(item => {
                        const Icon: SvgIcon | undefined = icons[item.icon];
                        return (
                            <h5 key={item.icon}>
                                {Icon && <Icon />}
                                <span>{item.text}</span>
                            </h5>
                        );
                    })}
                </div>
                <span className={classes.span}>© 2023 SquareUp. All rights reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;


{/* <Navbar direction="row" style='footer'/> */}