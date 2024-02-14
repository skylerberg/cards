import React from 'react';
import { Contracts, Comet, Ally, Action, Facility, Asteroid, Destroy, Rocket, Contract, FactionCardIcon, Move, VictoryPoints } from './icons.jsx';
import { FactionCard } from './cardTemplates.jsx';

const theScavengerCards = [
  (<FactionCard name="Close Enough" score={-1} ability={(
    <>
      Complete 1<Contract /> treating 1 <Facility /> you own as though it is a different shape.
    </>
  )}/>),

  (<FactionCard name="Comet Lander" score={0} ability={(
    <>
      Complete 1<Contract /> treating a <Comet /> between 2 of your <Facility /> used as though it were a <Facility /> of any shape in addition to being a <Comet />.
    </>
  )}/>),

  (<FactionCard name="Rejigger" score={-1} ability={(
    <>
      Complete 1<Contract /> treating all <Facility /> listed on the <Contract /> as though they were in any order of your choice.
    </>
  )}/>),

  (<FactionCard name="Misuse" score={-1} ability={(
    <>
      Complete 1<Contract /> treating each neutral <Facility /> used as any shape of your choice.
    </>
  )}/>),

  (<FactionCard name="Unstable Wormhole" score={-1} ability={(
    <>
      Choose 2 <Facility /> you own. Complete 1<Contract /> treating the chosen <Facility/> as adjacent.
    </>
  )}/>),

  (<FactionCard name="Borrow" score={-1} ability={(
    <>
      Complete 1<Contract />. You may use other players’ <Facility /> for the <Contract />. You must own at least 1 <Facility /> used in the route.
    </>
  )}/>),

  (<FactionCard name="Fly-By Job" score={0} ability={(
    <>
      Choose 2 neutral <Facility /> that are adjacent to the same <Asteroid />. Complete 1<Contract /> treating each chosen neutral <Facility /> as though they were adjacent to each other.
    </>
  )}/>),

  (<FactionCard name="Overload" score={0} ability={(
    <>
      Choose 1 <Facility /> and complete 1<Contract /> treating that <Facility /> as though it were any number of <Facility /> of the same shape.
    </>
  )}/>),

];

const HydrusGangCards = [
  (<FactionCard name="Load Up" score={1} ability={(
    <>
      Draw 3<Rocket />.
    </>
  )}/>),

  (<FactionCard name="Cut 'em Off" score={0} ability={(
    <>
      <Destroy /> a <Facility /> adjacent to a neutral <Facility />.

      Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Wake of Destruction" score={1} ability={(
    <>
      Choose an <Asteroid /> no player has more <Facility /> on than you. <Destroy /> each <Facility /> on that <Asteroid />.

      Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Armed Facility" score={0} ability={(
    <>
      <Destroy /> a <Facility /> adjacent to a <Facility /> you own.

      Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Shock and Awe" score={0} ability={(
    <>
      Play 1<Rocket />. At the end of this turn, draw 1<Ally /> for every <Rocket /> you played.
    </>
  )}/>),

  (<FactionCard name="Demand Tribute" score={2} ability={(
    <>
      For each opponent, you may take 1<Rocket /> from their hand or <Destroy /> a <Facility /> they own.
    </>
  )}/>),

  (<FactionCard name="Rearm" score={0} ability={(
    <>
      Take 1<Rocket /> from your scored cards pile into your hand. Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Phoenix Initiative" score={1} ability={(
    <>
      You may <Destroy /> a facility belonging to each player. Each player whose facility you <Destroy /> draws 1<Contract />.

      Take another <Action />.
    </>
  )}/>),

];

const unearthIncCards = [
  (<FactionCard name="Product Launch" score={1} ability={(
    <>
      <Destroy /> a <Facility /> you own to draw 1<Rocket />.

      Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Donate Scraps" score={0} ability={(
    <>
      <Destroy /> a <Facility /> you own to draw 1<Ally />.

      Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Restructure" score={1} ability={(
    <>
      <Destroy /> a <Facility /> you own to build a <Facility />.

      Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Settle IP Dispute" score={1} ability={(
    <>
      <Destroy /> a <Facility /> you own to draw 1<Contract />.

      Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Diversify" score={-1} ability={(
    <>
      Build a <Facility /> on an <Asteroid /> with the green resource. Build a <Facility /> on an <Asteroid /> with the red resource. Build a <Facility /> on an <Asteroid /> with the blue resource.
    </>
  )}/>),

  (<FactionCard name="Headquarters" score={1} ability={(
    <>
      Build 2 <Facility /> on the center asteroid or draw 2<FactionCardIcon />.
    </>
  )}/>),

  (<FactionCard name="Mirror Protocol" score={-1} ability={(
    <>
      If a <Facility /> you own is adjacent to an empty space on another <Asteroid /> you may build a <Facility /> of the same shape on that empty space. You may do this for any number of your <Facility />.
    </>
  )}/>),

  (<FactionCard name="Expand" score={-1} ability={(
    <>
      On up to 3 <Asteroid /> with at least 1 <Facility /> you own, you may build a <Facility />.
    </>
  )}/>),

];

const cyborgUnionCards = [

  (<FactionCard name="Augment" score={1} ability={(
    <>
      Complete <Contracts /> gaining each bonus you collect an additional time.
    </>
  )}/>),

  (<FactionCard name="Exchange Program" score={1} ability={(
    <>
      Draw 2<Ally />.

      Choose an opponent. That player draws 1<Ally />.
    </>
  )}/>),

  (<FactionCard name="Trade Arms" score={2} ability={(
    <>
      Draw 1<Rocket />. Choose an opponent to also draw 1<Rocket />.

      Build a <Facility />.
    </>
  )}/>),

  (<FactionCard name="Unsolicited Help" score={0} ability={(
    <>
      Build 2 <Facility />. Choose an opponent and build a <Facility /> from their supply.
    </>
  )}/>),

  (<FactionCard name="Workplace Upgrades" score={1} ability={(
    <>
      Complete <Contracts />. For each card you would draw as a bonus, you may instead build a <Facility />.
    </>
  )}/>),

  // TODO replace "Cyborg Union card" with a faction card icon once we have one
  (<FactionCard name="Well Organized" score={1} ability={(
    <>
      Build a <Facility /> adjacent to a <Comet />. Complete <Contracts /> or play 1<FactionCardIcon />.
    </>
  )}/>),

  // TODO add faction card icon
  (<FactionCard name="Enhance Everyone" score={0} ability={(
    <>
      Draw 2<FactionCardIcon />. All of your opponents draw 1<FactionCardIcon />.

      Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Union Contract" score={1} ability={(
    <>
      Draw 1<Contract />. Complete <Contracts /> or draw an additional 1<Contract />.
    </>
  )}/>),
];

const explorerSocietyCards = [
  (<FactionCard name="Crowd" score={0} ability={(
    <>
      <Move /> any number of your <Facility /> that are not adjacent to other players’ <Facility /> to spaces that are adjacent to other players’ <Facility />.


      Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Special Mission" score={0} ability={(
    <>
      Choose a <Facility /> shape. You may <Move /> any number your <Facility /> of that shape on the board to any empty spaces.

      Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Gather" score={-1} ability={(
    <>
      Choose an <Asteroid />, you may move any number of your <Facility /> on each adjacent <Asteroid /> to any empty spaces on the chosen <Asteroid />.

      Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Scatter" score={0} ability={(
    <>
      Choose an <Asteroid />, <Move /> each of your <Facility /> on that <Asteroid /> to empty spaces on any adjacent <Asteroid />. You must <Move /> to as many different <Asteroid /> as possible.

      Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Resource Rush" score={-1} ability={(
    <>
      Choose a resource type. You may <Move /> any number of your <Facility /> that are not on an <Asteroid /> with that resource to empty spaces on an <Asteroid /> with that resource.

      Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Rendezvous" score={0} ability={(
    <>
      Choose one <Facility /> you own, you may <Move /> any number of your other <Facility /> to spaces adjacent to the chosen <Facility />.

      Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Study Comet" score={0} ability={(
    <>
      Choose a <Comet />. You may <Move /> up to 2 of your <Facility /> to the spaces on either side of the <Comet />.

      Take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Migrate" score={-1} ability={(
    <>
      <Move /> any number of your <Facility /> from 1 <Asteroid /> to another. You can rearrange them on the new <Asteroid />.

      Take another <Action />.
    </>
  )}/>),

];

const cruxCabalCards = [
  (<FactionCard name="Endgame" score={1} ability={(
    <>
      Take another <Action />.

      Take another <Action />.

      If there are no cards left in the <Contract /> deck, take another <Action />.
    </>
  )}/>),

  (<FactionCard name="Deduce Strategy" score={0} ability={(
    <>
      Look at another player’s hand and take a card from that hand into your hand.

      Draw 1<FactionCardIcon />.
    </>
  )}/>),

  (<FactionCard name="Induct" score={0} ability={(
    <>
      Look at the top 2 cards of the <Ally /> deck. Play 1 and put the other back.

      Draw 1<FactionCardIcon />.
    </>
  )}/>),

  (<FactionCard name="Quid Pro Quo" score={0} ability={(
    <>
      You may give other players any cards from your hand or <Ally /> you own. Build a <Facility /> for each card given.
    </>
  )}/>),

  (<FactionCard name="Mind Control" score={0} ability={(
    <>
      Take another player’s <Ally /> or draw 1<Ally />.

      Draw 1<FactionCardIcon />.
    </>
  )}/>),

  (<FactionCard name="Scheme" score={1} ability={(
    <>
      Draw 3 cards. The cards may be taken from any combination of the <Contract /> deck, <Rocket /> deck, and your <FactionCardIcon /> deck.
    </>
  )}/>),

  (<FactionCard name="Infiltrate" score={0} ability={(
    <>
      Choose an opponent. They draw 1<Ally />. Take up to 2 cards their hand without looking at their fronts. Draw 1<FactionCardIcon />.
    </>
  )}/>),

  (<FactionCard name="Blackmail" score={1} ability={(
    <>
      Choose up to 3<Ally /> belonging to any player(s). Perform the actions on each <Ally />.
    </>
  )}/>),
];

export let factionCards = theScavengerCards
  .concat(HydrusGangCards)
  .concat(unearthIncCards)
  .concat(cyborgUnionCards)
  .concat(explorerSocietyCards)
  .concat(cruxCabalCards)
  .map((card) => React.cloneElement(card, { key: card.props.name }));
