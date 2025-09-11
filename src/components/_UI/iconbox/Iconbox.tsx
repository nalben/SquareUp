import React from 'react';

interface IconboxProps {
    href: string;
    iconName: string;
}

const Iconbox: React.FC<IconboxProps> = ({ href, iconName }) => {
    const iconsContext = require.context('@/assets/icons/monochrome', false, /\.svg$/);
    const IconComponent = iconsContext(`./${iconName}.svg`).default;

    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <IconComponent />
        </a>
    );
};

export default Iconbox;

// оно короче делает иконку ссылкой

{/* <Iconbox href="https://www.linkedin.com/" iconName="Linkedin" />
<Iconbox href="https://www.twitter.com/" iconName="Twitter" /> */}