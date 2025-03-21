import React from 'react';
import { Rotate, Asteroid, Destroy, Research, Ally, Action, Facility, Rocket, Contracts, FactionCardIcon, TakeAnotherAction } from './icons.jsx';
import { RocketCard } from './cardTemplates.jsx';

export const rockets = [
  (<RocketCard name="Precision Rocket" cost={0} score={0} type="Rocket" ability={(
    <>
      <Rotate /> an <Asteroid /> to any position.
    </>
  )}/>),

  (<RocketCard name="Divergent Rockets" cost={0} score={0} type="Rocket" ability={(
    <>
      <Rotate /> an <Asteroid /> up to 2 spaces. <br /><Rotate /> a different <Asteroid /> up to 1 space.
    </>
  )}/>),

  (<RocketCard name="Barrage" cost={0} score={0} type="Rocket" ability={(
    <>
      <Rotate /> up to 3 different <Asteroid /> <br />1 space each.
    </>
  )}/>),

  (<RocketCard name="Double Precision Rockets" shrinkName={false} cost={1} score={1} type="Rocket" ability={(
    <>
      <Rotate /> 2 <Asteroid /> to any positions.
    </>
  )}/>),

  (<RocketCard name="Carrier Rocket" cost={2} score={1} type="Rocket" ability={(
    <>
      <Rotate /> an <Asteroid /> up to 2 spaces. <br/> Build a <Facility />.
    </>
  )}/>),

  (<RocketCard name="Exploratory Rocket" cost={1} score={1} type="Rocket" ability={(
    <>
      <Rotate /> an <Asteroid /> up to 2 spaces. <br /> Place 1 <Research />.
    </>
  )}/>),

  (<RocketCard name="Friendly Rocket" cost={1} score={0} type="Rocket" ability={(
    <>
      <Rotate /> an <Asteroid /> 1 space.

      Draw 1<Ally />.
    </>
  )}/>),

  (<RocketCard name="Twin Rockets" cost={0} score={1} type="Rocket" ability={(
    <>
      <Rotate /> up to 2 different <Asteroid /><br />1 space each.
    </>
  )}/>),

].map((rocket) => [
  React.cloneElement(rocket, { key: rocket.props.name }),
]).flat();
