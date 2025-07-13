import React from 'react';
import { FactionCardIcon, Comet, Asteroid, Research, Funds, Ally, Mineral, Contracts, Horse, Person, Pigeon, Facility, Destroy, Rocket, Contract, Move, VictoryPoints,  } from './icons.jsx';
import { AllyCard } from './cardTemplates.jsx';

export let allies = [
  (<AllyCard name="Quinn Queensbury" title="Advertiser" score={0} type="Ally" cost={1} ability={(
    <>
      Hire a courier adjacent to one of your couriers of the same type.
    </>
  )}/>),

  (<AllyCard name="Anne Adderbury" title="Apprentice Barrister" score={0} type="Ally" cost={1} ability={(
    <>
      Remove one of your couriers to hire a courier.
    </>
  )}/>),

  (<AllyCard name="Alice Ashby" title="Barrister" score={0} type="Ally" cost={2} ability={(
    <>
      Remove one of your couriers to hire twice.
    </>
  )}/>),

  (<AllyCard name="Mary Markfield" title="Cartographer" score={0} type="Ally" cost={0} ability={(
    <>
      Move 1 of your couriers to a space adjacent to a wild <Pigeon />.
    </>
  )}/>),

  (<AllyCard name="Sheila Sheffield" title="Con Artist" score={0} type="Ally" cost={2} ability={(
    <>
      Swap the position of 2 of your couriers, then deliver <Contracts />.
    </>
  )}/>),

  (<AllyCard name="Daisy Dunstable" title="Equerry" score={0} type="Ally" cost={1} ability={(
    <>
      Hire a <Horse />.
    </>
  )}/>),
  //Pony

  (<AllyCard name="Titus Telford" title="Foreman" score={0} type="Ally" cost={2} ability={(
      <>
        Hire, then deliver 1<Contract /> worth <VictoryPoints value={4} /> using the hired courier.
      </>
    )
  }/>),
  //Build a <Facility />. Complete 1<Contract /> worth <VictoryPoints value={4} /> with a route using that <Facility />.

  (<AllyCard name="Katherine Kingsbridge" title="Jockey" score={0} type="Ally" cost={1} ability={(
    <>
      Deliver <Contracts />.
    </>
  )}/>),

  (<AllyCard name="Guy Goole" title="Handler" score={0} type="Ally" cost={2} ability={(
    <>
      Hire, then deliver 1<Contract /> using a wild <Person /> and the hired courier.
    </>
  )}/>),

  (<AllyCard name="Charles Chaddleworth" title="Jury Rigger" score={0} type="Ally" cost={2} ability={(
    <>
      Hire, then deliver 1<Contract /> worth <VictoryPoints value={3} /> using the hired courier.
    </>
  )}/>),

  (<AllyCard name="John Jacobstowe" title="Librarian" score={0} type="Ally" cost={1} ability={(
    <>
      Deliver 1<Contract /> then place 1 <Research /> for each wild courier used.
    </>
  )}/>),

  (<AllyCard name="Ursula Uttoxeter" title="Outlaw" score={0} type="Ally" cost={2} ability={(
    <>
      Replace one of your couriers. Deliver <Contracts />.
    </>
  )}/>),
  //Replace a <Facility /> you own. Complete <Contracts />. <br /> <Destroy /> the <Facility /> you replaced.

  (<AllyCard name="Oliver Overthorpe" title="Pigeon Trainer" score={0} type="Ally" cost={1} ability={(
    <>
      Hire a <Pigeon />.
    </>
  )}/>),

  (<AllyCard name="Rose Rye" title="Rune Carver" score={0} type="Ally" cost={2} ability={(
    <>
      Put a <Contract /> or <Rocket /> from your hand on the bottom of its deck to hire twice.
    </>
  )}/>),

  (<AllyCard name="Quinn Queensbury" title="Schoolmistress" score={0} type="Ally" cost={1} ability={(
    <>
      Hire a <Person />.
    </>
  )}/>),

  (<AllyCard name="Zachary Zouch" title="Scientist" score={0} type="Ally" cost={1} ability={(
    <>
      Deliver 1<Contract /> worth <VictoryPoints value={2} /> or <VictoryPoints value={5} /> and double the <Research /> bonus.
    </>
  )}/>),

  (<AllyCard name="Horace Horsham" title="Shepherd" score={0} type="Ally" cost={1} ability={(
    <>
      Hire adjacent to a wild <Horse />.
    </>
  )}/>),

  (<AllyCard name="Violet Vale" title="Socialite" score={0} type="Ally" cost={2} ability={(
    <>
      Move one of your couriers. Deliver <Contracts />.
    </>
  )}/>),
  //<Move /> a <Facility /> you own. Complete <Contracts />. <Destroy /> the <Facility /> you moved.

  (<AllyCard name="Wesley Warwick" title="Tycoon" score={0} type="Ally" cost={1} ability={(
    <>
      Deliver 1<Contract /> treating 1 courier used as 2 of that type of courier.
    </>
  )}/>),
  //Complete 1<Contract /> treating a <Facility /> you own as 2 <Facility /> of that shape.


  //(<AllyCard name="Reviewer" score={1} type="Ally" cost={1} ability={(
  //  <>
  //    Remove up to 3 of your <Research />.
  //  </>
  //)}/>),
].map((ally) => React.cloneElement(ally, { key: ally.props.name }));
