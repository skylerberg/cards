import React from 'react';
import { FactionCardIcon, Comet, Asteroid, Research, Funds, Ally, Mineral, Contracts, Square, Circle, Droplet, Facility, Destroy, Rocket, Contract, Move, VictoryPoints,  } from './icons.jsx';
import { AllyCard } from './cardTemplates.jsx';

export let allies = [

  (<AllyCard name='Foreman' score={0} type="Ally" cost={2} ability={(
      <>
        Build a <Facility />. Complete 1<Contract /> worth <VictoryPoints value={4} /> with a route using that <Facility />.
      </>
    )
  }/>),

  (<AllyCard name="Rogue Pilot" score={0} type="Ally" cost={1} ability={(
    <>
      <Move /> a <Facility /> you own. Complete <Contracts />. <Destroy /> the <Facility /> you moved.
    </>
  )}/>),

  (<AllyCard name="Rogue Manager" score={0} type="Ally" cost={1} ability={(
    <>
      Replace a <Facility /> you own. Complete <Contracts />. <br /> <Destroy /> the <Facility /> you replaced.
    </>
  )}/>),

  //(<AllyCard name="Researcher" score={1} type="Ally" cost={2} ability={(
  //  <>
  //    Place 3 <Research />.
  //  </>
  //)}/>),

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

  (<AllyCard name="Technician" score={0} type="Ally" cost={1} ability={(
    <>
      Build a <Facility /> that is not adjacent to any other <Facility /> you own.
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

  (<AllyCard name="Jury Rigger" score={0} type="Ally" cost={1} ability={(
    <>
      Score 1<Contract /> worth <VictoryPoints value={3} /> even if you do not have a matching route.
    </>
  )}/>),

  (<AllyCard name="Double Dealer" score={0} type="Ally" cost={1} ability={(
    <>
      Complete 1<Contract /> treating a <Facility /> you own as 2 <Facility /> of that shape.
    </>
  )}/>),

  (<AllyCard name="Expediter" score={0} type="Ally" cost={2} ability={(
    <>
      Complete 1<Contract /> treating a <Comet /> as a <Facility /> of any shape instead of a <Comet />.
    </>
  )}/>),

  (<AllyCard name="Extremist" score={0} type="Ally" cost={1} ability={(
    <>
      Complete 1<Contract /> worth <VictoryPoints value={2} /> or <VictoryPoints value={5} /> and double the <Research /> bonus.
    </>
  )}/>),

  (<AllyCard name="Replicator" score={0} type="Ally" cost={1} ability={(
    <>
      Build a <Facility /> that is the same shape as an adjacent <Facility /> you own.
    </>
  )}/>),

  (<AllyCard name="Liaison" score={0} type="Ally" cost={1} ability={(
    <>
      Complete 1<Contract /> then place 1 <Research /> for each neutral <Facility /> used.
    </>
  )}/>),

  (<AllyCard name="Teamster" score={0} type="Ally" cost={2} ability={(
    <>
      Swap the position of 2 <Facility /> you own, then complete <Contracts />.
    </>
  )}/>),

  (<AllyCard name="Recycling Protégé" score={0} type="Ally" cost={1} ability={(
    <>
      <Destroy /> a <Facility /> you own to build a <Facility />
    </>
  )}/>),

  (<AllyCard name="Profiteer" score={0} type="Ally" cost={1} ability={(
    <>
      Put a <Contract /> or <Rocket /> from your hand on the bottom of its deck to build a <Facility />.
    </>
  )}/>),

  (<AllyCard name="Freighter Captain" score={0} type="Ally" cost={1} ability={(
    <>
      Build a <Facility /> next to a neutral <Droplet />.
    </>
  )}/>),

  //(<AllyCard name="Reviewer" score={1} type="Ally" cost={1} ability={(
  //  <>
  //    Remove up to 3 of your <Research />.
  //  </>
  //)}/>),
].map((ally) => React.cloneElement(ally, { key: ally.props.name }));
