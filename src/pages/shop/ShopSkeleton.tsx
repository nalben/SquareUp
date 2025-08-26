import React from 'react';
import CardSkeleton from '@/components/card/CardSkeleton';
import classes from './Shop.module.scss';

export const ShopSkeleton = () => {
    return (
        <div className={classes.card__container}>
            {Array.from({ length: 6 }).map((_, i) => (
                <CardSkeleton key={i} />
            ))}
        </div>
    );
};

export default ShopSkeleton;