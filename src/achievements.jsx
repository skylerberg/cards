import React from 'react';
import { Research, Person, Horse, Pigeon, Ally, } from './icons.jsx';
import { AchievementCard } from './cardTemplates.jsx';

export const achievements = [
  (<AchievementCard name="Horse Tamer" score={4} type="Achievement" text={(
    <>
      Have a courier that is adjacent to 3 non-wild <Horse large="true" />.
    </>
  )}/>),

  (<AchievementCard name="Contiguous" score={4} type="Achievement" text={(
    <>
      Have a route of 9 or more of your couriers.
    </>
  )}/>),

  (<AchievementCard name="Open Book" score={3} type="Achievement" text={(
    <>
      Have at least 4 fewer cards in your hand than another player.
    </>
  )}/>),

  (<AchievementCard name="Encompassing" score={4} type="Achievement" text={(
    <>
      An opponent’s courier is adjacent to 3 of your couriers.
    </>
  )}/>),

  (<AchievementCard name="Neighborly" score={4} type="Achievement" text={(
    <>
      Have 5 or more couriers adjacent to opponents' couriers.
    </>
  )}/>),

  (<AchievementCard name="Disparate" score={5} type="Achievement" text={(
    <>
      Have at least 3 routes of 3 or more of your couriers that are not connected to each other.
    </>
  )}/>),

  (<AchievementCard name="Meddlesome" score={3} type="Achievement" text={(
    <>
      Have a courier adjacent to 3 couriers that belong to other players.
    </>
  )}/>),

  (<AchievementCard name="Charismatic" score={3} type="Achievement" text={(
    <>
      Have 3 or more <Ally large="true" />.
    </>
  )}/>),

  (<AchievementCard name="Minimal" score={3} type="Achievement" text={(
    <>
      Have 2 fewer couriers on the board than each other player.
    </>
  )}/>),

  (<AchievementCard name="Centered" score={3} type="Achievement" text={(
    <>
      Have 5 fewer couriers adjacent to wild couriers than an opponent.
    </>
  )}/>),

  (<AchievementCard name="Trail Blazer" score={3} type="Achievement" text={(
    <>
      All lands have at least 1 courier owned by any player(s).
    </>
  )}/>),

  (<AchievementCard name="Personable" score={4} type="Achievement" text={(
    <>
      Have 4 or more <Person large="true" /> adjacent to wild couriers.
    </>
  )}/>),

  (<AchievementCard name="Scattered" score={5} type="Achievement" text={(
    <>
      Have 5 or more <Pigeon large="true" /> that are not adjacent to each other.
    </>
  )}/>),

  (<AchievementCard name="Learned" score={3} type="Achievement" text={(
    <>
      Have <Research /> on all spaces on your research tree.
    </>
  )}/>),

  (<AchievementCard name="Celebratory" score={3} type="Achievement" text={(
    <>
      Start the Holiday Rush.
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
