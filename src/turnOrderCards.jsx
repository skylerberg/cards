import React from 'react';
import { FactionCardIcon, Contract, Rocket } from './icons.jsx';
import { TurnOrderCard } from './cardTemplates.jsx';

export const turnOrderCards = [
  (<TurnOrderCard name="1st Player" score={0} type="Turn Order" text={(
    <>
      Draw <FactionCardIcon /> <FactionCardIcon /> <Rocket />.
    </>
  )}/>),

  (<TurnOrderCard name="2nd Player" score={0} type="Turn Order" text={(
    <>
      Draw <FactionCardIcon /> <FactionCardIcon /> <Contract /> <Rocket />.
    </>
  )}/>),

  (<TurnOrderCard name="3rd Player" score={1} type="Turn Order" text={(
    <>
      Draw <FactionCardIcon /> <FactionCardIcon /> <Contract /> <Rocket />.
    </>
  )}/>),

  (<TurnOrderCard name="4th Player" score={2} type="Turn Order" text={(
    <>
      Draw <FactionCardIcon /> <FactionCardIcon /> <Contract /> <Rocket />.
    </>
  )}/>),
].map((turnOrderCard) => [React.cloneElement(turnOrderCard, { key: turnOrderCard.props.name })]).flat();
