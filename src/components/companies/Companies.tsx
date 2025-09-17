import React from 'react';
import classes from './Companies.module.scss'
import companiesData from '@/assets/data/companies/companies.json'
import Iconbox from '../_UI/iconbox/Iconbox';

const Companies = () => {
    return (

        <div className={`${classes.companies}`}>
            <div className={classes.companies_con}>
                {companiesData.map((item) => (
                <div key={item.icon} className={classes.link_con}>
                    <Iconbox
                    href={item.href}
                    iconName={item.icon}
                    />
                </div>
                ))}
            </div>
            <div className={classes.trusted_absolute}>
                <span>Trusted&nbsp;By&nbsp;250+&nbsp;Companies</span>
            </div>
        </div>
    );
};

export default Companies;