import { css } from '@emotion/core';


export const avatarStyles = () => {
    return {
        minHeight: 500,
        width: '100%'
    }
}

export const avatarContainerStyles = (sidebarHidden: boolean) => {
    return css({
        width: '10%',
        position: 'fixed',
        top: '120px',
        left: '300px',
        transition: 'left .25s ease-out'
    }, sidebarHidden && {
        left: '100px'
    })
}