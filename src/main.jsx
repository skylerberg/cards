import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/fonts/icons.css';
import { CardPages } from './pages.jsx';
import { allies } from './allies.jsx';
import { rockets } from './rockets.jsx';
import { factionCards, cruxCabalCards, zenithCapitalCards, hydrusGangCards, explorerSocietyCards, cyborgUnionCards } from './factionCards.jsx';
import { objectives } from './objectives.jsx';
import { contracts } from './contracts.jsx';
import { turnOrderCards } from './turnOrderCards.jsx';
import { FactionMats } from './factionMats.jsx';

const rootDiv = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(rootDiv);

//const cards = contracts.concat(turnOrderCards).concat(allies).concat(rockets).concat(factionCards).concat(objectives);
const cards = [
  contracts.slice(27),
  turnOrderCards,
//  cyborgUnionCards[6],
//  explorerSocietyCards[1],
//  explorerSocietyCards[3],
//  explorerSocietyCards[4],
  hydrusGangCards[5],
  //cruxCabalCards[3],
//  cruxCabalCards[6],
//rockets[1],
  allies[10],
  allies[3],
//contracts[18],
].flat();

reactRoot.render(
  <React.StrictMode>
    <CardPages cards={cards}/>
    <FactionMats />
  </React.StrictMode>
);
