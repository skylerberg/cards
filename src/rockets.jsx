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

  (<RocketCard name="Certainty Runes" shrinkName={false} cost={1} score={1} type="Rune" ability={(
    <>
      Collect <VictoryPoints value={1} />, then rotate 2 lands<br />to any positions. 
    </>
  )}/>),

  (<RocketCard name="Courier Rune" cost={1} score={0} type="Rune" ability={(
    <>
      <Rotate /> a land up to 2 spaces. <br/> Hire a courier.
    </>
  )}/>),

  (<RocketCard name="Minor Runes" cost={0} score={1} type="Rune" ability={(
    <>
      Collect <VictoryPoints value={1} />, then rotate up to 2 different lands 1 space each. 
    </>
  )}/>),

  (<RocketCard name="Major Runes" cost={1} score={2} type="Rune" ability={(
    <>
      Collect <VictoryPoints value={2} />, then rotate up to 2 different lands up to 2 spaces each. 
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
