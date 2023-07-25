import React from 'react';
import { Icon, ContractsIcon } from './icons.jsx';
import { AllyCard } from './cardTemplates.jsx';

export let allies = [

  (<AllyCard name="Diplomat" score={1} ability={(
    <>
      <Icon name="action" /> Build an opponent's <Icon name="facility" />. That opponent builds 2 of your <Icon name="facility" /> adjacent to each other.
    </>
  )}/>),

  (<AllyCard name="Rocket Scientist" score={1} ability={(
      <>
        <Icon name="action" /> Draw 2 <Icon name="rocket" />.
      </>
    )}/>),

  (<AllyCard name='Remodeler' score={1} ability={(
      <>
        <Icon name="action" /> Swap the position of 2 of your <Icon name="facility" />.
      </>
    )
  }/>),

  (<AllyCard name='Foreman' score={-1} ability={(
      <>
        <Icon name="action" /> Build a <Icon name="facility" />. Complete 1 <Icon name="contract" /> worth 4 or more points with a route using that <Icon name="facility" />.
      </>
    )
  }/>),

  (<AllyCard name="Coordinator" score={0} ability={(
    <>
      <Icon name="action" /> Play <Icon name="rocket" />. Then, complete 1 <Icon name="contract" /> you have a route for.
    </>
  )}/>),

  (<AllyCard name="Rogue Pilot" score={1} ability={(
    <>
      <Icon name="action" /> <Icon name="move" /> 1 of your <Icon name="facility" /> to any <Icon name="empty-space" />.
    </>
  )}/>),

  (<AllyCard name="Spy" score={1} ability={(
    <>
      <Icon name="action" /> Perform the <Icon name="action" /> on another player's ally.
    </>
  )}/>),

  (<AllyCard name="Negotiator" score={0} ability={(
    <>
      <Icon name="action" /> Complete 1 <Icon name="contract" /> treating 1 <Icon name="facility" /> that is not yours as though it were your <Icon name="facility" />.
    </>
  )}/>),

  (<AllyCard name="Generalist" score={0} ability={(
    <>
      <Icon name="action" /> Draw 1 of each type of card you do not have any of in your hand from the contracts deck, rockets deck, and your faction deck.
    </>
  )}/>),

  (<AllyCard name="Supplier" score={1} ability={(
    <>
      <Icon name="action" /> Rotate 1 <Icon name="asteroid" /> to any position.
    </>
  )}/>),

  (<AllyCard name="Informant" score={0} ability={(
    <>
      <Icon name="action" /> Look at the top card of any deck. Take a different <Icon name="action" />.
    </>
  )}/>),

  (<AllyCard name="Evictor" score={0} ability={(
    <>
      <Icon name="action" /> Move an opponent's <Icon name="facility" /> that is adjacent to at least 1 of your <Icon name="facility" /> to a space adjacent to 1 of their <Icon name="facility" />. Build a <Icon name="facility" />.
    </>
  )}/>),

  (<AllyCard name="Warlord" score={1} ability={(
    <>
      <Icon name="action" /> Score a <Icon name="rocket" /> without performing its ability. Then <Icon name="destroy" /> any 1 <Icon name="facility" />.
    </>
  )}/>),

  (<AllyCard name='Launch Director' score={1} ability={(
    <>
      <Icon name="action" /> <Icon name="rotate-clockwise" /> any <Icon name="asteroid" /> 1 space clockwise. Play <Icon name="rocket" />.
    </>
  )}/>),

  (<AllyCard name="Streamliner" score={0} ability={(
    <>
      <Icon name="action" /> Complete 1 <Icon name="contract" />. Draw a <Icon name="contract" />.
    </>
  )}/>),

  (<AllyCard name="Recycling Expert" score={0} ability={(
    <>
      <Icon name="action" /> <Icon name="destroy" /> 1 of your <Icon name="facility" /> to build 2 <Icon name="facility" />.
    </>
  )}/>),

  (<AllyCard name="Researcher" score={0} ability={(
    <>
      <Icon name="action" /> Put a card from your hand onto the bottom of its deck. Draw from that deck. Take a different <Icon name="action" />.
    </>
  )}/>),

  (<AllyCard name="Opportunist" score={0} ability={(
    <>
      <Icon name="action" /> Complete <ContractsIcon />. If you completed any public <ContractsIcon />, restock them immediately and take this <Icon name="action" /> again.
    </>
  )}/>),

].map((ally) => React.cloneElement(ally, { key: ally.props.name }));
