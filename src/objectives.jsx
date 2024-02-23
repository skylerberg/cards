import React from 'react';
import { Asteroid, Circle, Square, Droplet, Ally, FactionCardIcon, Action, Comet, Contract, Rocket, Contracts, Facility, VictoryPoints } from './icons.jsx';
import { ObjectiveCard } from './cardTemplates.jsx';

export const objectives = [
  (<ObjectiveCard name="Cosmopolitan" score={3} type="Objective" text={(
    <>
      Have a <Facility /> that is adjacent to non-neutral <Facility /> of all three shapes (circle, droplet, and square).

    </>
  )}/>),

  (<ObjectiveCard name="Contiguous" score={4} type="Objective" text={(
    <>
      Have a route of 9 or more connected <Facility /> (without using neutral <Facility />).
    </>
  )}/>),

  (<ObjectiveCard name="Dedicated" score={3} type="Objective" text={(
    <>
      Draw the last card in a deck. <i>Drawing from the <Contract /> deck to restock the public <Contracts /> counts.</i>
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

  (<ObjectiveCard name="Generous" score={3} type="Objective" text={(
    <>
      Start a turn with both you and another player having a route to complete a public <Contract />. End your turn without scoring that <Contract />.
    </>
  )}/>),

  (<ObjectiveCard name="Meddlesome" score={3} type="Objective" text={(
    <>
      Have a single <Facility /> adjacent to 3 <Facility /> belonging to other player(s).
    </>
  )}/>),

  (<ObjectiveCard name="Charismatic" score={4} type="Objective" text={(
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

  (<ObjectiveCard name="Pitiable" score={4} type="Objective" text={(
    <>
      In 1 turn, gain no bonuses for 2<Contract /> you complete using routes with <Comet />.
    </>
  )}/>),

  (<ObjectiveCard name="Reserved" score={4} type="Objective" text={(
    <>
      Be the only player who has 3 or less <Circle />, 3 or less <Square />, and 3 or less <Droplet />.
    </>
  )}/>),

  (<ObjectiveCard name="Self-Sufficient" score={4} type="Objective" text={(
    <>
      Have 4 fewer <Facility /> adjacent to neutral <Facility /> than an opponent.
    </>
  )}/>),

].map((objective) => [React.cloneElement(objective, { key: objective.props.name })]).flat();
//In 1 turn, complete 2<Contract /> using routes with <Comet /> without gaining any bonuses.
