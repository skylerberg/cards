import React from 'react';
import { Contracts, Comet, Droplet, Circle, Square, Ally, Action, Facility, Asteroid, Destroy, Rocket, Contract, FactionCardIcon, VictoryPoints } from './icons.jsx';
import { FactionCard } from './cardTemplates.jsx';

export const theScavengersCards = [
  (<FactionCard name="Close Enough" score={-1} type="The Scavengers" ability={(
    <>
      Complete 1<Contract /> treating 1 <Facility /> you own as though it is a different shape.
    </>
  )}/>),

  (<FactionCard name="Frozen Assets" score={0} type="The Scavengers" ability={(
    <>
      Complete 1<Contract /> treating a <Comet /> between 2 of your <Facility /> used as though it were a <Facility /> of any shape in addition to being a <Comet />.
    </>
  )}/>),

  (<FactionCard name="Rejigger" score={-1} type="The Scavengers" ability={(
    <>
      Complete 1<Contract /> treating all <Facility /> listed on the <Contract /> as though they were in any order of your choice.
    </>
  )}/>),

  (<FactionCard name="Misuse" score={-1} type="The Scavengers" ability={(
    <>
      Complete 1<Contract /> treating each neutral <Facility /> used as any shape of your choice.
    </>
  )}/>),

  (<FactionCard name="Unstable Wormhole" score={-1} type="The Scavengers" ability={(
    <>
      Choose 2 <Facility /> you own. Complete 1<Contract /> treating the chosen <Facility/> as adjacent.
    </>
  )}/>),

  (<FactionCard name='"Borrow"' score={-1} type="The Scavengers" ability={(
    <>
      Complete 1<Contract />. You may use other players’ <Facility /> for the <Contract />. You must own at least 1 <Facility /> used in the route.
    </>
  )}/>),

  (<FactionCard name="Fly-By Job" score={0} type="The Scavengers" ability={(
    <>
      Choose 2 neutral <Facility />. Complete 1<Contract /> treating the chosen <Facility /> as adjacent.
    </>
  )}/>),

  (<FactionCard name="Overload" score={0} type="The Scavengers" ability={(
    <>
      Choose 1 <Facility /> and complete 1<Contract /> treating that <Facility /> as though it were any number of <Facility /> of the same shape.
    </>
  )}/>),

  (<FactionCard name="Quick and Dirty" score={0} type="The Scavengers" ability={(
    <>
      Build a <Facility />. Complete 1<Contract />. <Destroy /> the <Facility /> you built.
    </>
  )}/>),

];

export const hydrusGangCards = [
  (<FactionCard name="Load Up" score={1} type="Hydrus Gang" ability={(
    <>
      Draw 3<Rocket />.
    </>
  )}/>),

  (<FactionCard name="Cut 'em Off" score={0} type="Hydrus Gang" ability={(
    <>
      <Destroy /> a <Facility /> adjacent to a neutral <Facility />.

      Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Wake of Destruction" score={1} type="Hydrus Gang" ability={(
    <>
      Choose an <Asteroid /> no player has more <Facility /> on than you. <Destroy /> each <Facility /> on that <Asteroid />.

      Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Armed Facility" score={0} type="Hydrus Gang" ability={(
    <>
      <Destroy /> a <Facility /> adjacent to a <Facility /> you own.

      Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Shock and Awe" score={0} type="Hydrus Gang" ability={(
    <>
      Play 1<Rocket />. At the end of this turn, draw 1<Ally /> for every <Rocket /> you played.
    </>
  )}/>),

  (<FactionCard name="Demand Tribute" score={1} type="Hydrus Gang" ability={(
    <>
      For each opponent, you may put 1 random <Rocket /> from their hand on the bottom of the deck or <Destroy /> a <Facility /> they own. Draw 1 <Rocket />.
    </>
  )}/>),

  (<FactionCard name="Rearm" score={0} type="Hydrus Gang" ability={(
    <>
      Take 1<Rocket /> from your scored cards pile into your hand. Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Phoenix Initiative" score={1} type="Hydrus Gang" ability={(
    <>
      You may <Destroy /> a facility belonging to each player. Each player whose facility you <Destroy /> draws 1<Contract />.

      Take another <Action />.
    </>
  )}/>),

];

export const unearthIncCards = [
  (<FactionCard name="Product Launch" score={2} type="Unearth Inc." ability={(
    <>
      <Destroy /> a <Facility /> you own to draw 1<Rocket /> and 1<FactionCardIcon />.
    </>
  )}/>),

  (<FactionCard name="Donate Scraps" score={0} type="Unearth Inc." ability={(
    <>
      <Destroy /> a <Facility /> you own to draw 1<Ally />.

      Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Restructure" score={1} type="Unearth Inc." ability={(
    <>
      <Destroy /> a <Facility /> you own to build a <Facility />.

      Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Settle IP Dispute" score={1} type="Unearth Inc." ability={(
    <>
      <Destroy /> a <Facility /> you own to draw 1<Contract />.

      Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Supplier Network" score={1} type="Unearth Inc." ability={(
    <>
      Build 2 <Facility /> adjacent to neutral <Facility />.
    </>
  )}/>),

  (<FactionCard name="Headquarters" score={1} type="Unearth Inc." ability={(
    <>
      Build 2 <Facility /> on the center asteroid or draw 2<FactionCardIcon />.
    </>
  )}/>),

  (<FactionCard name="Establish Ice Supply" score={-1} type="Unearth Inc." ability={(
    <>
      Choose a <Comet />. You may build a <Facility /> on each space adjacent to that <Comet />. Draw 1<Rocket />.
    </>
  )}/>),

  (<FactionCard name="Expand" score={1} type="Unearth Inc." ability={(
    <>
      Build a <Facility /> on up to 2 <Asteroid />.
    </>
  )}/>),
];

export const cyborgUnionCards = [

  (<FactionCard name="Augment" score={1} type="Cyborg Union" ability={(
    <>
      Complete <Contracts /> gaining each bonus you collect an additional time.
    </>
  )}/>),

  (<FactionCard name="Exchange Program" score={1} type="Cyborg Union" ability={(
    <>
      Draw 1<Contract /> and 1<Ally />. Choose an opponent to draw 1<Contract />.
    </>
  )}/>),

  (<FactionCard name="Trade Arms" type="Cyborg Union" score={2} ability={(
    <>
      Build a <Facility />. Draw 1<Rocket />. Choose an opponent to draw 1<Rocket />.
    </>
  )}/>),

  (<FactionCard name="Unsolicited Help" type="Cyborg Union" score={0} ability={(
    <>
      Build 2 <Facility />. Choose an opponent and build a <Facility /> from their supply.
    </>
  )}/>),

  (<FactionCard name="Workplace Upgrades" type="Cyborg Union" score={-1} ability={(
    <>
      Complete <Contracts />. For each <Comet /> in routes used, build a <Facility /> before collecting bonuses.
    </>
  )}/>),

  (<FactionCard name="Well Organized" type="Cyborg Union" score={1} ability={(
    <>
      Build a <Facility /> adjacent to a <Comet />. Complete <Contracts /> or play 1<FactionCardIcon />.
    </>
  )}/>),

  (<FactionCard name="Enhance Everyone" type="Cyborg Union" score={1} ability={(
    <>
      Build a <Facility />. Draw 2<FactionCardIcon />. All of your opponents draw 1<FactionCardIcon />.
    </>
  )}/>),

  (<FactionCard name="Union Contract" type="Cyborg Union" score={1} ability={(
    <>
      Draw 1<Contract />. Complete <Contracts /> or draw an additional 1<Contract />.
    </>
  )}/>),
];

export const explorerSocietyCards = [
  (<FactionCard name="Fab Breakthrough" type="Explorer Society" score={0} ability={(
    <>
      Replace up to 2 of your <Square color="blue" /> with <Facility /> of any shape.

      Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Oil Treatments" type="Explorer Society" score={0} ability={(
    <>
      Replace up to 2 <Droplet color="blue" /> you own with <Facility /> of any shape.

      Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Advanced Drilling" type="Explorer Society" score={0} ability={(
    <>
      Replace up to 2 <Circle color="blue" /> you own with <Facility /> of any shape.


      Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Relocate Refineries" type="Explorer Society" score={0} ability={(
    <>
      Move up to 2 of your <Droplet color="blue" /> to any empty spaces.

      Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Fling Fabricators" type="Explorer Society" score={0} ability={(
    <>
      Move up to 2 of your <Square color="blue" /> to any empty spaces.

      Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Extract Extractors" type="Explorer Society" score={0} ability={(
    <>
      Move up to 2 of your <Circle color="blue" /> to any empty spaces.

      Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Study Comet" type="Explorer Society" score={0} ability={(
    <>
      Choose a <Comet />. You may move up to 2 of your <Facility /> to the spaces on either side of the <Comet />.

      Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Venture" type="Explorer Society" score={0} ability={(
    <>
      Move 1 <Facility /> you own to any empty space.

      Take another <Action />.
    </>
  )}/>),

];

export const cruxCabalCards = [
  (<FactionCard name="Dual Interview" type="Crux Cabal" score={1} ability={(
    <>
      Draw 1<Ally />. You may give that <Ally /> to an opponent to draw 1<Ally /> and 1<FactionCardIcon />.
    </>
  )}/>),

  (<FactionCard name="Deduce Strategy" type="Crux Cabal" score={0} ability={(
    <>
      Look at another player’s hand and take a card from that hand into your hand.

      Draw 1<FactionCardIcon />.
    </>
  )}/>),

  (<FactionCard name="Induct" type="Crux Cabal" score={0} ability={(
    <>
      Look at the top 2 cards of the <Ally /> deck. Play 1 and put the other back.

      Draw 1<FactionCardIcon />.
    </>
  )}/>),

  (<FactionCard name="Call in Favors" type="Crux Cabal" score={1} ability={(
    <>
      Choose an <Ally /> belonging to any player. Use its <Action /> twice.
    </>
  )}/>),

  (<FactionCard name="Graveyard Shift" type="Crux Cabal" score={0} ability={(
    <>
      Take 2 addtional <Action />.
    </>
  )}/>),

  (<FactionCard name="Scheme" type="Crux Cabal" score={1} ability={(
    <>
      Draw 3 cards from any combination of the <Contract /> deck, <Rocket /> deck, and your <FactionCardIcon /> deck.
    </>
  )}/>),

  (<FactionCard name="Infiltrate" type="Crux Cabal" score={1} ability={(
    <>
      Choose an opponent. They draw 1<Ally />. Take up to 2 cards from their hand without looking at their fronts.
    </>
  )}/>),

  (<FactionCard name="Blackmail" type="Crux Cabal" score={1} ability={(
    <>
      Choose up to 2<Ally /> belonging to any player(s). Perform the actions on each <Ally />.
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
