import React from 'react';
import classes from './Mainbtn.module.scss';
import { Link } from 'react-router-dom';

interface MainbtnProps {
    text: string;
    href: string;
    variant?: 'accent' | 'accentBig' | 'blur';
}

const Mainbtn: React.FC<MainbtnProps> = ({ text, href, variant = 'accent' }) => {
    return (
        <Link to={href}>
            <a href="" className={`${classes.mainBtn} ${classes[variant]}`}>
                {text}
            </a>
        </Link>
    );
};

export default Mainbtn;

