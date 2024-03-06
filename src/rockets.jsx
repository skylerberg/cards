import React from 'react';
import { Rotate, Asteroid, Destroy, Action, Facility, Rocket, Contracts } from './icons.jsx';
import { RocketCard } from './cardTemplates.jsx';

export const rockets = [
  (<RocketCard name="Precision Rocket" score={0} type="Rocket" ability={(
    <>
      <Rotate /> an <Asteroid /> to any position. Take another <Action />.
    </>
  )}/>),

  (<RocketCard name="Commercial Rockets" score={1} type="Rocket" ability={(
    <>
      <Rotate /> up to 2 different <Asteroid /> 1 space each. Complete <Contracts />.
    </>
  )}/>),

  (<RocketCard name="Volley" score={1} type="Rocket" ability={(
    <>
      <Rotate /> 2 different <Asteroid /> up to 2 spaces each. Draw 1<Rocket />.
    </>
  )}/>),

  (<RocketCard name="Divergent Rockets" score={0} type="Rocket" ability={(
    <>
      <Rotate /> an <Asteroid /> up to 2 spaces. <Rotate /> a different <Asteroid /> up to 1 space. Take another <Action />.
    </>
  )}/>),

  (<RocketCard name="Barrage" score={0} type="Rocket" ability={(
    <>
      Choose up to 3 different <Asteroid />. <Rotate /> each 1 space. Take another <Action />.
    </>
  )}/>),

  (<RocketCard name="Double Precision Rockets" score={2} type="Rocket" ability={(
    <>
      <Rotate /> 2 <Asteroid /> to any positions.
    </>
  )}/>),

  (<RocketCard name="Carrier Rocket" score={1} type="Rocket" ability={(
    <>
      <Rotate /> an <Asteroid /> 1 space. Build a <Facility />.
    </>
  )}/>),

  (<RocketCard name="Misattributed Rocket" score={-1} type="Rocket" ability={(
    <>
      <Rotate /> an <Asteroid /> up to 2 spaces. You may <Destroy /> a <Facility /> on that <Asteroid />.

      Put this card in an opponent's scored cards pile.
    </>
  )}/>),
].map((rocket) => [
  React.cloneElement(rocket, { key: rocket.props.name }),
]).flat();
