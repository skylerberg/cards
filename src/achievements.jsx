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
      Have at least 1<Circle large="true" />, 1<Square large="true" />, and 1<Droplet large="true" /> on the board, at least 1<Ally large="true" />, and at least 1<Contract large="true" />, 1<Rocket large="true" />, and 1<FactionCardIcon large="true" /> in your hand.
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

  (<AchievementCard name="Well Rounded" score={3} type="Achievement" text={(
    <>
      Have scored at least 3<FactionCardIcon large="true" />, 3<Rocket large="true" />, and 3<Contract large="true" />.
    </>
  )}/>),

  (<AchievementCard name="Independent" score={3} type="Achievement" text={(
    <>
      Complete 2 or more <Contract large="true" /> on your turn with no neutral <Facility /> and no <Comet large="true" /> in any routes used.
    </>
  )}/>),

  (<AchievementCard name="Efficient" score={4} type="Achievement" text={(
    <>
      Have more scored <Contract large="true" /> than you have <Facility />.
    </>
  )}/>),

  (<AchievementCard name="Centered" score={3} type="Achievement" text={(
    <>
      Have 5 fewer <Facility /> adjacent to neutral <Facility /> than an opponent.
    </>
  )}/>),

  (<AchievementCard name="Trail Blazer" score={3} type="Achievement" text={(
    <>
      All <Asteroid large="true" /> have at least 1 <Facility />.
    </>
  )}/>),

  (<AchievementCard name="Ambitious" score={3} type="Achievement" text={(
    <>
      Have at least 3 scored <Contract large="true" /> and half or more of your scored <Contract large="true" /> are worth 5 <VictoryPoints />.
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

  (<AchievementCard name="Patient" score={3} type="Achievement" text={(
    <>
      Be the only player with no scored <Contract large="true" />.
    </>
  )}/>),

].map((achievement) => [React.cloneElement(achievement, { key: achievement.props.name })]).flat();
//In 1 turn, complete 2<Contract /> using routes with <Comet /> without gaining any bonuses.
