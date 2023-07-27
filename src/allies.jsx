import React from 'react';
import { Contracts, Action, Facility, Asteroid, Destroy, Rotate, Rocket, Contract, Move } from './icons.jsx';
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

  (<AllyCard name='Foreman' score={-1} ability={(
      <>
        <Action /> Build a <Facility />. Complete 1 <Contract /> worth 4 or more points with a route using that <Facility />.
      </>
    )
  }/>),

  (<AllyCard name="Coordinator" score={0} ability={(
    <>
      <Action /> Play <Rocket />. Then, complete 1 <Contract /> you have a route for.
    </>
  )}/>),

  (<AllyCard name="Rogue Pilot" score={1} ability={(
    <>
      <Action /> <Move /> 1 of your <Facility /> to any empty space.
    </>
  )}/>),

  (<AllyCard name="Spy" score={1} ability={(
    <>
      <Action /> Perform the <Action /> on another player's ally.
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
      <Action /> Rotate 1 <Asteroid /> to any position.
    </>
  )}/>),

  (<AllyCard name="Informant" score={0} ability={(
    <>
      <Action /> Look at the top card of any deck. Take a different <Action />.
    </>
  )}/>),

  (<AllyCard name="Evictor" score={0} ability={(
    <>
      <Action /> Move an opponent's <Facility /> that is adjacent to at least 1 of your <Facility /> to a space adjacent to 1 of their <Facility />. Build a <Facility />.
    </>
  )}/>),

  (<AllyCard name="Warlord" score={1} ability={(
    <>
      <Action /> Score a <Rocket /> without performing its ability. Then <Destroy /> any 1 <Facility />.
    </>
  )}/>),

  (<AllyCard name='Launch Director' score={1} ability={(
    <>
      <Action /> <Rotate /> any <Asteroid /> 1 space clockwise. Play <Rocket />.
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
      <Action /> Put a card from your hand onto the bottom of its deck. Draw from that deck. Take a different <Action />.
    </>
  )}/>),

  (<AllyCard name="Opportunist" score={0} ability={(
    <>
      <Action /> Complete <Contracts />. If you completed any public <Contracts />, restock them immediately and take this <Action /> again.
    </>
  )}/>),

].map((ally) => React.cloneElement(ally, { key: ally.props.name }));
