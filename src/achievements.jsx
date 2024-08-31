import React from 'react';
import { Asteroid, Circle, Square, Droplet, Ally, FactionCardIcon, Action, Comet, Contract, Rocket, Contracts, Facility, VictoryPoints } from './icons.jsx';
import { AchievementCard } from './cardTemplates.jsx';

export const achievements = [
  (<AchievementCard name="Fabulous" score={4} type="Achievement" text={(
    <>
      Have a <Facility /> that is adjacent to 3 non-neutral <Square />.
    </>
  )}/>),

  (<AchievementCard name="Versatile" score={3} type="Achievement" text={(
    <>
      Have at least 1 <Circle />, 1 <Square />, and 1 <Droplet /> on the board, at least 1 <Ally />, and at least 1<Contract />, 1<Rocket />, and 1<FactionCardIcon /> in your hand.
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
      Have 5 or more <Facility /> adjacent to other player’s <Facility />.
    </>
  )}/>),

  (<AchievementCard name="Disparate" score={5} type="Achievement" text={(
    <>
      Have at least 3 routes of 3 or more <Facility /> you own that are not connected to each other.
    </>
  )}/>),

  (<AchievementCard name="Meddlesome" score={3} type="Achievement" text={(
    <>
      Have a single <Facility /> adjacent to 3 <Facility /> belonging to other player(s).
    </>
  )}/>),

  (<AchievementCard name="Charismatic" score={3} type="Achievement" text={(
    <>
      Have 3 or more <Ally />.
    </>
  )}/>),

  (<AchievementCard name="Minimal" score={3} type="Achievement" text={(
    <>
      Have 2 fewer <Facility /> on the board than each other player.
    </>
  )}/>),

  (<AchievementCard name="Well Rounded" score={3} type="Achievement" text={(
    <>
      Have scored at least 3<FactionCardIcon />, 3<Rocket />, and 3<Contract />.
    </>
  )}/>),

  (<AchievementCard name="Independent" score={3} type="Achievement" text={(
    <>
      Complete 2 or more <Contract /> on your turn with no neutral <Facility /> and no <Comet /> in any routes used.
    </>
  )}/>),

  (<AchievementCard name="Efficient" score={4} type="Achievement" text={(
    <>
      Have more scored <Contract /> than you have <Facility />.
    </>
  )}/>),

  (<AchievementCard name="Centered" score={3} type="Achievement" text={(
    <>
      Have 5 fewer <Facility /> adjacent to neutral <Facility /> than an opponent.
    </>
  )}/>),

  (<AchievementCard name="Trail Blazer" score={3} type="Achievement" text={(
    <>
      All <Asteroid /> have at least 1 <Facility />.
    </>
  )}/>),

  (<AchievementCard name="Ambitious" score={3} type="Achievement" text={(
    <>
      Have at least 3 scored <Contract /> and half or more of your scored <Contract /> are worth 5 <VictoryPoints />.
    </>
  )}/>),

  (<AchievementCard name="Extractive" score={4} type="Achievement" text={(
    <>
      Have 4 or more <Circle /> you own adjacent to neutral <Facility />.
    </>
  )}/>),

  (<AchievementCard name="Refined" score={5} type="Achievement" text={(
    <>
      Have 5 or more <Droplet /> you own that are not adjacent to each other.
    </>
  )}/>),

].map((achievement) => [React.cloneElement(achievement, { key: achievement.props.name })]).flat();
//In 1 turn, complete 2<Contract /> using routes with <Comet /> without gaining any bonuses.
