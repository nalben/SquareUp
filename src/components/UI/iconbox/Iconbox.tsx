import React from 'react';

interface IconboxProps {
    href: string;            // ссылка
    icon: React.ReactNode; // сам элемент (иконка или любой JSX)
}

const Iconbox: React.FC<IconboxProps> = ({ href, icon }) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">{icon}</a>
    );
};

export default Iconbox;


{/* <Iconbox href="https://www.linkedin.com/" icon={<Linkedin />} /> */}