/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment, useRef } from 'react';
import { Button, Flexbox, Modal } from 'ui';
import useReactRouter from 'use-react-router';
import getRoutes from '../routes';
import { HeaderStyles } from './styles';

const Header = () => {
    const { location } = useReactRouter();
    const css = HeaderStyles();
    const modal = useRef<Modal>(null);
    const routes = getRoutes();

    const rootLocation = location.pathname
    console.log(rootLocation)
    const currentRoute = routes.find(route =>
        route.path.split('/')[0] == rootLocation.split('/')[0]
    );
    console.log(currentRoute)
    const onActionClick = () => {
        if (currentRoute && currentRoute.addType === 'form') {
            // return FormActions.doCreate();
        }
        return modal.current && modal.current.open();
    }

    return (
        <Flexbox css={css.container}>
            <span css={css.title} children={currentRoute ? currentRoute.title : ''} />
            <Flexbox alignItems='center' justifyContent='flex-end'>
                {currentRoute && (
                    <Fragment>
                        {/* {currentRoute.searchable && (
                            <SearchBar />
                        )} */}
                        {currentRoute.tools && currentRoute.tools.map((tool, index) => (
                            <Fragment key={tool.key}>
                                <tool.render />
                            </Fragment>
                        ))}
                    </Fragment>
                )}
            </Flexbox>
        </Flexbox>
    )
}

export default Header;