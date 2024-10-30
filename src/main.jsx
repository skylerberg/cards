import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/fonts/icons.css';
import { CardPages, TableTopSimulatorPages } from './pages.jsx';
import { allies } from './allies.jsx';
import { rockets } from './rockets.jsx';
import { factionCards, theScavengersCards, cruxCabalCards, unearthIncCards, hydrusGangCards, explorerSocietyCards, cyborgUnionCards } from './factionCards.jsx';
import { achievements } from './achievements.jsx';
import { contracts } from './contracts.jsx';
import { turnOrderCards } from './turnOrderCards.jsx';
import { HelperCard } from './cardTemplates.jsx';
import { FactionMats } from './factionMats.jsx';
import { EndGameCard } from './cardTemplates.jsx';
import { EndGameMarkerPage } from './endGameMarker.jsx';

const rootDiv = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(rootDiv);
const helperCards = [];

for (let i = 0; i < 4; i++) {
  helperCards.push(<HelperCard type="Helper" />);
}

let duplicateFactionCards = [];
for (let i = 0; i < factionCards.length; i += 8) {
  for (let j = 0; j < 4; j++) {
    duplicateFactionCards.push(factionCards[i +j]);
  }
}

let cards = helperCards.concat(contracts).concat(turnOrderCards).concat(allies).concat(rockets).concat(factionCards).concat(achievements).concat([<EndGameCard />, <HelperCard />].concat(duplicateFactionCards).concat(rockets).concat(rockets));

//cards = [
//  unearthIncCards,
//  unearthIncCards[0],
//  unearthIncCards[1],
//  unearthIncCards[2],
//  unearthIncCards[3],
//  explorerSocietyCards,
//  explorerSocietyCards[0],
//  explorerSocietyCards[1],
//  explorerSocietyCards[2],
//  explorerSocietyCards[3],
//  hydrusGangCards,
//  hydrusGangCards[0],
//  hydrusGangCards[1],
//  hydrusGangCards[2],
//  hydrusGangCards[3],
//  rockets,
//  rockets,
//  rockets,
//  allies[1],
//  allies[3],
//  allies[13],
//  allies[16],
//  theScavengersCards[0],
//  theScavengersCards[0],
//  theScavengersCards[7],
//  cruxCabalCards[0],
//  cruxCabalCards[4],
//  cruxCabalCards[6],
//  cruxCabalCards[7],
//  cyborgUnionCards[1],
//  cyborgUnionCards[1],
//  cyborgUnionCards[3],
//  cyborgUnionCards[3],
//  achievements[14],
//  achievements[15],
//].flat();

reactRoot.render(
  <React.StrictMode>
    <FactionMats />
    <CardPages cards={cards}/>
  </React.StrictMode>
);

//reactRoot.render(
//  <React.StrictMode>
//    <TableTopSimulatorPages cards={cards} page={2} side="back" />
//  </React.StrictMode>
//);
