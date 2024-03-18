import React from 'react';
import { LeaderCard } from './cardTemplates.jsx';

export const leaders = [

  (<LeaderCard
    name="Crux Cabal"
    type="Leader"
  />),

  (<LeaderCard
    name="Hydrus Gang"
    type="Leader"
  />),

  (<LeaderCard
    name="Explorer Society"
    type="Leader"
  />),

  (<LeaderCard
    name="Unearth Inc."
    type="Leader"
  />),

  (<LeaderCard
    name="The Scavengers"
    type="Leader"
  />),

  (<LeaderCard
    name="Cyborg Union"
    type="Leader"
  />),

].map((leader) => [React.cloneElement(leader, { key: leader.props.name })]).flat();
