import React from 'react';
import { FactionCardIcon, Comet, Asteroid, Research, Funds, Ally, Mineral, Contracts, Square, Circle, Droplet, Facility, Destroy, Rocket, Contract, Move, VictoryPoints,  } from './icons.jsx';
import { AllyCard } from './cardTemplates.jsx';

export let allies = [

  (<AllyCard name="Titus Telford" title='Foreman' score={0} type="Ally" cost={2} ability={(
      <>
        Hire, then deliver 1<Contract /> worth <VictoryPoints value={4} /> using the hired courier.
      </>
    )
  }/>),
  //Build a <Facility />. Complete 1<Contract /> worth <VictoryPoints value={4} /> with a route using that <Facility />.

  (<AllyCard name="Violet Vale" title="Socialite" score={0} type="Ally" cost={1} ability={(
    <>
      Move one of your couriers. Deliver <Contracts />. Remove the courier you moved.
    </>
  )}/>),
  //<Move /> a <Facility /> you own. Complete <Contracts />. <Destroy /> the <Facility /> you moved.

  (<AllyCard name="Ursula Uttoxeter" title="Rogue Manager" score={0} type="Ally" cost={1} ability={(
    <>
      Replace one of your couriers. Deliver <Contracts />. Remove the courier you replaced.
    </>
  )}/>),
  //Replace a <Facility /> you own. Complete <Contracts />. <br /> <Destroy /> the <Facility /> you replaced.

  (<AllyCard name="Katherine Kingsbridge" title="Investor" score={0} type="Ally" cost={1} ability={(
    <>
      Deliver <Contracts />.
    </>
  )}/>),

  (<AllyCard name="Alice Ashby" title="Visionary" score={0} type="Ally" cost={2} ability={(
    <>
      Remove one of your couriers to hire twice.
    </>
  )}/>),
  //<Destroy /> a <Facility /> you own to build 2 <Facility />.

  (<AllyCard name="Guy Goole" title="Handler" score={0} type="Ally" cost={1} ability={(
    <>
      Hire on a space not adjacent to any of your other couriers.
    </>
  )}/>),
  //Build a <Facility /> that is not adjacent to any other <Facility /> you own.

  (<AllyCard name="Grace Greenwich" title="Trainer" score={0} type="Ally" cost={1} ability={(
    <>
      Hire a <Circle />.
    </>
  )}/>),

  (<AllyCard name="Oliver Overthorpe" title="Pigeon Fancier" score={0} type="Ally" cost={1} ability={(
    <>
      Hire a <Droplet />.
    </>
  )}/>),

  (<AllyCard name="Horace Horsham" title="Equerry" score={0} type="Ally" cost={1} ability={(
    <>
      Hire a <Square />.
    </>
  )}/>),
  //Pony

  (<AllyCard name="Charles Chaddleworth" title="Jury Rigger" score={0} type="Ally" cost={1} ability={(
    <>
      Score 1<Contract /> worth <VictoryPoints value={3} /> even if you do not have a matching route.
    </>
  )}/>),

  (<AllyCard name="Wesley Warwick" title="Taskmaster" score={0} type="Ally" cost={1} ability={(
    <>
      Deliver 1<Contract /> treating one of your couriers as 2 of that type of courier.
    </>
  )}/>),
  //Complete 1<Contract /> treating a <Facility /> you own as 2 <Facility /> of that shape.

  (<AllyCard name="Mary Markfield" title="Adventurer" score={0} type="Ally" cost={2} ability={(
    <>
      Deliver 1<Contract /> treating 1 <Research /> symbol as any type of courier instead of a bonus.
    </>
  )}/>),
  //Complete 1<Contract /> treating a <Comet /> as a <Facility /> of any shape instead of a <Comet />.

  (<AllyCard name="Zachary Zouch" title="Extremist" score={0} type="Ally" cost={1} ability={(
    <>
      Deliver 1<Contract /> worth <VictoryPoints value={2} /> or <VictoryPoints value={5} /> and double the <Research /> bonus.
    </>
  )}/>),

  (<AllyCard name="Quinn Queensbury" title="Barrister" score={0} type="Ally" cost={1} ability={(
    <>
      Hire a courier adjacent to one of your couriers of the same type.
    </>
  )}/>),
  //Build a <Facility /> that is the same shape as an adjacent <Facility /> you own.

  (<AllyCard name="John Jacobstowe" title="naturalist" score={0} type="Ally" cost={1} ability={(
    <>
      Deliver 1<Contract /> then place 1 <Research /> for each wild courier used.
    </>
  )}/>),

  (<AllyCard name="Sheila Sheffield" title="Strategist" score={0} type="Ally" cost={2} ability={(
    <>
      Swap the position of 2 of your couriers, then deliver <Contracts />.
    </>
  )}/>),

  (<AllyCard name="Anne Adderbury" title="Apprentice" score={0} type="Ally" cost={1} ability={(
    <>
      Remove one of your couriers to hire a courier.
    </>
  )}/>),

  (<AllyCard name="Rose Rye" title="Profiteer" score={0} type="Ally" cost={1} ability={(
    <>
      Put a <Contract /> or <Rocket /> from your hand on the bottom of its deck to hire.
    </>
  )}/>),

  (<AllyCard name="Daisy Dunstable" title="countryman" score={0} type="Ally" cost={1} ability={(
    <>
      Hire adjacent to a wild <Square />.
    </>
  )}/>),

  //(<AllyCard name="Reviewer" score={1} type="Ally" cost={1} ability={(
  //  <>
  //    Remove up to 3 of your <Research />.
  //  </>
  //)}/>),
].map((ally) => React.cloneElement(ally, { key: ally.props.name }));
