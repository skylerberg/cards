import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/fonts/icons.css';
import { CardPages } from './pages.jsx';
import { allies } from './allies.jsx';
import { rockets } from './rockets.jsx';
import { factionCards } from './factionCards.jsx';
import { FactionMats } from './factionMats.jsx';

const rootDiv = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(rootDiv);


reactRoot.render(
  <React.StrictMode>
    <CardPages cards={allies.concat(rockets).concat(factionCards)}/>
    <FactionMats />
  </React.StrictMode>
);
