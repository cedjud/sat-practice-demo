import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Get mock data
import data from '../data.json';

// Import CSS for webpack
import './index.css';

ReactDOM.render(
  <App data={data}/>,
  document.getElementById('root')
);
