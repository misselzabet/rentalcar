import React, { Fragment } from 'react';
import { StrictMode } from 'react';import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';
import Loader from './components/Loader/Loader';

import { store } from './redux/store';
import 'modern-normalize';
import './index.css';
import App from './components/App';

createRoot(document.getElementById('root')).render(
    <Fragment>
        <Provider store={store}>
            {/* <PersistGate loading={<Loader />} persistor={persistor}> */}
            <BrowserRouter>
                <App />
            </BrowserRouter>
            {/* </PersistGate> */}
        </Provider>
    </Fragment>
);