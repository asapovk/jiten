/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import { C3, D1, Flexbox, Icon, T3 } from 'ui';
import { DescriptionStyles } from './styles';

declare const $_APP_VERSION_$: string;

interface ModuleDescriptionProps {
    sidebarHidden: boolean
    exit: () => void
}

const ModuleDescription = (props: ModuleDescriptionProps) => {
    const css = DescriptionStyles(props.sidebarHidden);
    const [hovered, setHovered] = useState(false);
    const { sidebarHidden } = props;

    const onMouseEnter = () => sidebarHidden && setHovered(true);
    const onMouseLeave = () => sidebarHidden && setHovered(false);

    return (
        <div css={css.container}>
            <Flexbox
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {sidebarHidden && hovered
                    ? (
                        <Flexbox
                            column
                            alignItems="center"
                            justifyContent="center"
                            flex={1}
                            onClick={props.exit}
                            css={{ cursor: "pointer" }}
                        >
                            <Icon
                                color='lowlight'
                                size='3rem'
                                type="logout"
                            />
                            <C3 color='lowlight' children='Выйти' />
                        </Flexbox>
                    ) : (
                        <Icon
                            type='cash-machine'
                            size='3rem'
                            color='highlight'
                        />
                    )
                }
                <div css={css.moduleName}>
                    <D1
                        color='highlight'
                        children='E-Bird'
                    />
                    <T3
                        color='lowlight'
                        children={`Version: ${$_APP_VERSION_$}`}
                    />
                </div>
            </Flexbox>
            {!sidebarHidden && (
                <Icon
                    color='lowlight'
                    size='2rem'
                    type="logout"
                    onClick={props.exit}
                    css={{ opacity: 0.5 }}
                />
            )}
        </div>
    )
}

export default ModuleDescription;