import React from 'react';
import { Asteroid, Ally, FactionCardIcon, Comet, Contract, Rocket, Contracts, Facility, VictoryPoints } from './icons.jsx';
import { ObjectiveCard } from './cardTemplates.jsx';

export const objectives = [
  (<ObjectiveCard name="Masterful" score={3} type="Objective" text={(
    <>
      During your turn, collect all bonuses for a <Contract /> you complete worth 4 or more <VictoryPoints />.
    </>
  )}/>),

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

  (<ObjectiveCard name="Dedicated" score={5} type="Objective" text={(
    <>
      Draw the last card in a deck. <i>Drawing from the <Contract /> deck to restock the public <Contracts /> counts.</i>
    </>
  )}/>),

  (<ObjectiveCard name="Networked" score={5} type="Objective" text={(
    <>
      Have 4 or more <Comet  /> between your <Facility />.
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

  (<ObjectiveCard name="Xenophilic" score={3} type="Objective" text={(
    <>
      Have a <Facility /> adjacent to a neutral <Facility /> on 4 or more different <Asteroid />.
    </>
  )}/>),

  (<ObjectiveCard name="Bombardier" score={3} type="Objective" text={(
    <>
      Have 4 or more <Rocket /> in your hand.
    </>
  )}/>),

  (<ObjectiveCard name="Well Rounded" score={4} type="Objective" text={(
    <>
      Have scored at least 3<FactionCardIcon />, 3<Rocket />, and 3<Contract />.
    </>
  )}/>),

].map((objective) => [React.cloneElement(objective, { key: objective.props.name })]).flat();
