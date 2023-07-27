import React from 'react';
import { Rotate, RotateClockwise, Asteroid, Destroy, Contract, Contracts, Facility } from './icons.jsx';
import { RocketCard } from './cardTemplates.jsx';

export const rockets = [

  (<RocketCard name="Unstable Rockets" score={2} ability={(
    <>
      <Destroy /> any number of your <Facility />. You may <Rotate /> each <Asteroid /> where you removed a <Facility /> to any position.
    </>
  )}/>),

  (<RocketCard name="Regimented Rockets" score={2} ability={(
    <>
      Choose 3 <Asteroid />. <RotateClockwise /> 1 of the chosen <Asteroid /> clockwise 3 spaces. <RotateClockwise /> another 1 of the chosen <Asteroid /> clockwise 2 spaces. <RotateClockwise /> the remaining chosen <Asteroid /> clockwise 1 space.
    </>
  )}/>),

  (<RocketCard name="Sidecar Rocket" score={3} ability={(
    <>
      Rotate an asteroid any number of spaces. Choose another player, they may rotate a different asteroid up to half that number of spaces rounded up.
    </>
  )}/>),

  (<RocketCard name="Bespoke Rockets" score={0} ability={(
    <>
      <Rotate /> 2 <Asteroid /> up to 2 spaces each. Complete <Contracts />.
    </>
  )}/>),

  (<RocketCard name="Barrage" score={2} ability={(
    <>
      <Rotate /> 3 <Asteroid /> up to 1 spaces each.
    </>
  )}/>),

  (<RocketCard name="Twin Rockets" score={2} ability={(
    <>
      <Rotate /> 2 <Asteroid /> up to 2 spaces each.
    </>
  )}/>),

  (<RocketCard name="Precision Rocket" score={2} ability={(
    <>
      <Rotate /> 1 <Asteroid /> to any position.
    </>
  )}/>),

  (<RocketCard name="Double Precision Rockets" score={1} ability={(
    <>
      <Rotate /> 2 <Asteroid /> to any positions.
    </>
  )}/>),

  (<RocketCard name="Newtownian Rockets" score={2} ability={(
    <>
      <Rotate /> 1 <Asteroid /> up to 3 spaces clockwise. <Rotate /> an adjacent <Asteroid /> the same number of spaces counter-clockwise.
    </>
  )}/>),

  (<RocketCard name="Carrier Rocket" score={1} ability={(
    <>
      <Rotate /> 1 <Asteroid /> 1 space. Build a <Facility />.
    </>
  )}/>),

  (<RocketCard name="Proportional Rockets" score={2} ability={(
    <>
      Choose a number between 1 and 3. <RotateClockwise /> that number of <Asteroid /> that number of spaces clockwise.
    </>
  )}/>),

  (<RocketCard name="Secret Rocket" score={1} ability={(
    <>
      <Rotate /> 1 <Asteroid /> up to 2 spaces. Complete 1 <Contract /> from your hand.
    </>
  )}/>),

  (<RocketCard name="Conspicuous Rocket" score={1} ability={(
    <>
      <Rotate /> 1 <Asteroid /> up to 2 spaces. Complete 1 public <Contract />.
    </>
  )}/>),

].map((rocket) => React.cloneElement(rocket, { key: rocket.props.name }));
