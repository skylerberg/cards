import React from 'react';
import { Contracts, Comet, Droplet, Circle, Square, Ally, Action, Facility, Asteroid, Destroy, Rocket, Contract, FactionCardIcon, TakeAnotherAction } from './icons.jsx';
import { FactionCard } from './cardTemplates.jsx';

export const theScavengersCards = [
  (<FactionCard name="Close Enough" score={0} type="The Scavengers" ability={(
    <>
      Complete 1<Contract /> treating 1 <Facility /> you own as though it is a different shape. Draw 1<FactionCardIcon />.
    </>
  )}/>),

  (<FactionCard name="Frozen Assets" score={1} type="The Scavengers" ability={(
    <>
      Complete 1<Contract /> treating a <Comet /> between 2 <Facility /> in the route as a <Facility /> of any shape in addition to being a <Comet />.
    </>
  )}/>),

  (<FactionCard name='"Borrow"' score={1} type="The Scavengers" ability={(
    <>
      Complete 1<Contract /> treating up to 2 <Facility /> you don't own as if you own them.
    </>
  )}/>),

  (<FactionCard name="Quick & Dirty" score={1} type="The Scavengers" ability={(
    <>
      Build a <Facility />. Complete 1<Contract />. <Destroy /> the <Facility /> you built.
    </>
  )}/>),

  (<FactionCard name="Misuse" score={0} type="The Scavengers" ability={(
    <>
      Complete 1<Contract /> treating each neutral <Facility /> used as any shape of your choice. Draw 1<FactionCardIcon />.
    </>
  )}/>),

  (<FactionCard name="Unstable Wormhole" score={0} type="The Scavengers" ability={(
    <>
      Choose 2 <Facility /> you own. Complete 1<Contract /> treating the chosen <Facility/> as adjacent.
    </>
  )}/>),

  (<FactionCard name="Skirt the Rules" score={0} type="The Scavengers" ability={(
    <>
      Complete 1<Contract /> treating any 2 neutral <Facility /> as adjacent.

      Draw 1<FactionCardIcon />.
    </>
  )}/>),

  (<FactionCard name="Overload" score={1} type="The Scavengers" ability={(
    <>
      Complete 1<Contract /> treating 1 <Facility /> used as 2 or more <Facility /> of the same shape as that <Facility />.
    </>
  )}/>),
];

/*
skirt the rules
Free Ride
unite the outsiders
Unapproved transport
Space Catapult
Hitch Hike
  (<FactionCard name="Overload" score={0} type="The Scavengers" ability={(
    <>
      Complete 1<Contract />. Your route may return to <Facility /> previously used in the route.
    </>
  )}/>),
*/

export const hydrusGangCards = [
  (<FactionCard name="Show Up & Blow Up" score={0} type="Hydrus Gang" ability={(
    <>
      Choose an <Asteroid />. <Destroy /> a <Facility /> owned by each opponent on that <Asteroid />. Build a <Facility /> on that <Asteroid />.
    </>
  )}/>),

  (<FactionCard name="Armed Facility" score={0} type="Hydrus Gang" ability={(
    <>
      <Destroy /> a <Facility /> adjacent to a <Facility /> you own. <TakeAnotherAction />
    </>
  )}/>),

  (<FactionCard name="Launch Point" score={0} type="Hydrus Gang" ability={(
    <>
      Build a <Facility />. Play a <Rocket />.
    </>
  )}/>),

  (<FactionCard name="Rearm" score={0} type="Hydrus Gang" ability={(
    <>
      Take 1<Rocket /> from your scored cards pile into your hand. <TakeAnotherAction />
    </>
  )}/>),

  (<FactionCard name="Load Up" score={0} type="Hydrus Gang" ability={(
    <>
      Draw 3<Rocket />.
    </>
  )}/>),

  (<FactionCard name="Flank" score={1} type="Hydrus Gang" ability={(
    <>
      Build a <Facility />. <Destroy /> a <Facility /> adjacent to 2 or more of your <Facility />.
    </>
  )}/>),

  (<FactionCard name="Cut 'em Off" score={0} type="Hydrus Gang" ability={(
    <>
      <Destroy /> a <Facility /> adjacent to a neutral <Facility />. <TakeAnotherAction />
    </>
  )}/>),


  (<FactionCard name="Tough Love" score={1} type="Hydrus Gang" ability={(
    <>
      <Destroy /> up to 1 <Facility /> owned by each player. Each player whose <Facility /> you <Destroy /> draws 1<Contract />. <TakeAnotherAction />
    </>
  )}/>),

];

export const unearthIncCards = [
  (<FactionCard name="Restructure" score={0} type="Unearth Inc." ability={(
    <>
      <Destroy /> a <Facility /> you own to build a <Facility />. <TakeAnotherAction />
    </>
  )}/>),

  (<FactionCard name="Patent Dispute" score={2} type="Unearth Inc." ability={(
    <>
      <Destroy /> a <Facility /> you own to draw 1<Contract />. <TakeAnotherAction />
    </>
  )}/>),

  (<FactionCard name="Competing Projects" score={1} type="Unearth Inc." ability={(
    <>
      Build 2 <Facility /> on spaces that are not adjacent to each other.
    </>
  )}/>),

  (<FactionCard name="Expand" score={1} type="Unearth Inc." ability={(
    <>
      Build a <Facility /> and build another <Facility /> on a different <Asteroid />.
    </>
  )}/>),

  (<FactionCard name="Supplier Network" score={1} type="Unearth Inc." ability={(
    <>
      Build 2 <Facility /> adjacent to neutral <Facility />.
    </>
  )}/>),

  (<FactionCard name="Headquarters" score={1} type="Unearth Inc." ability={(
    <>
      Build 2 <Facility /> on the center <Asteroid /> or draw 2<FactionCardIcon />.
    </>
  )}/>),

  (<FactionCard name="Product Launch" score={2} type="Unearth Inc." ability={(
    <>
      <Destroy /> a <Facility /> you own to draw 1<Rocket /> and 1<FactionCardIcon />.
    </>
  )}/>),

  (<FactionCard name="Donate Scraps" score={0} type="Unearth Inc." ability={(
    <>
      <Destroy /> a <Facility /> you own to build a <Facility /> and draw 1<Ally />.
    </>
  )}/>),

];

export const cyborgUnionCards = [

  (<FactionCard name="Trade Arms" type="Cyborg Union" score={0} ability={(
    <>
      Build a <Facility />. Draw 2<Rocket />. Choose an opponent to draw 1<Rocket />.
    </>
  )}/>),

  (<FactionCard name="Unsolicited Help" type="Cyborg Union" score={0} ability={(
    <>
      Build 2 <Facility />. Build a <Facility /> from an opponent's supply.
    </>
  )}/>),

  (<FactionCard name="Well Organized" type="Cyborg Union" score={-1} ability={(
    <>
      Build a <Facility />. Complete <Contracts />.
    </>
  )}/>),

  (<FactionCard name="Union Contract" type="Cyborg Union" score={1} ability={(
    <>
      Draw 1<Contract />. Complete <Contracts /> or draw an additional 1<Contract />.
    </>
  )}/>),

  // Maybe make this look at the bottom if we get rid of severance
  (<FactionCard name="Extended Contract" type="Cyborg Union" score={1} ability={(
    <>
      Draw 3 <Contract />. Put 1<Contract /> from your hand on top of the <Contract /> deck.
    </>
  )}/>),

  (<FactionCard name="Severance" score={1} type="Cyborg Union" ability={(
    <>
      Put 2<Contract /> from your hand on top of the <Contract /> deck to draw 1<FactionCardIcon />, 1<Rocket />, and 1<Ally />.

    </>
  )}/>),

  (<FactionCard name="Exchange Program" score={0} type="Cyborg Union" ability={(
    <>
      Draw 1<Contract /> and 1<Ally />. Choose an opponent to also draw 1<Contract />.
    </>
  )}/>),

  (<FactionCard name="Enhance Everyone" type="Cyborg Union" score={1} ability={(
    <>
      Build a <Facility />. Draw 2<FactionCardIcon />. All of your opponents draw 1<FactionCardIcon />.
    </>
  )}/>),

];

export const explorerSocietyCards = [
  (<FactionCard name="Venture" type="Explorer Society" score={1} ability={(
    <>
      Move 1 <Facility /> you own. <TakeAnotherAction />
    </>
  )}/>),

  (<FactionCard name="Relocate Refineries" type="Explorer Society" score={0} ability={(
    <>
      Move up to 2 of your <Droplet color="blue" />. <TakeAnotherAction />
    </>
  )}/>),

  (<FactionCard name="Fling Fabricators" type="Explorer Society" score={0} ability={(
    <>
      Move up to 2 of your <Square color="blue" />. <TakeAnotherAction />
    </>
  )}/>),

  (<FactionCard name="Extract Extractors" type="Explorer Society" score={0} ability={(
    <>
      Move up to 2 of your <Circle color="blue" />. <TakeAnotherAction />
    </>
  )}/>),

  (<FactionCard name="Fab Breakthrough" type="Explorer Society" score={0} ability={(
    <>
      Replace up to 2 of your <Square color="blue" />. <TakeAnotherAction />
    </>
  )}/>),

  (<FactionCard name="Oil Treatments" type="Explorer Society" score={0} ability={(
    <>
      Replace up to 2 of your <Droplet color="blue" />. <TakeAnotherAction />
    </>
  )}/>),

  (<FactionCard name="Advanced Drilling" type="Explorer Society" score={0} ability={(
    <>
      Replace up to 2 of your <Circle color="blue" />. <TakeAnotherAction />
    </>
  )}/>),

  (<FactionCard name="Study Comet" type="Explorer Society" score={0} ability={(
    <>
      Move up to 2 <Facility /> you own to spaces on either side of 1<Comet />. <TakeAnotherAction />
    </>
  )}/>),
];
/*
  (<FactionCard name="Overhaul" type="Explorer Society" score={1} ability={(
    <>
      Replace 1 <Facility /> you own. <TakeAnotherAction />
    </>
  )}/>),
*/

export const cruxCabalCards = [
  (<FactionCard name="Deduce Strategy" type="Crux Cabal" score={0} ability={(
    <>
      Look at an opponent’s hand and take a card.

      Draw 1<FactionCardIcon /> from any player's <FactionCardIcon /> deck.
    </>
  )}/>),

  (<FactionCard name="Seat of Power" type="Crux Cabal" score={-1} ability={(
    <>
      Build a <Facility />. Use any <Ally /> in play.
    </>
  )}/>),

  (<FactionCard name="Coerce" type="Crux Cabal" score={0} ability={(
    <>
      Draw 1<Ally /> or use any <Ally /> in play.
    </>
  )}/>),

  (<FactionCard name="Call in Favors" type="Crux Cabal" score={0} ability={(
    <>
      Draw 1<FactionCardIcon /> from any player's <FactionCardIcon /> deck. Use any <Ally /> in play.
    </>
  )}/>),

  (<FactionCard name="Intriguing Offer" type="Crux Cabal" score={0} ability={(
    <>
      Draw 1<Ally />. You may give that <Ally /> to an opponent to draw 1<Ally /> and 1<FactionCardIcon /> from any player's <FactionCardIcon /> deck.
    </>
  )}/>),

  (<FactionCard name="Induct" type="Crux Cabal" score={0} ability={(
    <>
      Look at the top 2 cards of the <Ally /> deck. Play 1 and put the other back.
    </>
  )}/>),

  (<FactionCard name="Infiltrate" type="Crux Cabal" score={1} ability={(
    <>
      Take up to 2 cards from an opponent's hand. They draw 1<Ally />. <i>You do not get to look at their hand.</i>
    </>
  )}/>),

  (<FactionCard name="Blackmail" type="Crux Cabal" score={0} ability={(
    <>
      Draw 1<Contract />. Use any <Ally /> in play.
    </>
  )}/>),
];

export let factionCards = theScavengersCards
  .concat(hydrusGangCards)
  .concat(unearthIncCards)
  .concat(cyborgUnionCards)
  .concat(explorerSocietyCards)
  .concat(cruxCabalCards)
  .map((card) => React.cloneElement(card, { key: card.props.name }));
