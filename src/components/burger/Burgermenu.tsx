import React, { useEffect, useRef, useState } from 'react';
import classes from './BurgerMenu.module.scss';
import Burger from '@/assets/icons/colored/burger.svg';
import Navbar from '../navbar/Navbar';

const Burgermenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;

            if (menuRef.current && !menuRef.current.contains(target) && !target.closest(`.${classes.burger}`)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    useEffect(() => {
        document.body.classList.toggle('noscroll', isOpen);
    }, [isOpen]);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <div className={classes.burgercontainer}>
            <a
                className={classes.burger}
                href="#"
                onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(!isOpen);
                }}
            >
                <Burger />
            </a>
            <div ref={menuRef} className={`${classes.menu} ${isOpen ? classes.open : ''}`}>
                <Navbar direction="column" onLinkClick={() => setIsOpen(false)} />
            </div>
        </div>
    );
};

export default Burgermenu;
