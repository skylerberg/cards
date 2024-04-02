import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/fonts/icons.css';
import { CardPages } from './pages.jsx';
import { allies } from './allies.jsx';
import { rockets } from './rockets.jsx';
import { factionCards, theScavengersCards, cruxCabalCards, unearthIncCards, hydrusGangCards, explorerSocietyCards, cyborgUnionCards } from './factionCards.jsx';
import { objectives } from './objectives.jsx';
import { contracts } from './contracts.jsx';
import { turnOrderCards } from './turnOrderCards.jsx';
import { FactionMats } from './factionMats.jsx';
import { EndGameCard } from './cardTemplates.jsx';

const rootDiv = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(rootDiv);

//const cards = contracts.concat(turnOrderCards).concat(allies).concat(rockets).concat(factionCards).concat(objectives).concat([<EndGameCard />]);
const cards = [
  objectives[12],
  objectives[17],

].flat();

reactRoot.render(
  <React.StrictMode>
    <FactionMats />
    <CardPages cards={cards}/>
  </React.StrictMode>
);
