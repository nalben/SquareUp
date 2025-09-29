import SectionSkeleton from '@/components/__skeleton/section/SectionSkeleton';
import React from 'react';
export const WorkSkeleton = () => {
    return (
        <div className={`border-content-block`}>
            <SectionSkeleton />
        </div>
    );
};

export default WorkSkeleton;