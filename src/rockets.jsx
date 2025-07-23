import React from 'react';
import { Rotate, Research, VictoryPoints, Ally, Action, Rocket, Contract, FactionCardIcon, TakeAnotherAction } from './icons.jsx';
import { RocketCard } from './cardTemplates.jsx';

export const rockets = [
  (<RocketCard name="Exactitude Rune" cost={0} score={0} type="Rune" ability={(
    <>
      <Rotate /> a land to any position.
    </>
  )}/>),

  (<RocketCard name="Divergent Runes" cost={0} score={0} type="Rune" ability={(
    <>
      <Rotate /> a land up to 2 spaces. <br /><Rotate /> a different land up to 1 space.
    </>
  )}/>),

  (<RocketCard name="Chaos Runes" cost={0} score={0} type="Rune" ability={(
    <>
      <Rotate /> up to 3 different lands <br />1 space each.
    </>
  )}/>),

  (<RocketCard name="Certitude Runes" shrinkName={false} cost={1} score={1} type="Rune" ability={(
    <>
      <Rotate /> 2 lands to any positions. Collect <VictoryPoints value={1} />.
    </>
  )}/>),

  (<RocketCard name="Courier Rune" cost={1} score={0} type="Rune" ability={(
    <>
      <Rotate /> a land up to 2 spaces. <br/> Hire a courier.
    </>
  )}/>),

  (<RocketCard name="Minor Runes" cost={0} score={1} type="Rune" ability={(
    <>
      <Rotate /> up to 2 different lands<br />1 space each. Collect <VictoryPoints value={1} />.
    </>
  )}/>),

  (<RocketCard name="Major Runes" cost={1} score={2} type="Rune" ability={(
    <>
      <Rotate /> up to 2 different lands up to <br />2 spaces each. Collect <VictoryPoints value={2} />.
    </>
  )}/>),

  (<RocketCard name="Deliverance Rune" cost={1} score={0} type="Rune" ability={(
    <>
      <Rotate /> a land 1 space.

      Deliver 1<Contract />.
    </>
  )}/>),

].map((rocket) => [
  React.cloneElement(rocket, { key: rocket.props.name }),
]).flat();
