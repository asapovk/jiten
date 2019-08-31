import { css } from '@emotion/core';
import { useTheme } from 'ui/hooks';

export const HeaderStyles = () => {
    const { theme } = useTheme();

    return {
        container: css({
            position: 'sticky',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 20,
            display: 'flex',
            justifyContent: 'space-between',
            //marginLeft: '-3rem',
            //marginRight: '-3rem',
            padding: '0 3rem',
            boxSizing: 'border-box',
            alignItems: 'center',
            height: 'calc(6rem - 1px)',
            // borderBottom: `1px solid ${theme.pale.hex}`,
            boxShadow: '0 0.25rem 2.25rem rgba(0,0,0,0.1)',
            marginBottom: '1rem',
            backgroundColor: theme.background2.hex,
            // ...(hidden && {
            //     top: '-calc(6rem - 1px)'
            // })
        }),

        title: css({
            position: 'relative',
            fontWeight: 900,
            fontSize: '2.25rem',
            userSelect: 'none',
            lineHeight: 1,
            textTransform: 'uppercase',
            color: theme.text.hex
        })
    }
}

export const SearchBarStyles = () => {
    const { theme } = useTheme();

    return {
        container: css({
            transition: 'all .2s ease-in',
            width: '25rem',
            marginLeft: '1rem',
        })
    }
}