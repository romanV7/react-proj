import React from 'react';
import {render} from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import store from './redux/redux-store'
import {Provider} from './storeContext'

const rerenderEntireTree = (state) => {
    render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())
store.subscribe(() => rerenderEntireTree(store.getState()))

reportWebVitals();
