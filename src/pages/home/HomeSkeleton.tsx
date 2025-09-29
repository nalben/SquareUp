import HeroSkeleton from '@/components/__skeleton/home/HeroSkeleton';
import SectionSkeleton from '@/components/__skeleton/section/SectionSkeleton';
import React from 'react';

export const ShopSkeleton = () => {
    return (
        <div className={`border-content-block`}>
            <HeroSkeleton />
            <SectionSkeleton />
        </div>
    );
};

export default ShopSkeleton;