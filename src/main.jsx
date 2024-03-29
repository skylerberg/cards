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
  contracts.slice(30),
  allies,
  //cruxCabalCards[0],
  cruxCabalCards[2],
  cruxCabalCards[5],
  theScavengersCards[5],
  theScavengersCards[3],
  cyborgUnionCards[1],
  unearthIncCards[1],
  rockets[6],
  rockets[6],
  rockets[6],
  turnOrderCards.slice(1),
].flat();

reactRoot.render(
  <React.StrictMode>
    <FactionMats />
    <CardPages cards={cards}/>
  </React.StrictMode>
);
