import React from 'react';
import { Rotate, Asteroid, Destroy, Ally, Action, Facility, Rocket, Contracts, FactionCardIcon } from './icons.jsx';
import { RocketCard } from './cardTemplates.jsx';

export const rockets = [
  (<RocketCard name="Precision Rocket" score={0} type="Rocket" ability={(
    <>
      <Rotate /> an <Asteroid /> to any position. Take another <Action />.
    </>
  )}/>),

  (<RocketCard name="Divergent Rockets" score={0} type="Rocket" ability={(
    <>
      <Rotate /> an <Asteroid /> up to 2 spaces. <Rotate /> a different <Asteroid /> up to 1 space. Take another <Action />.
    </>
  )}/>),

  (<RocketCard name="Barrage" score={0} type="Rocket" ability={(
    <>
      <Rotate /> up to 3 different <Asteroid /> 1 space each. Take another <Action />.
    </>
  )}/>),

  (<RocketCard name="Triple Precision Rockets" score={2} type="Rocket" ability={(
    <>
      <Rotate /> 3 <Asteroid /> to any positions.
    </>
  )}/>),

  (<RocketCard name="Carrier Rockets" score={0} type="Rocket" ability={(
    <>
      <Rotate /> 2 different <Asteroid /> up to 2 spaces each. Build a <Facility />.
    </>
  )}/>),

  (<RocketCard name="Harbinger Rocket" score={0} type="Rocket" ability={(
    <>
      <Rotate /> an <Asteroid /> up to 2 spaces. Draw 1<Rocket /> and a 1<FactionCardIcon />.
    </>
  )}/>),

  (<RocketCard name="Friendly Rocket" score={0} type="Rocket" ability={(
    <>
      <Rotate /> an <Asteroid /> 1 space.

      Use an <Ally /> you own or draw 1<Ally />.
    </>
  )}/>),

  (<RocketCard name="Twin Rockets" score={1} type="Rocket" ability={(
    <>
      <Rotate /> up to 2 different <Asteroid /> 1 space each. Take another <Action />.
    </>
  )}/>),

].map((rocket) => [
  React.cloneElement(rocket, { key: rocket.props.name }),
]).flat();
