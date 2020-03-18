// React
import React from 'react';
import ReactDom from 'react-dom';
import App from './src/pages/App/App';

const appNode = document.querySelector('#app');

ReactDom.render(<App />, appNode);
