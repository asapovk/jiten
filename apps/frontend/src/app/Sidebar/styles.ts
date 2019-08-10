import { css } from '@emotion/core';
import { useTheme } from 'ui/hooks';

export const SidebarStyles = (hidden: boolean) => {
    const theme = useTheme().theme;

    return {
        sidebar: css({
            userSelect: 'none',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            width: '18rem',
            zIndex: 21,
            backgroundColor: theme.background2.hex,
            boxShadow: '0.25rem 0 1.25rem rgba(0,0,0,0.1)',
            transition: 'width .25s ease-out',
            overflow: 'hidden',
            ...(hidden && {
                width: '4rem',
            })
        }),

        link: (active: boolean) => css({
            display: "flex",
            boxSizing: 'border-box',
            alignItems: "center",
            height: "4rem",
            padding: "1.5rem 1rem",
            textDecoration: "none",
            transition: 'padding 0.25s ease-out, background-color 0.25s ease-out',
            ...(active && {
                // boxShadow: `0 0.5rem 1rem rgba(0,0,0,0.1), inset 0.25rem 0 0 ${theme.highlight.hex}`,
                // backgroundColor: "#2F2F2F"
                backgroundColor: theme.highlight.rgba(0.05),
            }),
            ":hover": {
                cursor: "pointer"
            },
            "> svg": {
                flexBasis: '2rem',
                flexShrink: 0,
                marginRight: "1.25rem",
                ...(hidden && {
                    marginRight: 0,
                })
            },
            "> div": {
                display: 'flex',
                flex: 1,
                justifyContent: 'space-between',
                color: active ? theme.highlight.hex : theme.lowlight.hex,
                textTransform: "uppercase",
                fontSize: "1rem",
                fontWeight: 700,
                ...(hidden && {
                    display: 'none'
                })
            }
        }),

        expandButton: css({
            display: "flex",
            alignItems: "center",
            height: "2rem",
            padding: "1rem",
            borderWidth: '1px 0 0 0',
            borderStyle: 'solid',
            borderColor: theme.pale.rgba(0.3),
            transition: 'all 0.25s ease-out',
            ":hover": {
                cursor: "pointer"
            },
            "> svg": {
                flexBasis: '2rem',
                flexShrink: 0,
                marginRight: "1.25rem",
                transition: 'transform 0.25s ease-out',
                ...(hidden && {
                    marginRight: 0,
                    transform: 'rotate(180deg)'
                })
            },
            "> span": {
                color: theme.lowlight.hex,
                fontWeight: 600,
                fontSize: "1rem",
                ...(hidden && {
                    display: 'none'
                })
            },
        })
    }
}

export const DescriptionStyles = (sidebarHidden: boolean) => {
    const { theme } = useTheme();

    return {
        container: css({
            display: 'flex',
            padding: '0 0.5rem',
            boxSizing: 'border-box',
            alignItems: 'center',
            height: '6rem',
            borderBottom: `1px solid ${theme.pale.rgba(0.3)}`,
            marginBottom: '5rem',
            justifyContent: 'space-between',
            whiteSpace: 'nowrap',
            "> svg": {
                display: 'flex',
                flexShrink: 0
            }
        }),

        moduleName: css({
            display: 'block',
            color: theme.highlight.hex,
            marginLeft: '0.5rem',
            ...(sidebarHidden && {
                display: 'none'
            }),
            "> span": {
                ":first-of-type": {
                    fontWeight: 700,
                    lineHeight: '2rem'
                },
                ":last-of-type": {
                    opacity: 0.4
                }
            }
        }),

        image: css({
            display: 'flex',
            flexShrink: 0,
            width: '3rem',
            height: '3rem',
            borderRadius: '10px',
            overflow: 'hidden',
            transition: 'all 0.5s',
            boxSizing: 'border-box',
            "> img": {
                fill: theme.highlight.hex,
                width: '100%'
            }
        })
    }
}