import React from 'react';
import { Contracts, Comet, Droplet, Circle, Square, Ally, Action, Facility, Asteroid, Destroy, Rocket, Contract, FactionCardIcon, VictoryPoints } from './icons.jsx';
import { FactionCard } from './cardTemplates.jsx';

export const theScavengersCards = [
  (<FactionCard name="Close Enough" score={1} type="The Scavengers" ability={(
    <>
      Complete 1<Contract /> treating 1 <Facility /> you own as though it is a different shape.
    </>
  )}/>),

  (<FactionCard name="Frozen Assets" score={1} type="The Scavengers" ability={(
    <>
      Complete 1<Contract /> treating a <Comet /> between 2 <Facility /> used as a <Facility /> of any shape in addition to being a <Comet />.
    </>
  )}/>),

  (<FactionCard name="Unstructured Work" score={1} type="The Scavengers" ability={(
    <>
      Complete 1<Contract /> treating 1 empty space between 2 <Facility /> you own as though it has a <Facility /> of any shape.
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

  (<FactionCard name="Fly-By Job" score={-1} type="The Scavengers" ability={(
    <>
      Complete 1<Contract /> treating any 2 neutral <Facility /> as adjacent.
      <br />
      Draw 1<FactionCardIcon />.
    </>
  )}/>),

  (<FactionCard name="Overload" score={1} type="The Scavengers" ability={(
    <>
      Complete 1<Contract /> treating 1 <Facility /> used as any number of <Facility /> of the same shape as that <Facility />.
    </>
  )}/>),

  (<FactionCard name="Quick & Dirty" score={-1} type="The Scavengers" ability={(
    <>
      Build 2 <Facility />. Complete 1<Contract />. <Destroy /> both <Facility /> you built.
    </>
  )}/>),

];

export const hydrusGangCards = [
  (<FactionCard name="Load Up" score={0} type="Hydrus Gang" ability={(
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

  (<FactionCard name="Show Up & Blow Up" score={0} type="Hydrus Gang" ability={(
    <>
      Choose an <Asteroid />. <Destroy /> a <Facility /> owned by each opponent on that <Asteroid />. Build a <Facility /> on that <Asteroid />.
    </>
  )}/>),

  (<FactionCard name="Armed Facility" score={0} type="Hydrus Gang" ability={(
    <>
      <Destroy /> a <Facility /> adjacent to a <Facility /> you own.

      Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Launch Point" score={0} type="Hydrus Gang" ability={(
    <>
      Build a <Facility />. Play a <Rocket />.
    </>
  )}/>),

  (<FactionCard name="Flank" score={1} type="Hydrus Gang" ability={(
    <>
      Build a <Facility />. <Destroy /> a <Facility /> adjacent to 2 or more of your <Facility />.
    </>
  )}/>),

  (<FactionCard name="Rearm" score={0} type="Hydrus Gang" ability={(
    <>
      Take 1<Rocket /> from your scored cards pile into your hand. Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Phoenix Initiative" score={1} type="Hydrus Gang" ability={(
    <>
      You may <Destroy /> a <Facility /> owned by each player. Each player whose <Facility /> you <Destroy /> draws 1<Contract />.

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

  (<FactionCard name="Donate Scraps" score={-1} type="Unearth Inc." ability={(
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

  (<FactionCard name="Settle IP Dispute" score={2} type="Unearth Inc." ability={(
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
      Build 2 <Facility /> on the center <Asteroid /> or draw 2<FactionCardIcon />.
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

  (<FactionCard name="Severance" score={1} type="Cyborg Union" ability={(
    <>
      Put any number of <Contract /> from your hand on the bottom of the <Contract /> deck. Collect all bonuses shown on those <Contract />.
    </>
  )}/>),

  (<FactionCard name="Exchange Program" score={0} type="Cyborg Union" ability={(
    <>
      Draw 1<Contract /> and 1<Ally />. Choose an opponent to draw 1<Contract />.
    </>
  )}/>),

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

  (<FactionCard name="Extended Contract" type="Cyborg Union" score={-1} ability={(
    <>
      Draw 3 <Contract /> from the bottom of the <Contract /> deck.
    </>
  )}/>),

  (<FactionCard name="Well Organized" type="Cyborg Union" score={0} ability={(
    <>
      Build a <Facility />. Complete <Contracts />.
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
      Replace up to 2 of your <Square color="blue" />.

      <br />
      Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Oil Treatments" type="Explorer Society" score={0} ability={(
    <>
      Replace up to 2 of your <Droplet color="blue" />.

      <br />
      Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Advanced Drilling" type="Explorer Society" score={0} ability={(
    <>
      Replace up to 2 of your <Circle color="blue" />.

      <br />
      Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Relocate Refineries" type="Explorer Society" score={0} ability={(
    <>
      Move up to 2 of your <Droplet color="blue" />.

      <br />
      Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Fling Fabricators" type="Explorer Society" score={0} ability={(
    <>
      Move up to 2 of your <Square color="blue" />.

      <br />
      Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Extract Extractors" type="Explorer Society" score={0} ability={(
    <>
      Move up to 2 of your <Circle color="blue" />.

      <br />
      Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Study Comet" type="Explorer Society" score={0} ability={(
    <>
      Move up to 2 <Facility /> you own to spaces on either side of 1<Comet />.

      Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Venture" type="Explorer Society" score={1} ability={(
    <>
      Move 1 <Facility /> you own.

      <br />
      Take another <Action />.
    </>
  )}/>),

];

export const cruxCabalCards = [
  (<FactionCard name="Duel" type="Crux Cabal" score={0} ability={(
    <>
      Draw 1<Ally />. You may give that <Ally /> to an opponent to draw 1<Ally /> and 1<FactionCardIcon />.
    </>
  )}/>),

  (<FactionCard name="Deduce Strategy" type="Crux Cabal" score={0} ability={(
    <>
      Look at an opponent’s hand and take a card.

      Draw 1<FactionCardIcon />.
    </>
  )}/>),

  (<FactionCard name="Induct" type="Crux Cabal" score={0} ability={(
    <>
      Look at the top 2 cards of the <Ally /> deck. Play 1 and put the other back.
    </>
  )}/>),

  (<FactionCard name="Call in Favors" type="Crux Cabal" score={1} ability={(
    <>
      Draw 1<FactionCardIcon /> from any player's <FactionCardIcon /> deck. Use an <Ally /> belonging to any player.
    </>
  )}/>),

  (<FactionCard name="Seat of Power" type="Crux Cabal" score={0} ability={(
    <>
      Build a <Facility />. Use an <Ally /> belonging to any player.
    </>
  )}/>),

  (<FactionCard name="Secret Society" type="Crux Cabal" score={1} ability={(
    <>
      Draw 1<Ally /> and draw 1<FactionCardIcon />. Each opponent who owns no <Ally /> draws 1<Ally />.
    </>
  )}/>),

    //Without looking at their hand, take up to 2 cards from an opponent. They draw 1<Ally />.
  (<FactionCard name="Infiltrate" type="Crux Cabal" score={1} ability={(
    <>
      Take up to 2 cards from an opponent's hand. They draw 1<Ally />. <i>You do not get to look at their hand.</i>
    </>
  )}/>),

  (<FactionCard name="Blackmail" type="Crux Cabal" score={1} ability={(
    <>
      Draw 1<Contract />. Use an <Ally /> belonging to any player.
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
