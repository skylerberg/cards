import React from 'react';
import { Rotate, Asteroid, Destroy, Action, Facility } from './icons.jsx';
import { RocketCard } from './cardTemplates.jsx';

export const rockets = [
  (<RocketCard name="Precision Rocket" score={0} ability={(
    <>
      <Rotate /> an <Asteroid /> to any position. Take another <Action />.
    </>
  )}/>),

  (<RocketCard name="Divergent Rockets" score={0} ability={(
    <>
      <Rotate /> an <Asteroid /> up to 2 space. <Rotate /> a different <Asteroid /> up to 1 space. Take another <Action />.
    </>
  )}/>),

  (<RocketCard name="Barrage" score={0} ability={(
    <>
      Choose up to 3 different <Asteroid />. <Rotate /> each 1 space. Take another <Action />.
    </>
  )}/>),

  (<RocketCard name="Double Precision Rockets" score={2} ability={(
    <>
      <Rotate /> 2 <Asteroid /> to any positions.
    </>
  )}/>),

  (<RocketCard name="Carrier Rocket" score={1} ability={(
    <>
      <Rotate /> an <Asteroid /> 1 space. Build a <Facility />.
    </>
  )}/>),

  (<RocketCard name="Misattributed Rocket" score={-1} ability={(
    <>
      <Rotate /> an <Asteroid /> up to 2 spaces. You may <Destroy /> a <Facility /> on that <Asteroid />.

      Put this card in an opponent's scored cards pile.
    </>
  )}/>),
].map((rocket) => React.cloneElement(rocket, { key: rocket.props.name }));
