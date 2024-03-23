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

  /*
  (<AllyCard name="Insider" score={0} type="Ally" ability={(
    <>
      <Action /> Put a public <Contract /> on the bottom of the <Contract /> deck. Draw 1<Contract />.
    </>
  )}/>),
  */

  /*
  (<AllyCard name="Warlord" score={0} type="Ally" ability={(
    <>
      <Action /> Build a <Facility />. <Destroy /> a <Facility />. The player whose facility you <Destroy /> draws 1<Contract />.
    </>
  )}/>),
  */

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

  /*
  (<AllyCard name="Cybernetic Surgeon" score={1} type="Ally" ability={(
    <>
      <Action /> Build a <Facility />. Choose a player. Move 1 of their <Ally /> to the bottom of the <Ally /> deck. They draw 1<Ally />.
    </>
  )}/>),
  */

  (<AllyCard name="Liaison" score={0} type="Ally" ability={(
    <>
      <Action /> Give an opponent 1<Ally /> you own or a card from your hand to build 2 <Facility />.
    </>
  )}/>),

  (<AllyCard name="Spy" score={0} type="Ally" ability={(
    <>
      <Action /> Take 1 <FactionCardIcon /> from each opponent's hand. <i>You do not get to look their hands.</i>
    </>
  )}/>),

  (<AllyCard name="Architect" score={1} type="Ally" ability={(
    <>
      <Action /> Build a <Facility />. Put a card from your hand on the bottom of its deck and draw from that deck.
    </>
  )}/>),

  (<AllyCard name="Miner" score={0} type="Ally" ability={(
    <>
      <Action /> Build 2 <Circle />.
    </>
  )}/>),

  (<AllyCard name="Fuel Supplier" score={0} type="Ally" ability={(
    <>
      <Action /> Build a <Droplet />. Play 1<Rocket />.
    </>
  )}/>),

  (<AllyCard name="Industrial Engineer" score={-1} type="Ally" ability={(
    <>
      <Action /> Build a <Square />. Draw 1<Contract />.
    </>
  )}/>),

  (<AllyCard name="Fanatic" score={-1} type="Ally" ability={(
    <>
      <Action /> Play 1<FactionCardIcon />. At the end of your turn, draw 1<FactionCardIcon />.
    </>
  )}/>),

  (<AllyCard name="Rocket Scientist" score={0} type="Ally" ability={(
    <>
      <Action /> Play 1<Rocket />. If the <Rocket /> does not give you another <Action />, take another <Action />.
    </>
  )}/>),

  /*
  (<AllyCard name="Boss" score={0} type="Ally" ability={(
    <>
      <Action /> Choose other 1<Ally /> you own and use its <Action /> twice then put it on the bottom of the <Ally /> deck.
    </>
  )}/>),
  */

  (<AllyCard name="Mastermind" score={0} type="Ally" ability={(
    <>
      <Action /> Put 1 of your scored <Contract /> on the bottom of the <Contract /> deck. Take 2 <Action />. You may not use Mastermind again this turn.
    </>
  )}/>),

  (<AllyCard name="Pioneer" score={0} type="Ally" ability={(
    <>
      <Action /> Build 2 <Facility /> that are not adjacent to each other or any other non-neutral <Facility />.
    </>
  )}/>),

].map((ally) => React.cloneElement(ally, { key: ally.props.name }));
