import React from 'react';
import { Rotate, Asteroid, Destroy, Contracts, Facility } from './icons.jsx';
import { RocketCard } from './cardTemplates.jsx';

export const rockets = [
  (<RocketCard name="Precision Rocket" score={2} ability={(
    <>
      <Rotate /> an <Asteroid /> to any position.
    </>
  )}/>),

  (<RocketCard name="Divergent Rockets" score={2} ability={(
    <>
      <Rotate /> an <Asteroid /> up to 2 space. <Rotate /> a different <Asteroid /> up to 1 space.
    </>
  )}/>),

  (<RocketCard name="Barrage" score={2} ability={(
    <>
      Choose up to 3 different <Asteroid />. <Rotate /> each 1 space.
    </>
  )}/>),

  (<RocketCard name="Commercial Rocket" score={0} ability={(
    <>
      <Rotate /> 2 <Asteroid /> up to 2 spaces each. Complete <Contracts />.
    </>
  )}/>),

  (<RocketCard name="Sidecar Rocket" score={3} ability={(
    <>
      Rotate an <Asteroid /> any number of spaces. Choose another player, they may rotate a different <Asteroid /> up to half that number of spaces rounded up.
    </>
  )}/>),

  (<RocketCard name="Double Precision Rockets" score={1} ability={(
    <>
      <Rotate /> 2 <Asteroid /> to any positions.
    </>
  )}/>),

  (<RocketCard name="Carrier Rocket" score={1} ability={(
    <>
      <Rotate /> an <Asteroid /> 1 space. Build a <Facility />.
    </>
  )}/>),

  (<RocketCard name="Regulation Rocket" score={3} ability={(
    <>
      <Rotate /> an <Asteroid /> 1 space.
    </>
  )}/>),

  (<RocketCard name="Misattributed Rocket" score={-1} ability={(
    <>
      <Rotate /> an <Asteroid /> up to 2 spaces. You may <Destroy /> a <Facility /> on that <Asteroid />.

      Put this card in an opponent's scored cards pile.
    </>
  )}/>),

  (<RocketCard name="Synchronized Rockets" score={2} ability={(
    <>
      Choose 2 of your <Facility /> that are on adjacent <Asteroid />. <Rotate /> those 2 <Asteroid /> to make the chosen <Facility /> adjacent.
    </>
  )}/>),

  (<RocketCard name="Heavy Rockets" score={2} ability={(
    <>
      <Rotate /> 2 <Asteroid /> exactly 3 spaces.
    </>
  )}/>),

  (<RocketCard name="Fuel Line Rockets" score={2} ability={(
    <>
      Choose up to 3 different <Asteroid /> you have a <Facility /> on. Rotate each <Asteroid /> up to 2 spaces.
    </>
  )}/>),
].map((rocket) => React.cloneElement(rocket, { key: rocket.props.name }));
