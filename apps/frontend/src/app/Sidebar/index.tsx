/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import { Flexbox, Icon } from 'ui';
import useReactRouter from 'use-react-router';
import getRoutes from '../routes';
import ModuleDescription from './ModuleDescription';
import { SidebarStyles } from './styles';

interface SidebarProps {
    sidebarHidden: boolean
    toggleSidebar: () => void
    exit: () => void
}

const Sidebar = (props: SidebarProps) => {
    const { location } = useReactRouter();
    const css = SidebarStyles(props.sidebarHidden);
    const routes = getRoutes();

    return (
        <div css={css.sidebar}>
            <Flexbox column>
                <ModuleDescription sidebarHidden={props.sidebarHidden} exit={props.exit} />
                {routes.filter(route => !route.isSingle).map(route => {
                    const rootLocation = location.pathname.split("/")[0];
                    const active = rootLocation === route.path.split('/')[0];

                    return (
                        <Link key={route.path} to={route.path} css={css.link(active)}>
                            <Icon color={active ? 'highlight' : 'lowlight'} size='2rem' type={route.icon} />
                            <div>{route.title}</div>
                        </Link>
                    )
                })}
            </Flexbox>
            <div css={css.expandButton} onClick={props.toggleSidebar}>
                <Icon type='arrow-left' size='2rem' color='lowlight' />
                <span>Скрыть</span>
            </div>
        </div>
    )
}

export default Sidebar;