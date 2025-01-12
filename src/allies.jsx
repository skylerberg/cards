import React from 'react';
import { FactionCardIcon, To, Research, Funds, Ally, Mineral, Action, Contracts, Square, Circle, Droplet, Facility, Destroy, Rocket, Contract, Move, VictoryPoints,  } from './icons.jsx';
import { AllyCard } from './cardTemplates.jsx';

export let allies = [

  (<AllyCard name='Foreman' score={0} type="Ally" ability={(
      <>
        <Funds cost={2}/> Build a <Facility />. Complete 1<Contract /> worth 4 <VictoryPoints /> with a route using that <Facility />.
      </>
    )
  }/>),

  (<AllyCard name="Rogue Pilot" score={1} type="Ally" ability={(
    <>
      <Funds cost={1}/> <Move /> a <Facility /> you own. Complete 1<Contract />. <Destroy /> the <Facility /> you moved.
    </>
  )}/>),

  (<AllyCard name="Negotiator" score={0} type="Ally" ability={(
    <>
      <Funds cost={2}/> Complete 1<Contract /> treating 1 <Facility /> owned by an opponent as though it were your <Facility />.
    </>
  )}/>),

  (<AllyCard name="Researcher" score={1} type="Ally" ability={(
    <>
      <Funds cost={2} /> Place 3 <Research />.
    </>
  )}/>),

  (<AllyCard name="Streamliner" score={0} type="Ally" ability={(
    <>
      <Funds cost={1} /> Complete <Contracts />.
    </>
  )}/>),

  (<AllyCard name="Recycling Expert" score={0} type="Ally" ability={(
    <>
      <Funds cost={2} /> <Destroy /> a <Facility /> you own to build 2 <Facility />.
    </>
  )}/>),

  (<AllyCard name="Opportunist" score={1} type="Ally" ability={(
    <>
      <Funds cost={2} /> Complete <Contracts />. Restock public <Contracts />. Complete <Contracts />.
    </>
  )}/>),

  (<AllyCard name="Technician" score={0} type="Ally" ability={(
    <>
      <Funds cost={1} /> Build a <Facility /> on a space not adjacent to any other <Facility /> you own.
    </>
  )}/>),

  (<AllyCard name="Consultant" score={1} type="Ally" ability={(
    <>
      <Funds cost={1} /> Replace a <Facility /> you own.
    </>
  )}/>),

  (<AllyCard name="Extremist" score={1} type="Ally" ability={(
    <>
      <Funds cost={2} /> Complete <Contracts />. If any completed <Contract /> was worth 2 or 5 <VictoryPoints />, <Destroy /> any 1 <Facility />.
    </>
  )}/>),

  (<AllyCard name="Miner" score={0} type="Ally" ability={(
    <>
      <Funds cost={1} /> Build a <Circle />.
    </>
  )}/>),

  (<AllyCard name="Fuel Supplier" score={0} type="Ally" ability={(
    <>
      <Funds cost={1} /> Build a <Droplet />.
    </>
  )}/>),

  (<AllyCard name="Industrial Engineer" score={0} type="Ally" ability={(
    <>
      <Funds cost={1} /> Build a <Square />.
    </>
  )}/>),

  (<AllyCard name="Loyalist" score={1} type="Ally" ability={(
    <>
      <Funds cost={0} /> The first time you play a <FactionCardIcon /> this turn, gain <Funds cost={1} />.
    </>
  )}/>),

  (<AllyCard name="Rocket Scientist" score={1} type="Ally" ability={(
    <>
      <Funds cost={0} /> Play a <Rocket /> without paying its cost.
    </>
  )}/>),

  (<AllyCard name="Jury Rigger" score={1} type="Ally" ability={(
    <>
      <Funds cost={2} /> Score 1<Contract /> worth 3 <VictoryPoints /> even if you do not have a route to complete it.
    </>
  )}/>),

  (<AllyCard name="Innovator" score={1} type="Ally" ability={(
    <>
      <Funds cost={1} /> Draw 1<Contract /> from anywhere in the <Contract /> deck.
    </>
  )}/>),

  (<AllyCard name="Challenger" score={0} type="Ally" ability={(
    <>
      <Funds cost={1} /> If you have fewer <Facility /> than another player, build a <Facility />.
    </>
  )}/>),

].map((ally) => React.cloneElement(ally, { key: ally.props.name }));
