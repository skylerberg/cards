import React from 'react';
import { Contracts, FactionCardIcon, Ally, Objective, Action, Square, Circle, Droplet, Facility, Destroy, Rocket, Contract, Move, VictoryPoints } from './icons.jsx';
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
      <Action /> Choose 2: draw 1<Rocket />, draw 1<Contract />, or draw 1<FactionCardIcon />.
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

  (<AllyCard name="Consultant" score={-1} type="Ally" ability={(
    <>
      <Action /> Replace a <Facility /> you own with a <Facility /> of a different shape. Use another <Ally /> you own or play a <FactionCardIcon />.
    </>
  )}/>),

  (<AllyCard name="Extremist" score={1} type="Ally" ability={(
    <>
      <Action /> Complete <Contracts />. If you completed at least 1 <Contract /> worth 2<VictoryPoints /> or 5<VictoryPoints />, <Destroy /> any 1 <Facility />.
    </>
  )}/>),

  (<AllyCard name="Miner" score={0} type="Ally" ability={(
    <>
      <Action /> Build 2 <Circle />.
    </>
  )}/>),

  (<AllyCard name="Fuel Supplier" score={-1} type="Ally" ability={(
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
      <Action /> Play 1<FactionCardIcon />. At the end of your turn, draw 1<Rocket />.
    </>
  )}/>),

  (<AllyCard name="Rocket Scientist" score={0} type="Ally" ability={(
    <>
      <Action /> Play 1<Rocket />. If the <Rocket /> does not give you another <Action />, take another <Action />.
    </>
  )}/>),

  (<AllyCard name="Jury Rigger" score={-1} type="Ally" ability={(
    <>
      <Action /> Score a <Contract /> worth 3 <VictoryPoints /> that you do not have a route to complete.
    </>
  )}/>),

  (<AllyCard name="Challenger" score={0} type="Ally" ability={(
    <>
      <Action /> If you have fewer <Facility /> than another player, build 2 <Facility />.
    </>
  )}/>),

  (<AllyCard name="Visionary" score={1} type="Ally" ability={(
    <>
      <Action /> Look at 2 <Objective /> cards, add 1 to the game and put the other on the bottom of the <Objective /> deck. Draw 1<Rocket />.
    </>
  )}/>),

].map((ally) => React.cloneElement(ally, { key: ally.props.name }));
