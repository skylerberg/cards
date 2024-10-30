import React from 'react';
import { Asteroid, Circle, Square, Droplet, Ally, FactionCardIcon, Comet, Contract, Rocket, Facility, VictoryPoints } from './icons.jsx';
import { AchievementCard } from './cardTemplates.jsx';

export const achievements = [
  (<AchievementCard name="Fabulous" score={4} type="Achievement" text={(
    <>
      Have a <Facility /> that is adjacent to 3 non-neutral <Square large="true" />.
    </>
  )}/>),

  (<AchievementCard name="Versatile" score={3} type="Achievement" text={(
    <>
      Have an <Ally large="true"/> in play; <Contract large="true"/><Rocket large="true"/><FactionCardIcon large="true"/> in your hand; and a <Circle large="true" />, <Square large="true" />, and <Droplet large="true" /> on the board.
    </>
  )}/>),

  (<AchievementCard name="Contiguous" score={4} type="Achievement" text={(
    <>
      Have a route of 9 or more connected <Facility /> you own.
    </>
  )}/>),

  (<AchievementCard name="Open Book" score={3} type="Achievement" text={(
    <>
      Have at least 4 less cards in your hand than the player who has the most.
    </>
  )}/>),

  (<AchievementCard name="Encompassing" score={4} type="Achievement" text={(
    <>
      An opponent’s single <Facility /> is adjacent to 3 of your <Facility />.
    </>
  )}/>),

  (<AchievementCard name="Neighborly" score={4} type="Achievement" text={(
    <>
      Have 5 or more <Facility /> adjacent to opponents' <Facility />.
    </>
  )}/>),

  (<AchievementCard name="Disparate" score={5} type="Achievement" text={(
    <>
      Have at least 3 routes of 3 or more <Facility /> you own that are not connected to each other.
    </>
  )}/>),

  (<AchievementCard name="Meddlesome" score={3} type="Achievement" text={(
    <>
      Have a single <Facility /> adjacent to 3 <Facility /> owned by other player(s).
    </>
  )}/>),

  (<AchievementCard name="Charismatic" score={3} type="Achievement" text={(
    <>
      Have 3 or more <Ally large="true" />.
    </>
  )}/>),

  (<AchievementCard name="Minimal" score={3} type="Achievement" text={(
    <>
      Have 2 fewer <Facility /> on the board than each other player.
    </>
  )}/>),

  (<AchievementCard name="Centered" score={3} type="Achievement" text={(
    <>
      Have 5 fewer <Facility /> adjacent to neutral <Facility /> than an opponent.
    </>
  )}/>),

  (<AchievementCard name="Trail Blazer" score={3} type="Achievement" text={(
    <>
      All <Asteroid large="true" /> have at least 1 <Facility /> owned by any player(s).
    </>
  )}/>),

  (<AchievementCard name="Extractive" score={4} type="Achievement" text={(
    <>
      Have 4 or more <Circle large="true" /> you own adjacent to neutral <Facility />.
    </>
  )}/>),

  (<AchievementCard name="Refined" score={5} type="Achievement" text={(
    <>
      Have 5 or more <Droplet large="true" /> you own that are not adjacent to each other.
    </>
  )}/>),

  (<AchievementCard name="Learned" score={5} type="Achievement" text={(
    <>
      Have 7 or more research markers.
    </>
  )}/>),

  (<AchievementCard name="Hasty" score={3} type="Achievement" text={(
    <>
      Be the player who reveals The Rush divider.
    </>
  )}/>),


  /*
  (<AchievementCard name="Doppelganger" score={4} type="Achievement" text={(
    <>
      Have a <Facility /> of each type (<Circle />, <Square />, <Droplet />) adjacent to an opponent's <Facility /> of the same type with a <Comet /> between them.
    </>
  )}/>),
  */

].map((achievement) => [React.cloneElement(achievement, { key: achievement.props.name })]).flat();
//In 1 turn, complete 2<Contract /> using routes with <Comet /> without gaining any bonuses.
