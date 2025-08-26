import Card from '@/components/card/Card';
import React, { useState } from 'react';
import classes from './Shop.module.scss'

const Shop = () => {



    const [cards, setCards] = useState([
        {id: 1, headline: 'FANG YUAN', description: 'mama'},
        {id: 2, headline: 'FANG YUAN 2', description: 'mama'},
        {id: 3, headline: 'FANG YUAN 3', description: 'mama'},
        {id: 4, headline: 'FANG YUAN 4', description: 'mama'},
        {id: 5, headline: 'FANG YUAN 5', description: 'mama'},
    ])




    return (
        <div className={classes.card__container}>
            {cards.map((cards) => 
                <Card
                    card={cards}
                    key={cards.id}
                />
            )}
        </div>
    );
};

export default Shop;