import React from 'react';
import { Rotate, Asteroid, Action } from './icons.jsx';
import { LetterCard } from './cardTemplates.jsx';

export const contracts = [
  (<LetterCard
    name="Widget"
    type="Letter"
    route={[ 'Person', 'Person', ]}
    bonuses={[ 'Letter', ]}
  />),

  (<LetterCard
    name="Gizmo"
    type="Letter"
    route={[ 'Horse', 'Horse', ]}
    bonuses={[ 'Letter', ]}
  />),

  (<LetterCard
    name="Thingymajig"
    type="Letter"
    route={[ 'Pigeon', 'Pigeon', ]}
    bonuses={[ 'Rocket', ]}
  />),

  (<LetterCard
    name="Doohicky"
    type="Letter"
    route={[ 'Pigeon', 'Horse', ]}
    bonuses={[ 'Letter', ]}
  />),

  (<LetterCard
    name="Gubbins"
    type="Letter"
    route={[ 'Pigeon', 'Person', ]}
    bonuses={[ 'Rocket', ]}
  />),

  (<LetterCard
    name="Doodad"
    type="Letter"
    route={[ 'Person', 'Horse', ]}
    bonuses={[ 'Rocket', ]}
  />),

  (<LetterCard
    name="Water Purifier"
    type="Letter"
    route={[ 'Pigeon', 'Pigeon', 'Pigeon', ]}
    bonuses={[ 'Ally', ]}
  />),

  (<LetterCard
    name="Decorative Plating"
    type="Letter"
    route={[ 'Person', 'Person', 'Person', ]}
    bonuses={[ 'Ally', ]}
  />),

  (<LetterCard
    name="Compute Cluster"
    type="Letter"
    route={[ 'Horse', 'Horse', 'Horse', ]}
    bonuses={[ 'Ally', ]}
  />),

  (<LetterCard
    name="Diamond Press"
    type="Letter"
    route={[ 'Person', 'Pigeon', 'Person', ]}
    bonuses={[ 'Rocket', ]}
  />),

  (<LetterCard
    name="Medi-Gel Capsules"
    type="Letter"
    route={[ 'Pigeon', 'Horse', 'Pigeon', ]}
    bonuses={[ 'Rocket', ]}
  />),

  (<LetterCard
    name="Navigation System"
    type="Letter"
    route={[ 'Horse', 'Person', 'Horse', ]}
    bonuses={[ 'Rocket', ]}
  />),

  (<LetterCard
    name="Coolant Pack"
    type="Letter"
    route={[ 'Pigeon', 'Person', 'Pigeon', ]}
    bonuses={[ 'Letter', ]}
  />),

  (<LetterCard
    name="Neuromorphic Circuits"
    type="Letter"
    route={[ 'Horse', 'Pigeon', 'Horse', ]}
    bonuses={[ 'Letter', ]}
  />),

  (<LetterCard
    name="Solar Sail"
    type="Letter"
    route={[ 'Person', 'Horse', 'Person', ]}
    bonuses={[ 'Letter', ]}
  />),

  (<LetterCard
    name="Laser Cannon"
    type="Letter"
    route={[ 'Person', 'Pigeon', 'Horse', ]}
    bonuses={[ 'Rocket', ]}
  />),

  (<LetterCard
    name="Gravity Generator"
    type="Letter"
    route={[ 'Pigeon', 'Horse', 'Person', ]}
    bonuses={[ 'Letter', ]}
  />),

  (<LetterCard
    name="Pressurization Unit"
    type="Letter"
    route={[ 'Horse', 'Person', 'Pigeon', ]}
    bonuses={[ 'Rocket', ]}
  />),

  (<LetterCard
    name="Forcefield Generator"
    type="Letter"
    route={[ 'Person', 'Horse', 'Horse', 'Person', ]}
    bonuses={[ 'Rocket', 'Ally', ]}
  />),

  (<LetterCard
    name="Life Support System"
    type="Letter"
    route={[ 'Horse', 'Horse', 'Pigeon', 'Pigeon', ]}
    bonuses={[ 'Rocket', 'Ally', ]}
  />),

  (<LetterCard
    name="Stasis Chamber"
    type="Letter"
    route={[ 'Horse', 'Pigeon', 'Pigeon', 'Horse', ]}
    bonuses={[ 'Letter', 'Ally', ]}
  />),

  (<LetterCard
    name="Fuel Optimizer"
    type="Letter"
    route={[ 'Pigeon', 'Pigeon', 'Person', 'Person', ]}
    bonuses={[ 'Letter', 'Ally', ]}
  />),

  (<LetterCard
    name="Life-Sign Detector"
    type="Letter"
    route={[ 'Pigeon', 'Horse', 'Horse', 'Pigeon', ]}
    bonuses={[ 'Rocket', 'Ally', ]}
  />),

  (<LetterCard
    name="Escape Pod"
    type="Letter"
    route={[ 'Person', 'Pigeon', 'Pigeon', 'Person', ]}
    bonuses={[ 'Letter', 'Ally', ]}
  />),

  (<LetterCard
    name="Basic AI System"
    type="Letter"
    route={[ 'Person', 'Person', 'Horse', 'Horse', ]}
    bonuses={[ 'Rocket', 'Ally', ]}
  />),

  (<LetterCard
    name="Additive Printer"
    type="Letter"
    route={[ 'Horse', 'Person', 'Person', 'Horse', ]}
    bonuses={[ 'Letter', 'Ally', ]}
  />),

  (<LetterCard
    name="Waste Recycler"
    type="Letter"
    route={[ 'Pigeon', 'Person', 'Person', 'Pigeon', ]}
    bonuses={[ 'Rocket', 'Ally', ]}
  />),

  (<LetterCard
    name="Carbon Reclaimer"
    type="Letter"
    route={[ 'Person', 'Pigeon', 'Person', 'Pigeon', ]}
    bonuses={[ 'Letter', 'Ally', ]}
  />),

  (<LetterCard
    name="Thrusters"
    type="Letter"
    route={[ 'Pigeon', 'Horse', 'Pigeon', 'Horse', ]}
    bonuses={[ 'Rocket', 'Ally', ]}
  />),

  (<LetterCard
    name="Control Console"
    type="Letter"
    route={[ 'Horse', 'Person', 'Horse', 'Person', ]}
    bonuses={[ 'Letter', 'Ally', ]}
  />),

  (<LetterCard
    name="Luxury Timepiece"
    type="Letter"
    route={[ 'Person', 'Person', 'Pigeon', 'Horse', 'Horse']}
    bonuses={[ 'Letter', 'Ally', ]}
  />),

  (<LetterCard
    name="Space Yacht"
    type="Letter"
    route={[ 'Pigeon', 'Pigeon', 'Horse', 'Person', 'Person']}
    bonuses={[ 'Rocket', 'Ally', ]}
  />),

  (<LetterCard
    name="Pristine Biodome"
    type="Letter"
    route={[ 'Horse', 'Horse', 'Person', 'Pigeon', 'Pigeon']}
    bonuses={[ 'Letter', 'Ally', ]}
  />),

  (<LetterCard
    name="Robot Hive"
    type="Letter"
    route={[ 'Horse', 'Pigeon', 'Person', 'Pigeon', 'Horse']}
    bonuses={[ 'Letter', 'Ally', ]}
  />),

  (<LetterCard
    name="Warp Drive"
    type="Letter"
    route={[ 'Person', 'Horse', 'Pigeon', 'Horse', 'Person']}
    bonuses={[ 'Rocket', 'Ally', ]}
  />),

  (<LetterCard
    name="Synthetic Lifeform"
    type="Letter"
    route={[ 'Pigeon', 'Person', 'Horse', 'Person', 'Pigeon']}
    bonuses={[ 'Rocket', 'Ally', ]}
  />),

  /*
  (<LetterCard
    name="Cryo-Barracks"
    type="Letter"
    route={[ 'Pigeon', 'Horse', 'Person', 'Horse', 'Pigeon', ]}
    bonuses={[ 'Ally', 'Rocket', ]}
  />),

  (<LetterCard
    name="Terraforming Cannon"
    type="Letter"
    route={[ 'Horse', 'Person', 'Pigeon', 'Person', 'Horse', ]}
    bonuses={[ 'Ally', 'Faction', ]}
  />),

  (<LetterCard
    name="Fusion Reactor"
    type="Letter"
    route={[ 'Person', 'Pigeon', 'Horse', 'Pigeon', 'Person', ]}
    bonuses={[ 'Ally', 'Letter', ]}
  />),
  */

].map((contract) => [React.cloneElement(contract, { key: contract.props.name })]).flat();
