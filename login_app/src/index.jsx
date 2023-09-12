import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

function getUserTheme() {
    return localStorage.getItem('theme') || 'light-theme'
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const html = document.querySelector('html')
html.classList.add(getUserTheme())

root.render(<App />);
