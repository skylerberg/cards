import React from 'react';
import { Asteroid, Research, Person, Horse, Pigeon, Ally, FactionCardIcon, Comet, Contract, Rocket, Courier, VictoryPoints } from './icons.jsx';
import { AchievementCard } from './cardTemplates.jsx';

export const achievements = [
  (<AchievementCard name="Fabulous" score={4} type="Achievement" text={(
    <>
      Have a <Courier /> that is adjacent to 3 non-neutral <Horse large="true" />.
    </>
  )}/>),

  (<AchievementCard name="Contiguous" score={4} type="Achievement" text={(
    <>
      Have a route of 9 or more connected <Courier /> you own.
    </>
  )}/>),

  (<AchievementCard name="Open Book" score={3} type="Achievement" text={(
    <>
      Have at least 4 fewer cards in your hand than another player.
    </>
  )}/>),

  (<AchievementCard name="Encompassing" score={4} type="Achievement" text={(
    <>
      An opponent’s single <Courier /> is adjacent to 3 of your <Courier />.
    </>
  )}/>),

  (<AchievementCard name="Neighborly" score={4} type="Achievement" text={(
    <>
      Have 5 or more <Courier /> adjacent to opponents' <Courier />.
    </>
  )}/>),

  (<AchievementCard name="Disparate" score={5} type="Achievement" text={(
    <>
      Have at least 3 routes of 3 or more <Courier /> you own that are not connected to each other.
    </>
  )}/>),

  (<AchievementCard name="Meddlesome" score={3} type="Achievement" text={(
    <>
      Have a single <Courier /> adjacent to 3 <Courier /> owned by other player(s).
    </>
  )}/>),

  (<AchievementCard name="Charismatic" score={3} type="Achievement" text={(
    <>
      Have 3 or more <Ally large="true" />.
    </>
  )}/>),

  (<AchievementCard name="Minimal" score={3} type="Achievement" text={(
    <>
      Have 2 fewer <Courier /> on the board than each other player.
    </>
  )}/>),

  (<AchievementCard name="Centered" score={3} type="Achievement" text={(
    <>
      Have 5 fewer <Courier /> adjacent to neutral <Courier /> than an opponent.
    </>
  )}/>),

  (<AchievementCard name="Trail Blazer" score={3} type="Achievement" text={(
    <>
      All <Asteroid large="true" /> have at least 1 <Courier /> owned by any player(s).
    </>
  )}/>),

  (<AchievementCard name="Extractive" score={4} type="Achievement" text={(
    <>
      Have 4 or more <Person large="true" /> you own adjacent to neutral <Courier />.
    </>
  )}/>),

  (<AchievementCard name="Refined" score={5} type="Achievement" text={(
    <>
      Have 5 or more <Pigeon large="true" /> you own that are not adjacent to each other.
    </>
  )}/>),

  (<AchievementCard name="Learned" score={3} type="Achievement" text={(
    <>
      Have <Research /> on all non-empty spaces on your research tree.
    </>
  )}/>),

  (<AchievementCard name="Hasty" score={3} type="Achievement" text={(
    <>
      Start "The Rush."
    </>
  )}/>),

  (<AchievementCard name="Conclusive" score={3} type="Achievement" text={(
    <>
      Start the final round of the game.
    </>
  )}/>),


  /*
  (<AchievementCard name="Doppelganger" score={4} type="Achievement" text={(
    <>
      Have a <Courier /> of each type (<Person />, <Horse />, <Pigeon />) adjacent to an opponent's <Courier /> of the same type with a <Comet /> between them.
    </>
  )}/>),
  */

].map((achievement) => [React.cloneElement(achievement, { key: achievement.props.name })]).flat();
//In 1 turn, complete 2<Contract /> using routes with <Comet /> without gaining any bonuses.
