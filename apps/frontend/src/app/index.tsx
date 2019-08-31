/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useCallback, useState } from 'react';
import { Redirect, Route } from 'react-router';
import { useMappedState } from 'redux-react-hook';
import { ApplicationState } from 'src/store';
import { Spinner } from 'ui';
import useReactRouter from 'use-react-router';
import Header from './Header';
import getRoutes from './routes';
import Sidebar from './Sidebar';
import { AppStyles } from './styles';


const App = (props: any) => {
    const sbVisibility = localStorage.getItem("sb-visibility") === "true";
    const [sidebarHidden, setSidebarHidden] = useState(sbVisibility || false);
    const { location } = useReactRouter();


    const css = AppStyles(sidebarHidden);


    const routes = getRoutes();

    const rootLocation = location.pathname
    const currentRoute = routes.find(route => route.path == rootLocation);

    // if (!currentRoute) {
    //     return <Redirect to="/mod/ebird/users" />
    // }
    console.log(routes)
    return (
        <div>
            {/*<Sidebar
                sidebarHidden={sidebarHidden}
                toggleSidebar={() => {
                    setSidebarHidden(!sidebarHidden);
                    localStorage.setItem("sb-visibility", (!sidebarHidden).toString())
                }}
                {...props}
            />*/}
            <Header />
            <div css={{ maxWidth: '80%', margin: 'auto' }}>
                {routes.map(route => (
                    <Route
                        key={route.path}
                        path={route.path}
                        render={(props) => <route.component  {...props} sidebarHidden={sidebarHidden} />}
                        exact
                    />
                ))}
            </div>
        </div>
    )
}

export default App;