import { css } from '@emotion/core';

export const AppStyles = (sidebarHidden: boolean) => ({
    viewport: css({
        minHeight: '100%',
        boxSizing: 'border-box',
        transition: 'padding .25s ease-out',
        paddingLeft: '18rem',
    }, sidebarHidden && {
        paddingLeft: '4rem'
    }),

    body: css({
        position: 'relative',
        padding: '0 3rem 5rem 3rem',
        boxSizing: 'border-box',
        minHeight: '100%'
    })
});