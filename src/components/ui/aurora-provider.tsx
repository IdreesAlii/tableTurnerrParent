'use client';

import React, { createElement } from 'react';

export const AuroraProvider = ({ children, as = 'div', ...props }) => {
    return createElement(as, { ...props }, children);
};
