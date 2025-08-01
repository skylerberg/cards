import React from 'react';
import { Research, Contracts, Horse, Person, Pigeon, Contract, VictoryPoints,  } from './icons.jsx';
import { AllyCard } from './cardTemplates.jsx';

export let allies = [
  (<AllyCard name="Quinn Queensbury" title="Tycoon" score={0} type="Ally" cost={1} ability={(
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

  (<AllyCard name="Sheila Sheffield" title="Con Artist" score={0} type="Ally" cost={2} ability={(
    <>
      Swap the position of 2 of your couriers, then deliver <Contracts />.
    </>
  )}/>),

  (<AllyCard name="Ursula Uttoxeter" title="Outlaw" score={0} type="Ally" cost={2} ability={(
    <>
      Replace one of your couriers, then deliver <Contracts />.
    </>
  )}/>),

  (<AllyCard name="Violet Vale" title="Cartographer" score={0} type="Ally" cost={2} ability={(
    <>
      Move one of your couriers, then deliver <Contracts />.
    </>
  )}/>),

  (<AllyCard name="Charles Chaddleworth" title="Scoundrel" score={0} type="Ally" cost={1} ability={(
    <>
      Deliver 1<Contract /> using one courier belonging to another player.
    </>
  )}/>),

  (<AllyCard name="Titus Telford" title="Foreman" score={0} type="Ally" cost={2} ability={(
      <>
        Hire, then deliver 1<Contract /> worth <VictoryPoints value={4} /> using the hired courier.
      </>
    )
  }/>),

  (<AllyCard name="Zachary Zouch" title="Scientist" score={0} type="Ally" cost={1} ability={(
    <>
      Deliver 1<Contract /> worth <VictoryPoints value={3} /> and double the <Research /> bonus.
    </>
  )}/>),

  (<AllyCard name="John Jacobstowe" title="Librarian" score={0} type="Ally" cost={1} ability={(
    <>
      Deliver 1<Contract /> then place 1 <Research /> if you used a wild courier.
    </>
  )}/>),


  (<AllyCard name="Katherine Kingsbridge" title="Jockey" score={0} type="Ally" cost={1} ability={(
    <>
      Deliver up to 2<Contract />.
    </>
  )}/>),

  (<AllyCard name="Daisy Dunstable" title="Equerry" score={0} type="Ally" cost={1} ability={(
    <>
      Hire a <Horse />.
    </>
  )}/>),

  (<AllyCard name="Oliver Overthorpe" title="Pigeon Trainer" score={0} type="Ally" cost={1} ability={(
    <>
      Hire a <Pigeon />.
    </>
  )}/>),

  (<AllyCard name="Quinn Queensbury" title="Schoolmistress" score={0} type="Ally" cost={1} ability={(
    <>
      Hire a <Person />.
    </>
  )}/>),

  (<AllyCard name="Warwick" title="Stamp Collector" score={0} type="Ally" cost={2} ability={(
    <>
      Deliver 1<Contract /> and collect <VictoryPoints value={2} />.
    </>
  )}/>),

  (<AllyCard name="Rose Rye" title="Rune Carver" score={0} type="Ally" cost={2} ability={(
    <>
    </>
  )}/>),

  (<AllyCard name="Mary Markfield" title="Socialite" score={0} type="Ally" cost={0} ability={(
    <>
    </>
  )}/>),

  (<AllyCard name="Guy Goole" title="Jury Rigger" score={0} type="Ally" cost={2} ability={(
    <>
    </>
  )}/>),

  (<AllyCard name="Horace Horsham" title="Shepherd" score={0} type="Ally" cost={1} ability={(
    <>
    </>
  )}/>),

  (<AllyCard name="Wesley Warwick" title="Advertiser" score={0} type="Ally" cost={1} ability={(
    <>
    </>
  )}/>),



      //Hire adjacent to a wild <Horse />.

  //(<AllyCard name="Reviewer" score={1} type="Ally" cost={1} ability={(
  //  <>
  //    Remove up to 3 of your <Research />.
  //  </>
  //)}/>),
].map((ally) => React.cloneElement(ally, { key: ally.props.name }));
