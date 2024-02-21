import React from 'react';
import { Contracts, Comet, Ally, Action, Facility, Asteroid, Destroy, Rocket, Contract, FactionCardIcon, VictoryPoints } from './icons.jsx';
import { FactionCard } from './cardTemplates.jsx';

const theScavengerCards = [
  (<FactionCard name="Close Enough" score={-1} type="The Scavengers" ability={(
    <>
      Complete 1<Contract /> treating 1 <Facility /> you own as though it is a different shape.
    </>
  )}/>),

  (<FactionCard name="Comet Lander" score={0} type="The Scavengers" ability={(
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

  (<FactionCard name="Borrow" score={-1} type="The Scavengers" ability={(
    <>
      Complete 1<Contract />. You may use other players’ <Facility /> for the <Contract />. You must own at least 1 <Facility /> used in the route.
    </>
  )}/>),

  (<FactionCard name="Fly-By Job" score={0} type="The Scavengers" ability={(
    <>
      Choose 2 neutral <Facility /> that are adjacent to the same <Asteroid />. Complete 1<Contract /> treating each chosen neutral <Facility /> as though they were adjacent to each other.
    </>
  )}/>),

  (<FactionCard name="Overload" score={0} type="The Scavengers" ability={(
    <>
      Choose 1 <Facility /> and complete 1<Contract /> treating that <Facility /> as though it were any number of <Facility /> of the same shape.
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
      Draw 1 <Rocket />. For each opponent, you may put 1<Rocket /> from their hand on the bottom of the deck or <Destroy /> a <Facility /> they own.
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

export const zenithCapitalCards = [
  (<FactionCard name="Product Launch" score={2} type="Zenith Capital" ability={(
    <>
      <Destroy /> a <Facility /> you own to draw 1<Rocket /> and 1<FactionCardIcon />.
    </>
  )}/>),

  (<FactionCard name="Donate Scraps" score={0} type="Zenith Capital" ability={(
    <>
      <Destroy /> a <Facility /> you own to draw 1<Ally />.

      Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Restructure" score={1} type="Zenith Capital" ability={(
    <>
      <Destroy /> a <Facility /> you own to build a <Facility />.

      Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Settle IP Dispute" score={1} type="Zenith Capital" ability={(
    <>
      <Destroy /> a <Facility /> you own to draw 1<Contract />.

      Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Diversify" score={-1} type="Zenith Capital" ability={(
    <>
      Build a <Facility /> on an <Asteroid /> with the green resource. Build a <Facility /> on an <Asteroid /> with the red resource. Build a <Facility /> on an <Asteroid /> with the blue resource.
    </>
  )}/>),

  (<FactionCard name="Headquarters" score={1} type="Zenith Capital" ability={(
    <>
      Build 2 <Facility /> on the center asteroid or draw 2<FactionCardIcon />.
    </>
  )}/>),

  (<FactionCard name="Mirror Protocol" score={-1} type="Zenith Capital" ability={(
    <>
      If a <Facility /> you own is adjacent to an empty space on another <Asteroid /> you may build a <Facility /> of the same shape on that empty space. You may do this for any number of your <Facility />.
    </>
  )}/>),

  (<FactionCard name="Expand" score={-1} type="Zenith Capital" ability={(
    <>
      On up to 3 <Asteroid /> with at least 1 <Facility /> you own, you may build a <Facility />.
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
      Draw 2<Ally />.

      Choose an opponent. That player draws 1<Ally />.
    </>
  )}/>),

  (<FactionCard name="Trade Arms" type="Cyborg Union" score={2} ability={(
    <>
      Draw 1<Rocket />. Choose an opponent to also draw 1<Rocket />.

      Build a <Facility />.
    </>
  )}/>),

  (<FactionCard name="Unsolicited Help" type="Cyborg Union" score={0} ability={(
    <>
      Build 2 <Facility />. Choose an opponent and build a <Facility /> from their supply.
    </>
  )}/>),

  (<FactionCard name="Workplace Upgrades" type="Cyborg Union" score={1} ability={(
    <>
      Complete <Contracts />. For each card you would draw as a bonus, you may instead build a <Facility />.
    </>
  )}/>),

  (<FactionCard name="Well Organized" type="Cyborg Union" score={1} ability={(
    <>
      Build a <Facility /> adjacent to a <Comet />. Complete <Contracts /> or play 1<FactionCardIcon />.
    </>
  )}/>),

  (<FactionCard name="Enhance Everyone" type="Cyborg Union" score={1} ability={(
    <>
      Draw 2<FactionCardIcon />. All of your opponents draw 1<FactionCardIcon />.

      Build a <Facility />.
    </>
  )}/>),

  (<FactionCard name="Union Contract" type="Cyborg Union" score={1} ability={(
    <>
      Draw 1<Contract />. Complete <Contracts /> or draw an additional 1<Contract />.
    </>
  )}/>),
];

export const explorerSocietyCards = [
  (<FactionCard name="Crowd" type="Explorer Society" score={0} ability={(
    <>
      Move any number of your <Facility /> that are not adjacent to other players’ <Facility /> to spaces that are adjacent to other players’ <Facility />.


      Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Relocate Refineries" type="Explorer Society" score={0} ability={(
    <>
      Move any number of your droplet <Facility /> to any empty spaces.

      Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Gather" type="Explorer Society" score={-1} ability={(
    <>
      Choose an <Asteroid />, you may move any number of your <Facility /> on each adjacent <Asteroid /> to any empty spaces on the chosen <Asteroid />.

      Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Fling Fabricators" type="Explorer Society" score={0} ability={(
    <>
      Move any number of your square <Facility /> to any empty spaces.

      Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Extract Extractors" type="Explorer Society" score={0} ability={(
    <>
      Move any number of your circle <Facility /> to any empty spaces.

      Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Rendezvous" type="Explorer Society" score={0} ability={(
    <>
      Choose one <Facility /> you own, you may move any number of your other <Facility /> to spaces adjacent to the chosen <Facility />.

      Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Study Comet" type="Explorer Society" score={0} ability={(
    <>
      Choose a <Comet />. You may move up to 2 of your <Facility /> to the spaces on either side of the <Comet />.

      Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Migrate" type="Explorer Society" score={-1} ability={(
    <>
      Move any number of your <Facility /> from 1 <Asteroid /> to another. You can rearrange them on the new <Asteroid />.

      Take another <Action />.
    </>
  )}/>),

];

export const cruxCabalCards = [
  (<FactionCard name="Endgame" type="Crux Cabal" score={0} ability={(
    <>
      Take 2 additional <Action />.

      Restock public <Contracts />.

      If there are no cards left in the <Contract /> deck, take another <Action />.
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

  (<FactionCard name="Mandatory Recall" type="Crux Cabal" score={0} ability={(
    <>
      Take up to 3 cards from your scored cards pile into your hand. Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Mind Control" type="Crux Cabal" score={0} ability={(
    <>
      Take another player’s <Ally /> or draw 1<Ally />.

      Draw 1<FactionCardIcon />.
    </>
  )}/>),

  (<FactionCard name="Scheme" type="Crux Cabal" score={1} ability={(
    <>
      Draw 3 cards. The cards may be taken from any combination of the <Contract /> deck, <Rocket /> deck, and your <FactionCardIcon /> deck.
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

export let factionCards = theScavengerCards
  .concat(hydrusGangCards)
  .concat(zenithCapitalCards)
  .concat(cyborgUnionCards)
  .concat(explorerSocietyCards)
  .concat(cruxCabalCards)
  .map((card) => React.cloneElement(card, { key: card.props.name }));
