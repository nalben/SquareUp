import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import classes from './App.module.scss';
import Header from '../__general/header/Header';
import "@/styles/general.scss";
import "@/styles/fonts.scss";
import "@/styles/variables.scss";
import Footer from '../__general/footer/Footer';




const Root = () => (
    <div className={classes.sitecon}>
        <div className={classes.sitewrapper}>
            <Header />
            <main className={classes.pagecontent}>
                <Outlet />
            </main>
            <Footer />
        </div>
    </div>
);


export default Root;


