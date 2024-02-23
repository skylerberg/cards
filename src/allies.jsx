import React from 'react';
import { Contracts, FactionCardIcon, Ally, Action, Square, Circle, Droplet, Facility, Destroy, Rocket, Contract, Move, VictoryPoints } from './icons.jsx';
import { AllyCard } from './cardTemplates.jsx';

export let allies = [

  (<AllyCard name='Foreman' score={-1} type="Ally" ability={(
      <>
        <Action /> Build a <Facility />. Complete 1<Contract /> worth 4 <VictoryPoints /> with a route using that <Facility />.
      </>
    )
  }/>),

  (<AllyCard name="Rogue Pilot" score={0} type="Ally" ability={(
    <>
      <Action /> <Move /> a <Facility /> you own. Complete <Contracts />. <Destroy /> the <Facility /> you moved.

    </>
  )}/>),

  (<AllyCard name="Architect" score={0} type="Ally" ability={(
    <>
      <Action /> Build a <Facility />. You may replace each adjacent <Facility /> you own with a <Facility /> of any shape.
    </>
  )}/>),

  (<AllyCard name="Negotiator" score={-1} type="Ally" ability={(
    <>
      <Action /> Complete 1<Contract /> treating 1 <Facility /> owned by an opponent as though it were your <Facility />.
    </>
  )}/>),

  (<AllyCard name="Generalist" score={0} type="Ally" ability={(
    <>
      <Action /> Draw 1 of each type of card you do not have any of in your hand from the <Contract /> deck, <Rocket /> deck, and your <FactionCardIcon /> deck.
    </>
  )}/>),

  (<AllyCard name="Publicist" score={0} type="Ally" ability={(
    <>
      <Action /> Complete <Contracts />. Restock public <Contracts /> by taking random <Contract /> cards from your opponents’ hands or drawing from the deck.

    </>
  )}/>),

  (<AllyCard name="Insider" score={0} type="Ally" ability={(
    <>
      <Action /> Put a public <Contract /> on the bottom of the <Contract /> deck. Draw 1<Contract />.
    </>
  )}/>),

  (<AllyCard name="Warlord" score={-1} type="Ally" ability={(
    <>
      <Action /> If you have a <Rocket /> in your hand, <Destroy /> a <Facility />. Play 1<Rocket />.
    </>
  )}/>),

  (<AllyCard name="Streamliner" score={0} type="Ally" ability={(
    <>
      <Action /> Complete 1<Contract />. Draw 1<Contract />.
    </>
  )}/>),

  (<AllyCard name="Recycling Expert" score={0} type="Ally" ability={(
    <>
      <Action /> <Destroy /> a <Facility /> you own to build 2 <Facility />.
    </>
  )}/>),

  (<AllyCard name="Opportunist" score={0} type="Ally" ability={(
    <>
      <Action /> Complete <Contracts />. Restock public <Contracts /> immediately. Complete <Contracts />.
    </>
  )}/>),

  (<AllyCard name="Technician" score={1} type="Ally" ability={(
    <>
      <Action /> Draw 2<Rocket />.
    </>
  )}/>),

  (<AllyCard name="Cybernetic Surgeon" score={0} type="Ally" ability={(
    <>
      <Action /> Choose a player. Move 1 of their <Ally /> to the bottom of the <Ally /> deck. They draw 1<Ally />. Draw 1<Contract/>.
    </>
  )}/>),

  (<AllyCard name="Liason" score={0} type="Ally" ability={(
    <>
      <Action /> Give an opponent a card from your hand to build 2 <Facility /> that are adjacent at least 1 of opponent's <Facility />.
    </>
  )}/>),

  (<AllyCard name="Spy" score={0} type="Ally" ability={(
    <>
      <Action /> Take a <FactionCardIcon /> from another player's hand into your hand.
    </>
  )}/>),

].map((ally) => React.cloneElement(ally, { key: ally.props.name }));
