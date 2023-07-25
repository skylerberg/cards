import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/fonts/icons.css';
import Pages from './pages.jsx';
import { allies } from './allies.jsx';

const rootDiv = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(rootDiv);


reactRoot.render(
  <React.StrictMode>
    <Pages cards={allies}/>
  </React.StrictMode>
);
