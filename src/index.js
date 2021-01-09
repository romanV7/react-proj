import React from 'react';
import {render} from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import store from './redux/redux-store'

const rerenderEntireTree = (state) => {
    render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())
store.subscribe(() => rerenderEntireTree(store.getState()))

reportWebVitals();
