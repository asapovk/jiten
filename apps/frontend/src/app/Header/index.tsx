/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment, useRef } from 'react';
import { Button, Flexbox, Modal, D1, Icon } from 'ui';
import useReactRouter from 'use-react-router';
import getRoutes from '../routes';
import { HeaderStyles } from './styles';
import { Link } from 'react-router-dom'


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
    const onActionClick = () => {
        if (currentRoute && currentRoute.addType === 'form') {
            // return FormActions.doCreate();
        }
        return modal.current && modal.current.open();
    }

    return (
        <Flexbox css={css.container} justifyContent={'space-between'}>
            <Flexbox><Icon type={'rest'} size={'4rem'} style={{ color: 'red' }} /></Flexbox>
            <Flexbox alignItems='center' justifyContent='flex-end'>
                {currentRoute && (
                    <Fragment>
                        <D1 children={'Jiten'} />
                        {location.pathname !== '/' ?

                            <Flexbox ml={'2rem'}>
                                <Link to='/'>
                                    {'На главную'}
                                </Link>
                            </Flexbox>

                            : null
                        }
                    </Fragment>

                )}
            </Flexbox>
        </Flexbox>
    )
}

export default Header;