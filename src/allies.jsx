import React from 'react';
import { FactionCardIcon, Asteroid, Research, Funds, Ally, Mineral, Contracts, Square, Circle, Droplet, Facility, Destroy, Rocket, Contract, Move, VictoryPoints,  } from './icons.jsx';
import { AllyCard } from './cardTemplates.jsx';

export let allies = [

  (<AllyCard name='Foreman' score={0} type="Ally" cost={2} ability={(
      <>
        Build a <Facility />. Complete 1<Contract /> worth <VictoryPoints value={4} /> with a route using that <Facility />.
      </>
    )
  }/>),

  (<AllyCard name="Rogue Pilot" score={1} type="Ally" cost={1} ability={(
    <>
      <Move /> a <Facility /> you own. Complete 1<Contract />. <Destroy /> the <Facility /> you moved.
    </>
  )}/>),

  (<AllyCard name="Researcher" score={1} type="Ally" cost={2} ability={(
    <>
      Place 3 <Research />.
    </>
  )}/>),

  (<AllyCard name="Streamliner" score={0} type="Ally" cost={1} ability={(
    <>
      Complete <Contracts />.
    </>
  )}/>),

  (<AllyCard name="Recycling Expert" score={0} type="Ally" cost={2} ability={(
    <>
      <Destroy /> a <Facility /> you own to build 2 <Facility />.
    </>
  )}/>),

  (<AllyCard name="Opportunist" score={1} type="Ally" cost={2} ability={(
    <>
      Complete <Contracts />. Restock public&nbsp;<Contracts />. Complete <Contracts />.
    </>
  )}/>),

  (<AllyCard name="Technician" score={0} type="Ally" cost={1} ability={(
    <>
      Build a <Facility /> that is not adjacent to any other <Facility /> you own.
    </>
  )}/>),

  (<AllyCard name="Extremist" score={1} type="Ally" cost={2} ability={(
    <>
      Complete <Contracts />. <br/> If any completed <Contract /> was worth <VictoryPoints value={2}/> or <VictoryPoints value={5}/>, <Destroy /> any 1 <Facility />.
    </>
  )}/>),

  (<AllyCard name="Miner" score={0} type="Ally" cost={1} ability={(
    <>
      Build a <Circle />.
    </>
  )}/>),

  (<AllyCard name="Fuel Supplier" score={0} type="Ally" cost={1} ability={(
    <>
      Build a <Droplet />.
    </>
  )}/>),

  (<AllyCard name="Industrial Engineer" score={0} type="Ally" cost={1} ability={(
    <>
      Build a <Square />.
    </>
  )}/>),

  (<AllyCard name="Rocket Scientist" score={1} type="Ally" cost={0} ability={(
    <>
      Play a <Rocket /> without paying its cost.
    </>
  )}/>),

  (<AllyCard name="Jury Rigger" score={1} type="Ally" cost={2} ability={(
    <>
      Score 1<Contract /> worth <VictoryPoints value={3} /> even if you do not have a route to complete it.
    </>
  )}/>),

  (<AllyCard name="Innovator" score={1} type="Ally" cost={1} ability={(
    <>
      Draw 1<Contract /> from anywhere in the <Contract /> deck.
    </>
  )}/>),

  (<AllyCard name="Arms Dealer" score={1} type="Ally" cost={1} ability={(
    <>
      Take a random <Rocket /> from another player's hand. They draw 1<Ally />.
    </>
  )}/>),

  (<AllyCard name="Scrapper" score={2} type="Ally" cost={2} ability={(
    <>
      <Destroy /> a <Facility /> you own to draw 1<Rocket />, 1<Contract />, and 1 <Ally />.
    </>
  )}/>),

  (<AllyCard name="Contract Lawyer" score={1} type="Ally" cost={2} ability={(
    <>
      Draw 1<Contract />. Complete <Contracts />.
    </>
  )}/>),

  (<AllyCard name="Rocket Man" score={1} type="Ally" cost={1} ability={(
    <>
      Rotate 1 <Asteroid /> to any position.
    </>
  )}/>),

].map((ally) => React.cloneElement(ally, { key: ally.props.name }));
