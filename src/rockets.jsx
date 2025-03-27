import React from 'react';
import { Rotate, Asteroid, Destroy, Research, Ally, Action, Facility, Rocket, Contracts, FactionCardIcon, TakeAnotherAction } from './icons.jsx';
import { RocketCard } from './cardTemplates.jsx';

export const rockets = [
  (<RocketCard name="Exactitude Rocket" cost={0} score={0} type="Rocket" ability={(
    <>
      <Rotate /> a land to any position.
    </>
  )}/>),

  (<RocketCard name="Divergent Runes" cost={0} score={0} type="Rocket" ability={(
    <>
      <Rotate /> a land up to 2 spaces. <br /><Rotate /> a different land up to 1 space.
    </>
  )}/>),

  (<RocketCard name="Chaos Runes" cost={0} score={0} type="Rocket" ability={(
    <>
      <Rotate /> up to 3 different land <br />1 space each.
    </>
  )}/>),

  (<RocketCard name="Certitude Runes" shrinkName={false} cost={1} score={1} type="Rocket" ability={(
    <>
      <Rotate /> 2 land to any positions.
    </>
  )}/>),

  (<RocketCard name="Courier Rune" cost={2} score={1} type="Rocket" ability={(
    <>
      <Rotate /> a land up to 2 spaces. <br/> Build a <Facility />.
    </>
  )}/>),

  (<RocketCard name="Knowledge Rune" cost={1} score={1} type="Rocket" ability={(
    <>
      <Rotate /> a land up to 2 spaces. <br /> Place 1 <Research />.
    </>
  )}/>),

  (<RocketCard name="Camaraderie Rune" cost={1} score={0} type="Rocket" ability={(
    <>
      <Rotate /> a land 1 space.

      Draw 1<Ally />.
    </>
  )}/>),

  (<RocketCard name="Minor Runes" cost={0} score={1} type="Rocket" ability={(
    <>
      <Rotate /> up to 2 different lands<br />1 space each.
    </>
  )}/>),

  (<RocketCard name="Major Runes" cost={1} score={2} type="Rocket" ability={(
    <>
      <Rotate /> up to 2 different up to land<br />2 spaces each.
    </>
  )}/>),

  (<RocketCard name="Delivery Rune" cost={0} score={1} type="Rocket" ability={(
    <>
      <Rotate /> a land 1 space.

      Deliver <Contracts />.
    </>
  )}/>),

].map((rocket) => [
  React.cloneElement(rocket, { key: rocket.props.name }),
]).flat();
