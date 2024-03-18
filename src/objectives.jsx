import React from 'react';
import { Asteroid, Circle, Square, Droplet, Ally, FactionCardIcon, Action, Comet, Contract, Rocket, Contracts, Facility, VictoryPoints } from './icons.jsx';
import { ObjectiveCard } from './cardTemplates.jsx';

export const objectives = [
  (<ObjectiveCard name="Fabulous" score={3} type="Objective" text={(
    <>
      Have a <Facility /> that is adjacent to 3 non-neutral <Square />.
    </>
  )}/>),

  (<ObjectiveCard name="Versatile" score={3} type="Objective" text={(
    <>
      Have at least 1 <Circle />, 1 <Square />, and 1 <Droplet /> on the board, at least 1 <Ally />, and at least 1<Contract />, 1<Rocket />, and 1<FactionCardIcon /> in your hand.
    </>
  )}/>),

  (<ObjectiveCard name="Contiguous" score={4} type="Objective" text={(
    <>
      Have a route of 9 or more connected <Facility /> (without using neutral <Facility />).
    </>
  )}/>),

  (<ObjectiveCard name="Open Book" score={3} type="Objective" text={(
    <>
      Have at least 4 less cards in your hand than the player who has the most.
    </>
  )}/>),

  (<ObjectiveCard name="Encompassing" score={4} type="Objective" text={(
    <>
      An opponent’s single <Facility /> is adjacent to 3 of your <Facility />.
    </>
  )}/>),

  (<ObjectiveCard name="Neighborly" score={4} type="Objective" text={(
    <>
      Have 5 or more <Facility /> adjacent to other player’s <Facility />.
    </>
  )}/>),

  (<ObjectiveCard name="Disparate" score={5} type="Objective" text={(
    <>
      Have at least 3 routes of length 3 or longer that are not connected to each other. Do not include neutral <Facility />.
    </>
  )}/>),

  (<ObjectiveCard name="Meddlesome" score={3} type="Objective" text={(
    <>
      Have a single <Facility /> adjacent to 3 <Facility /> belonging to other player(s).
    </>
  )}/>),

  (<ObjectiveCard name="Charismatic" score={3} type="Objective" text={(
    <>
      Have 3 or more <Ally />.
    </>
  )}/>),

  (<ObjectiveCard name="Minimal" score={3} type="Objective" text={(
    <>
      Have 2 fewer <Facility /> on the board than each other player.
    </>
  )}/>),

  (<ObjectiveCard name="Well Rounded" score={4} type="Objective" text={(
    <>
      Have scored at least 3<FactionCardIcon />, 3<Rocket />, and 3<Contract />.
    </>
  )}/>),

  (<ObjectiveCard name="Strategic" score={4} type="Objective" text={(
    <>
      Play 4 or more <FactionCardIcon /> and/or <Rocket /> in 1 turn.
    </>
  )}/>),

  (<ObjectiveCard name="Efficient" score={4} type="Objective" text={(
    <>
      Have more scored <Contract /> than you have <Facility />.
    </>
  )}/>),

  (<ObjectiveCard name="Self-Sufficient" score={4} type="Objective" text={(
    <>
      Have 4 fewer <Facility /> adjacent to neutral <Facility /> than an opponent.
    </>
  )}/>),

  (<ObjectiveCard name="Trail Blazer" score={3} type="Objective" text={(
    <>
      If only 1 <Asteroid /> has no <Facility /> on it, build a <Facility /> on that <Asteroid />.
    </>
  )}/>),

  (<ObjectiveCard name="Selective" score={3} type="Objective" text={(
    <>
      Finish your last turn in the game without any <Contract /> worth 2 <VictoryPoints /> in your scored cards pile.
    </>
  )}/>),

  (<ObjectiveCard name="Ambitious" score={3} type="Objective" text={(
    <>
      Have at least 3 scored <Contract /> and half or more of your scored <Contract /> are worth 5 <VictoryPoints />.
    </>
  )}/>),

].map((objective) => [React.cloneElement(objective, { key: objective.props.name })]).flat();
//In 1 turn, complete 2<Contract /> using routes with <Comet /> without gaining any bonuses.
