import React from 'react';
import { Icon, Rotate, ContractsIcon } from './icons.jsx';
import { RocketCard } from './cardTemplates.jsx';

export const rockets = [

  (<RocketCard name="Unstable Rockets" score={2} ability={(
    <>
      <Icon name="destroy" /> any number of your <Icon name="facility" />. You may <Rotate /> each <Icon name="asteroid" /> where you removed a <Icon name="facility" /> to any position.
    </>
  )}/>),

  (<RocketCard name="Regimented Rockets" score={2} ability={(
    <>
      Choose 3 <Icon name="asteroid" />. <Icon name="rotate-clockwise" /> 1 of the chosen <Icon name="asteroid" /> clockwise 3 spaces. <Icon name="rotate-clockwise" /> another 1 of the chosen <Icon name="asteroid" /> clockwise 2 spaces. <Icon name="rotate-clockwise" /> the remaining chosen <Icon name="asteroid" /> clockwise 1 space.
    </>
  )}/>),

  (<RocketCard name="Sidecar Rocket" score={3} ability={(
    <>
      Rotate an asteroid any number of spaces. Choose another player, they may rotate a different asteroid up to half that number of spaces rounded up.
    </>
  )}/>),

  (<RocketCard name="Bespoke Rockets" score={0} ability={(
    <>
      <Icon name="rotate" /> 2 <Icon name="asteroid" /> up to 2 spaces each. Complete <ContractsIcon />.
    </>
  )}/>),

].map((rocket) => React.cloneElement(rocket, { key: rocket.props.name }));
