import React from 'react';
import { Contracts, Action, Facility, Destroy, Rocket, Contract, Move, VictoryPoints } from './icons.jsx';
import { AllyCard } from './cardTemplates.jsx';

export let allies = [

  (<AllyCard name="Diplomat" score={1} ability={(
    <>
      <Action /> Build an opponent's <Facility />. That opponent builds 2 of your <Facility /> adjacent to each other.
    </>
  )}/>),

  (<AllyCard name="Rocket Scientist" score={1} ability={(
      <>
        <Action /> Draw 2 <Rocket />.
      </>
    )}/>),

  (<AllyCard name='Remodeler' score={1} ability={(
      <>
        <Action /> Swap the position of 2 of your <Facility />.
      </>
    )
  }/>),

  (<AllyCard name='Foreman' score={0} ability={(
      <>
        <Action /> Build a <Facility />. Complete 1 <Contract /> worth 4 or more <VictoryPoints /> with a route using that <Facility />.
      </>
    )
  }/>),

  (<AllyCard name="Coordinator" score={0} ability={(
    <>
      <Action /> Play <Rocket />. Complete <Contracts />.
    </>
  )}/>),

  (<AllyCard name="Rogue Pilot" score={0} ability={(
    <>
      <Action /> <Move /> a <Facility /> you own. Complete <Contracts />. <Destroy /> the <Facility /> you moved.

    </>
  )}/>),

  (<AllyCard name="Architect" score={0} ability={(
    <>
      <Action /> Build a <Facility />. You may replace each adjacent <Facility /> you own with a <Facility /> of any shape.
    </>
  )}/>),

  (<AllyCard name="Negotiator" score={0} ability={(
    <>
      <Action /> Complete 1 <Contract /> treating 1 <Facility /> that is not yours as though it were your <Facility />.
    </>
  )}/>),

  (<AllyCard name="Generalist" score={0} ability={(
    <>
      <Action /> Draw 1 of each type of card you do not have any of in your hand from the contracts deck, rockets deck, and your faction deck.
    </>
  )}/>),

  (<AllyCard name="Supplier" score={1} ability={(
    <>
      <Action /> All players draw a <Rocket />. Take another <Action />. You may not use this <Action /> again this turn.
    </>
  )}/>),

  (<AllyCard name="Publicist" score={0} ability={(
    <>
      <Action /> Complete <Contracts />. Restock public <Contracts /> by taking random <Contract /> cards from your opponents’ hands or drawing from the deck.

    </>
  )}/>),

  (<AllyCard name="Insider" score={0} ability={(
    <>
      <Action /> Put a public <Contract /> on the bottom of the <Contract /> deck. Draw <Contract />.
    </>
  )}/>),

  (<AllyCard name="Warlord" score={1} ability={(
    <>
      <Action /> Score a <Rocket /> without performing its ability to <Destroy /> any 1 <Facility />.
    </>
  )}/>),

  (<AllyCard name='Launch Director' score={1} ability={(
    <>
      <Action /> This card is no longer in the game.
    </>
  )}/>),

  (<AllyCard name="Streamliner" score={0} ability={(
    <>
      <Action /> Complete 1 <Contract />. Draw a <Contract />.
    </>
  )}/>),

  (<AllyCard name="Recycling Expert" score={0} ability={(
    <>
      <Action /> <Destroy /> 1 of your <Facility /> to build 2 <Facility />.
    </>
  )}/>),

  (<AllyCard name="Researcher" score={0} ability={(
    <>
      <Action /> Put a card from your hand onto the bottom of its deck. Draw from that deck. Take a another <Action />. You may not use this <Action /> again this turn.
    </>
  )}/>),

  (<AllyCard name="Opportunist" score={0} ability={(
    <>
      <Action /> Complete <Contracts />. Restock public <Contracts /> immediately. You may take this <Action /> again.
    </>

  )}/>),

].map((ally) => React.cloneElement(ally, { key: ally.props.name }));
