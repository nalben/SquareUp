import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.scss';

interface NavbarProps {
    direction?: 'row' | 'column';
    onLinkClick?: () => void; 
    style?: 'header' | 'footer';
}

const Navbar: React.FC<NavbarProps> = ({ direction = 'row', onLinkClick, style = 'header' }) => {
    const navClass = `
        ${classes.nav} 
        ${direction === 'column' ? classes.column : classes.row} 
        ${style === 'header' ? classes.headerStyle : classes.footerStyle}
    `;

    const handleClick = () => {
        if (onLinkClick) onLinkClick();
    };

    return (
        <nav className={navClass}>
            <li>
                <NavLink 
                    to="/home" 
                    end 
                    onClick={handleClick} 
                    className={({ isActive }) => 
                        isActive ? `${classes.link} ${classes.active}` : classes.link
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/services" 
                    onClick={handleClick} 
                    className={({ isActive }) => 
                        isActive ? `${classes.link} ${classes.active}` : classes.link
                    }
                >
                    Services
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/work" 
                    onClick={handleClick} 
                    className={({ isActive }) => 
                        isActive ? `${classes.link} ${classes.active}` : classes.link
                    }
                >
                    Work
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/process" 
                    onClick={handleClick} 
                    className={({ isActive }) => 
                        isActive ? `${classes.link} ${classes.active}` : classes.link
                    }
                >
                    Process
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/about" 
                    onClick={handleClick} 
                    className={({ isActive }) => 
                        isActive ? `${classes.link} ${classes.active}` : classes.link
                    }
                >
                    About
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/careers" 
                    onClick={handleClick} 
                    className={({ isActive }) => 
                        isActive ? `${classes.link} ${classes.active}` : classes.link
                    }
                >
                    Careers
                </NavLink>
            </li>

            {direction === 'column' && (
                <li>
                    <NavLink 
                        to="/contact" 
                        onClick={handleClick} 
                        className={({ isActive }) => 
                            isActive ? `${classes.link} ${classes.active}` : classes.link
                        }
                    >
                        Contact
                    </NavLink>
                </li>
            )}
        </nav>
    );
};

export default Navbar;
