import React from 'react';
import { Contracts, Comet, Funds, Research, Droplet, Circle, Square, Ally, Facility, Asteroid, Destroy, Rocket, Contract, FactionCardIcon, TakeAnotherAction } from './icons.jsx';
import { FactionCard } from './cardTemplates.jsx';

export const theScavengersCards = [
  (<FactionCard name="Close Enough" cost={2} score={1} type="The Scavengers" ability={(
    <>
      Complete 1<Contract /> treating 1 <Facility /> you own as though it is a different shape.
    </>
  )}/>),

  (<FactionCard name="Frozen Assets" cost={2} score={1} type="The Scavengers" ability={(
    <>
      Complete 1<Contract /> treating a <Comet /> between 2 <Facility /> in the route as a <Facility /> of any shape in addition to being a <Comet />.
    </>
  )}/>),

  (<FactionCard name='"Borrow"' cost={2} score={1} type="The Scavengers" ability={(
    <>
      Complete 1<Contract /> treating up to 2 <Facility /> you don't own as if you own them.
    </>
  )}/>),

  (<FactionCard name="Quick & Dirty" cost={2} score={1} type="The Scavengers" ability={(
    <>
      Build a <Facility />. Complete 1<Contract />. <Destroy /> the <Facility /> you built.
    </>
  )}/>),

  (<FactionCard name="Misuse" cost={1} score={0} type="The Scavengers" ability={(
    <>
      Complete 1<Contract /> treating each neutral <Facility /> used as any shape of your choice.
    </>
  )}/>),

  (<FactionCard name="Unstable Wormhole" cost={2} score={0} type="The Scavengers" ability={(
    <>
      Choose 2 <Facility /> you own. Complete 1<Contract /> treating the chosen <Facility/> as adjacent.
    </>
  )}/>),

  (<FactionCard name="Skirt the Rules" cost={1} score={0} type="The Scavengers" ability={(
    <>
      Complete 1<Contract /> treating any 2 neutral <Facility /> as adjacent.
    </>
  )}/>),

  (<FactionCard name="Overload" cost={1} score={0} type="The Scavengers" ability={(
    <>
      Complete 1<Contract /> treating 1 <Facility /> used as 2 <Facility /> of the same shape as that <Facility />.
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
  (<FactionCard name="Show Up & Blow Up" cost={2} score={0} type="Hydrus Gang" ability={(
    <>
      Choose an <Asteroid />. <Destroy /> a <Facility /> owned by each opponent on that <Asteroid />. Build a <Facility /> on that <Asteroid />.
    </>
  )}/>),

  (<FactionCard name="Armed Facility" cost={0} score={0} type="Hydrus Gang" ability={(
    <>
      <Destroy /> a <Facility /> adjacent to a <Facility /> you own.
    </>
  )}/>),

  (<FactionCard name="Encroach" cost={0} score={0} type="Hydrus Gang" ability={(
    <>
      Build a <Facility /> adjacent to an opponent's <Facility />.
      {/*
      Build a <Facility /> adjacent to an opponent's <Facility />.
      After the next <Rocket /> you play this turn, complete <Contracts />.
      */}
    </>
  )}/>),

  (<FactionCard name="Rearm" cost={0} score={0} type="Hydrus Gang" ability={(
    <>
      Take 1<Rocket /> from your scored cards pile into your hand.
    </>
  )}/>),

  (<FactionCard name="Load Up" cost={2} score={0} type="Hydrus Gang" ability={(
    <>
      Draw 3<Rocket />.
    </>
  )}/>),

  (<FactionCard name="Flank" cost={2} score={1} type="Hydrus Gang" ability={(
    <>
      Build a <Facility />. <Destroy /> a <Facility /> adjacent to 2 or more of your <Facility />.
    </>
  )}/>),

  (<FactionCard name="Cut 'em Off" cost={0} score={0} type="Hydrus Gang" ability={(
    <>
      <Destroy /> a <Facility /> next to a <Comet />.
    </>
  )}/>),


  (<FactionCard name="Tough Love" cost={0} score={1} type="Hydrus Gang" ability={(
    <>
      <Destroy /> up to 1 <Facility /> owned by each player. Each player whose <Facility /> you <Destroy /> draws 1<Contract />.
    </>
  )}/>),

];

export const unearthIncCards = [
  (<FactionCard name="Restructure" cost={0} score={0} type="Unearth Inc." ability={(
    <>
      <Destroy /> a <Facility /> you own to build a <Facility />.
    </>
  )}/>),

  (<FactionCard name="Patent Dispute" cost={0} score={2} type="Unearth Inc." ability={(
    <>
      <Destroy /> a <Facility /> you own to draw 1<Contract />.
    </>
  )}/>),

  (<FactionCard name="Competing Projects" cost={2} score={1} type="Unearth Inc." ability={(
    <>
      Build 2 <Facility /> on spaces that are not adjacent to each other.
    </>
  )}/>),

  (<FactionCard name="Expand" cost={2} score={1} type="Unearth Inc." ability={(
    <>
      Build a <Facility /> and build another <Facility /> on a different <Asteroid />.
    </>
  )}/>),

  (<FactionCard name="Supplier Network" cost={2} score={1} type="Unearth Inc." ability={(
    <>
      Build 2 <Facility /> adjacent to neutral <Facility />.
    </>
  )}/>),

  (<FactionCard name="Headquarters" cost={2} score={1} type="Unearth Inc." ability={(
    <>
      Build 2 <Facility /> on the center <Asteroid /> OR draw 2<FactionCardIcon />.
    </>
  )}/>),

  (<FactionCard name="Product Launch" cost={2} score={2} type="Unearth Inc." ability={(
    <>
      <Destroy /> a <Facility /> you own to draw 1<Rocket /> and 1<FactionCardIcon />.
    </>
  )}/>),

  (<FactionCard name="Donate Scraps" cost={2} score={0} type="Unearth Inc." ability={(
    <>
      <Destroy /> a <Facility /> you own to build a <Facility /> and draw 1<Ally />.
    </>
  )}/>),

];

export const cyborgUnionCards = [

  (<FactionCard name="Trade Arms" type="Cyborg Union" cost={1} score={1} ability={(
    <>
      Build a <Facility />. Draw 1<Rocket />. Choose an opponent to draw 1<Rocket />.
    </>
  )}/>),

  (<FactionCard name="Unsolicited Help" type="Cyborg Union" cost={1} score={1} ability={(
    <>
      Build a <Facility />, then build a <Facility /> from an opponent's supply.
    </>
  )}/>),

  (<FactionCard name="Well Organized" type="Cyborg Union" cost={2} score={-1} ability={(
    <>
      Build a <Facility />. Complete <Contracts />.
    </>
  )}/>),

  (<FactionCard name="Union Contract" type="Cyborg Union" cost={1} score={0} ability={(
    <>
      Draw 1<Contract />. Complete <Contracts />.
    </>
  )}/>),

  // Maybe make this look at the bottom if we get rid of severance
  (<FactionCard name="Extended Contract" type="Cyborg Union" cost={2} score={1} ability={(
    <>
      Draw 3 <Contract />. Put 1<Contract /> from your hand on top of the <Contract /> deck.
    </>
  )}/>),

  (<FactionCard name="Severance" cost={2} score={1} type="Cyborg Union" ability={(
    <>
      Put 2<Contract /> from your hand on top of the <Contract /> deck to draw 1<FactionCardIcon />, 1<Rocket />, and 1<Ally />.

    </>
  )}/>),

  (<FactionCard name="Exchange Program" cost={2} score={0} type="Cyborg Union" ability={(
    <>
      Draw 1<Contract /> and 1<Ally />. Choose an opponent to also draw 1<Contract />.
    </>
  )}/>),

  (<FactionCard name="Enhance Everyone" type="Cyborg Union" cost={1} score={1} ability={(
    <>
      Build a <Facility />. All players draw 1<FactionCardIcon />.
    </>
  )}/>),

];

export const explorerSocietyCards = [
  (<FactionCard name="Venture" type="Explorer Society" cost={0} score={1} ability={(
    <>
      Move 1 <Facility /> you own.
    </>
  )}/>),

  (<FactionCard name="Relocate Refineries" type="Explorer Society" cost={0} score={0} ability={(
    <>
      Move up to 2 of your <Droplet />.
    </>
  )}/>),

  (<FactionCard name="Fling Fabricators" type="Explorer Society" cost={0} score={0} ability={(
    <>
      Move up to 2 of your <Square />.
    </>
  )}/>),

  (<FactionCard name="Extract Extractors" type="Explorer Society" cost={0} score={0} ability={(
    <>
      Move up to 2 of your <Circle />.
    </>
  )}/>),

  (<FactionCard name="Fab Breakthrough" type="Explorer Society" cost={0} score={0} ability={(
    <>
      Replace up to 2 of your <Square />.
    </>
  )}/>),

  (<FactionCard name="Oil Treatments" type="Explorer Society" cost={0} score={0} ability={(
    <>
      Replace up to 2 of your <Droplet />.
    </>
  )}/>),

  (<FactionCard name="Advanced Drilling" type="Explorer Society" cost={0} score={0} ability={(
    <>
      Replace up to 2 of your <Circle />.
    </>
  )}/>),

  (<FactionCard name="Study Comet" type="Explorer Society" cost={0} score={0} ability={(
    <>
      Move up to 2 <Facility /> you own to spaces on either side of 1<Comet />.
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
  (<FactionCard name="Induct" type="Crux Cabal" cost={2} score={0} ability={(
    <>
      Look at the top 2 cards of the <Ally /> deck. Play 1 and put the other back.
    </>
  )}/>),

  (<FactionCard name="Seat of Power" type="Crux Cabal" cost={1} score={-1} ability={(
    <>
      Build a <Facility />. Use any <Ally /> in play, reducing its cost by <Funds cost={1} />.
    </>
  )}/>),

  (<FactionCard name="Blackmail" type="Crux Cabal" cost={1} score={1} ability={(
    <>
      Gain and spend <Funds cost={2} /> on any <Ally /> card(s) in play.
    </>
  )}/>),

  (<FactionCard name="Call in Favors" type="Crux Cabal" cost={2} score={0} ability={(
    <>
      Gain and spend <Funds cost={2} /> on any <Ally /> card(s) in play.

      Draw 1<FactionCardIcon /> from any player's <FactionCardIcon /> deck.
    </>
  )}/>),

  (<FactionCard name="Intriguing Offer" type="Crux Cabal" cost={2} score={0} ability={(
    <>
      Draw 1<Ally />. You may give that <Ally /> to an opponent to draw 1<Ally /> and 1<FactionCardIcon /> from any player's <FactionCardIcon /> deck.
    </>
  )}/>),

  (<FactionCard name="Infiltrate" type="Crux Cabal" cost={2} score={1} ability={(
    <>
      Take up to 2 cards from an opponent's hand. They draw 1<Ally />. <i>You do not get to look at their hand.</i>
    </>
  )}/>),

  (<FactionCard name="Coerce" type="Crux Cabal" cost={2} score={1} ability={(
    <>
      Draw 2<FactionCardIcon /> from any <FactionCardIcon /> deck(s) in play.
    </>
  )}/>),

  (<FactionCard name="Deduce Strategy" type="Crux Cabal" cost={2} score={1} ability={(
    <>
      Place 2 <Research />, then take a card from an opponent's hand. <i>You do not get to look at their hand.</i>
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
