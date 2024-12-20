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

let cards = allies.concat(rockets).concat(factionCards).concat(achievements).concat(contracts).concat(turnOrderCards).concat(helperCards)
  .concat(duplicateFactionCards).concat(rockets).concat(rockets);

cards = [
  turnOrderCards,
  helperCards,
  allies[16]
].flat();

reactRoot.render(
  <React.StrictMode>
    <CardPages cards={cards}/>
  </React.StrictMode>
);

//<EndGameMarkerPage />
//<FactionMats />
//reactRoot.render(
//  <React.StrictMode>
//    <TableTopSimulatorPages cards={cards} page={2} side="back" />
//  </React.StrictMode>
//);
