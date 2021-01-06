import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const posts = [
    {id: 1, message: 'Hi!', likesCount: 23},
    {id: 2, message: 'It"s me', likesCount: 33}
]

const dialogs = [
    {id: 1, name: 'Bob'},
    {id: 2, name: 'David'},
    {id: 3, name: 'Varela'}
]

const messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How'},
    {id: 3, message: 'Are'},
    {id: 4, message: 'You'},
    {id: 5, message: '?'},
]


render(
    <React.StrictMode>
        <App posts={posts} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
