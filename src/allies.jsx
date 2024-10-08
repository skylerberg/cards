import React from 'react';
import { Contracts, FactionCardIcon, Ally, Achievement, Action, Square, Circle, Droplet, Facility, Destroy, Rocket, Contract, Move, VictoryPoints, TakeAnotherAction } from './icons.jsx';
import { AllyCard } from './cardTemplates.jsx';

export let allies = [

  (<AllyCard name='Foreman' score={0} type="Ally" ability={(
      <>
        <Action /> Build a <Facility />. Complete 1 public <Contract /> worth 4 <VictoryPoints /> with a route using that <Facility />.
      </>
    )
  }/>),

  (<AllyCard name="Rogue Pilot" score={1} type="Ally" ability={(
    <>
      <Action /> <Move /> a <Facility /> you own. Complete <Contracts />. <Destroy /> the <Facility /> you moved.

    </>
  )}/>),

  (<AllyCard name="Negotiator" score={0} type="Ally" ability={(
    <>
      <Action /> Complete 1<Contract /> treating 1 <Facility /> owned by an opponent as though it were your <Facility />.
    </>
  )}/>),

  (<AllyCard name="Generalist" score={1} type="Ally" ability={(
    <>
      <Action /> Choose 2: draw 1<Rocket />, draw 1<Contract />, or draw 1<FactionCardIcon />.
    </>
  )}/>),

  (<AllyCard name="Streamliner" score={1} type="Ally" ability={(
    <>
      <Action /> Complete 1<Contract />. Draw 1<Contract />.
    </>
  )}/>),

  (<AllyCard name="Recycling Expert" score={0} type="Ally" ability={(
    <>
      <Action /> <Destroy /> a <Facility /> you own to build 2 <Facility />.
    </>
  )}/>),

  (<AllyCard name="Opportunist" score={1} type="Ally" ability={(
    <>
      <Action /> Complete <Contracts />. Restock public <Contracts />. Complete <Contracts />.
    </>
  )}/>),

  (<AllyCard name="Technician" score={2} type="Ally" ability={(
    <>
      <Action /> Draw 2<Rocket />.
    </>
  )}/>),

  (<AllyCard name="Consultant" score={0} type="Ally" ability={(
    <>
      <Action /> Replace a <Facility /> you own. Use an <Ally /> you own or draw 1<Ally />. You may not use this <Ally /> again this turn.
    </>
  )}/>),

  (<AllyCard name="Extremist" score={1} type="Ally" ability={(
    <>
      <Action /> Complete <Contracts />. If you completed at least 1<Contract /> worth 2<VictoryPoints /> or 5<VictoryPoints />, <Destroy /> any 1 <Facility />.
    </>
  )}/>),

  (<AllyCard name="Miner" score={1} type="Ally" ability={(
    <>
      <Action /> Build 2 <Circle />.
    </>
  )}/>),

  (<AllyCard name="Fuel Supplier" score={0} type="Ally" ability={(
    <>
      <Action /> Build a <Droplet />. Play 1<Rocket />. You may not use this <Ally /> again this turn.
    </>
  )}/>),

  (<AllyCard name="Industrial Engineer" score={0} type="Ally" ability={(
    <>
      <Action /> Build a <Square />. Draw 1<Contract />.
    </>
  )}/>),

  (<AllyCard name="Fanatic" score={0} type="Ally" ability={(
    <>
      <Action /> Play 1<FactionCardIcon />. At the end of your turn, draw 1<Rocket />. You may not use this <Ally /> again this turn.
    </>
  )}/>),

  (<AllyCard name="Rocket Scientist" score={1} type="Ally" ability={(
    <>
      <Action /> Play 1<Rocket />. If "<Action />" does not appear in the text of the <Rocket />, take another <Action />. You may not use this <Ally /> again this turn.
    </>
  )}/>),

  (<AllyCard name="Jury Rigger" score={1} type="Ally" ability={(
    <>
      <Action /> Score a <Contract /> worth 3 <VictoryPoints /> even if you do not have a route to complete it.
    </>
  )}/>),

  (<AllyCard name="Innovator" score={1} type="Ally" ability={(
    <>
      <Action /> Draw 2<Contract /> from beneath the End Game divider.
    </>
  )}/>),

  (<AllyCard name="Challenger" score={1} type="Ally" ability={(
    <>
      <Action /> If you have 2 fewer <Facility /> than another player, build 2 <Facility />.
    </>
  )}/>),

].map((ally) => React.cloneElement(ally, { key: ally.props.name }));
