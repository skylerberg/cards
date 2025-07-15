import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/fonts/icons.css';
import { CardPages, TableTopSimulatorPages } from './pages.jsx';
import { allies } from './allies.jsx';
import { rockets } from './rockets.jsx';
import { achievements } from './achievements.jsx';
import { contracts } from './contracts.jsx';
import { turnOrderCards } from './turnOrderCards.jsx';
import { HelperCard } from './cardTemplates.jsx';
import { FactionMats } from './factionMats.jsx';
import { EndGameMarkerPage } from './endGameMarker.jsx';

const rootDiv = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(rootDiv);
const helperCards = [];

for (let i = 0; i < 4; i++) {
  helperCards.push(<HelperCard type="Helper" />);
}

let cards = allies.concat(rockets).concat(contracts).concat(turnOrderCards).concat(helperCards).concat(achievements);

cards = [
  rockets[0],
  rockets[0],
  rockets[0],
  rockets[3],
  rockets[3],
  rockets[3],
  rockets[4],
  rockets[4],
  rockets[4],
].flat();

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
