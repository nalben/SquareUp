import React from 'react';
import classes from './Mainbtn.module.scss';
import { Link } from 'react-router-dom';

interface MainbtnProps {
    text: string;
    href?: string;
    variant?: 'accent' | 'accentBig' | 'accentSuperBig' | 'blur';
    type?: 'button' | 'submit' | 'reset'; 
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Mainbtn: React.FC<MainbtnProps> = ({ text, href, variant = 'accent', type, onClick }) => {
    if (type) {
        return (
            <button
                type={type}
                className={`${classes.mainBtn} ${classes[variant]}`}
                onClick={onClick}
            >
                {text}
            </button>
        );
    }
    return (
        <Link to={href || '#'} className={`${classes.mainBtn} ${classes[variant]}`}>
            {text}
        </Link>
    );
};

export default Mainbtn;
