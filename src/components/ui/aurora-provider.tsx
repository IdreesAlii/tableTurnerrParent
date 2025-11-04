'use client';

import React, { createElement } from 'react';

type AuroraProviderProps = {
    children?: React.ReactNode;
    as?: keyof JSX.IntrinsicElements | React.ElementType;
    [key: string]: any;
};

export const AuroraProvider = ({ children, as = 'div', ...props }: AuroraProviderProps) => {
        return createElement(as, { ...props }, children);
};
