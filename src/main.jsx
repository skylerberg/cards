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

const rootDiv = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(rootDiv);

//const cards = contracts.concat(turnOrderCards).concat(allies).concat(rockets).concat(factionCards).concat(objectives);
const cards = [
  objectives[0],
  objectives[1],
  objectives[2],
  objectives[16],
  objectives[17],
  objectives[18],
  objectives[19],
  objectives[20],
  allies[11],
  allies[12],
  allies[13],
  allies[14],
  allies[18],
  allies[19],
  allies[20],
  cyborgUnionCards[1],
  cyborgUnionCards[2],
  cyborgUnionCards[6],
  cyborgUnionCards[4],
  explorerSocietyCards.slice(0, 6),
  explorerSocietyCards[7],
  unearthIncCards[4],
  unearthIncCards[6],
  theScavengersCards[1],
  theScavengersCards[5],
  rockets[1],
  rockets[1],
  rockets[1],
  rockets[2],
  rockets[2],
  rockets[2],
].flat();

reactRoot.render(
  <React.StrictMode>
    <FactionMats />
    <CardPages cards={cards}/>
  </React.StrictMode>
);
