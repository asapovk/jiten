import { css } from '@emotion/core';


export const avatarStyles = () => {
    return {
        height: 500,
        width: 80
    }
}

export const avatarContainerStyles = (sidebarHidden: boolean) => {
    return css({
        width: '10%',
        position: 'fixed',
        top: '150px',
        left: '300px',
        transition: 'left .25s ease-out'
    }, sidebarHidden && {
        left: '100px'
    })
}