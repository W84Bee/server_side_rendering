// Startup point for the client side application
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

// Use Hydrate instead of render to make sure that this is working
ReactDOM.hydrate(<Home />, document.querySelector('#root'));