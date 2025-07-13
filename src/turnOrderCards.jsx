import React from 'react';
import { FactionCardIcon, Contract, Rocket } from './icons.jsx';
import { TurnOrderCard } from './cardTemplates.jsx';
import rocketCardImage from './assets/images/icons/rocket-card.svg';
import runeCardImage from './assets/images/icons/rune-card.png';
import contractCardImage from './assets/images/icons/contract-card.svg';
import letterCardImage from './assets/images/icons/letter-card.png';

const rocket = <>
    <img src={runeCardImage} className="card-icon-image" style={{
      height: '40px',
      marginLeft: '5px',
      marginRight: '5px',
    }} />
  </>;
const contract = <>
    <img src={letterCardImage} className="card-icon-image" style={{
      height: '40px',
      marginLeft: '5px',
      marginRight: '5px',
      }} />
    </>;

export const turnOrderCards = [
  (<TurnOrderCard name="1st Player" score={1} type="Turn Order" cards={(
    <>
      {contract} {rocket}
    </>
  )}/>),

  (<TurnOrderCard name="2nd Player" score={1} type="Turn Order" cards={(
    <>
      {contract} {contract} {rocket}
    </>
  )}/>),

  (<TurnOrderCard name="3rd Player" score={2} type="Turn Order" cards={(
    <>
      {contract} {rocket} {rocket}
    </>
  )}/>),

  (<TurnOrderCard name="4th Player" score={1} type="Turn Order" cards={(
    <>
      {contract} {contract} {rocket} {rocket}
    </>
  )}/>),
].map((turnOrderCard) => [React.cloneElement(turnOrderCard, { key: turnOrderCard.props.name })]).flat();
