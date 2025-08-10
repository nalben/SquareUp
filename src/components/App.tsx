import React, { useState } from 'react';
import classes from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';
import About from '@/pages/about/About';
import IcoSvg from '@/assets/ico_pinterest.svg'


export const App =() => {
    const [count, setCount] = useState(0);
    const increment = () => setCount (prev => prev + 1)




    return (
        <div>
            <h1 data-testid={'App.DataTestId'} >platform={__PLATFORM__}</h1>
            <div>
                <IcoSvg style={{color: 'red'}} width={50} height={50} />
            </div>
            <Link to={'/about'}>about</Link>
            <br/>
            <Link to={'/shop'}>shop</Link>
            <h1 className='{classes.value}' >{count}</h1>
            <button className={classes.button} onClick={increment}>inc</button>
            <Outlet /> 
        </div>
    );
};