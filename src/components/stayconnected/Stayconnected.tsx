import React from 'react';
import classes from './Stayconnected.module.scss';
import Iconbox from '../UI/iconbox/Iconbox';
import footerData from '@/assets/data/footer/stay.json';

const Stayconnected: React.FC = () => {
    return (
        <div className={classes.container}>
            <span>Stay Connected</span>
            <div className={classes.icons_con}>
                {footerData.map((item) => (
                    <Iconbox
                        key={item.icon}
                        href={item.href}
                        iconName={item.icon}
                    />
                ))}
            </div>
        </div>
    );
};

export default Stayconnected;