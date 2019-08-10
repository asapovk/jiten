import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { StoreContext } from 'redux-react-hook';
import { Viewport } from 'ui';
import App from './app';
import store from './store';

const Application = (props: any) => {

    return (
        <StoreContext.Provider value={store}>
            <Viewport theme={"whiteCurrant"}>
                <Router>
                    <App />
                </Router>
            </Viewport>
        </StoreContext.Provider>
    );
}

ReactDOM.render(<Application />, document.getElementById('app'));
