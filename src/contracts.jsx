import React from 'react';
import { Rotate, Asteroid, Action } from './icons.jsx';
import { ContractCard } from './cardTemplates.jsx';

export const contracts = [
  (<ContractCard
    name="Widget"
    type="Contract"
    route={[ 'Circle', 'Circle', ]}
    bonuses={[ 'Contract', ]}
  />),

  (<ContractCard
    name="Gizmo"
    type="Contract"
    route={[ 'Square', 'Square', ]}
    bonuses={[ 'Contract', ]}
  />),

  (<ContractCard
    name="Thingymajig"
    type="Contract"
    route={[ 'Droplet', 'Droplet', ]}
    bonuses={[ 'Rocket', ]}
  />),

  (<ContractCard
    name="Doohicky"
    type="Contract"
    route={[ 'Droplet', 'Square', ]}
    bonuses={[ 'Contract', ]}
  />),

  (<ContractCard
    name="Gubbins"
    type="Contract"
    route={[ 'Droplet', 'Circle', ]}
    bonuses={[ 'Rocket', ]}
  />),

  (<ContractCard
    name="Doodad"
    type="Contract"
    route={[ 'Circle', 'Square', ]}
    bonuses={[ 'Rocket', ]}
  />),

  (<ContractCard
    name="Water Purifier"
    type="Contract"
    route={[ 'Droplet', 'Droplet', 'Droplet', ]}
    bonuses={[ 'Ally', ]}
  />),

  (<ContractCard
    name="Decorative Plating"
    type="Contract"
    route={[ 'Circle', 'Circle', 'Circle', ]}
    bonuses={[ 'Ally', ]}
  />),

  (<ContractCard
    name="Compute Cluster"
    type="Contract"
    route={[ 'Square', 'Square', 'Square', ]}
    bonuses={[ 'Ally', ]}
  />),

  (<ContractCard
    name="Diamond Press"
    type="Contract"
    route={[ 'Circle', 'Droplet', 'Circle', ]}
    bonuses={[ 'Rocket', ]}
  />),

  (<ContractCard
    name="Medi-Gel Capsules"
    type="Contract"
    route={[ 'Droplet', 'Square', 'Droplet', ]}
    bonuses={[ 'Rocket', ]}
  />),

  (<ContractCard
    name="Navigation System"
    type="Contract"
    route={[ 'Square', 'Circle', 'Square', ]}
    bonuses={[ 'Rocket', ]}
  />),

  (<ContractCard
    name="Coolant Pack"
    type="Contract"
    route={[ 'Droplet', 'Circle', 'Droplet', ]}
    bonuses={[ 'Contract', ]}
  />),

  (<ContractCard
    name="Neuromorphic Circuits"
    type="Contract"
    route={[ 'Square', 'Droplet', 'Square', ]}
    bonuses={[ 'Contract', ]}
  />),

  (<ContractCard
    name="Solar Sail"
    type="Contract"
    route={[ 'Circle', 'Square', 'Circle', ]}
    bonuses={[ 'Contract', ]}
  />),

  (<ContractCard
    name="Laser Cannon"
    type="Contract"
    route={[ 'Circle', 'Droplet', 'Square', ]}
    bonuses={[ 'Rocket', ]}
  />),

  (<ContractCard
    name="Gravity Generator"
    type="Contract"
    route={[ 'Droplet', 'Square', 'Circle', ]}
    bonuses={[ 'Contract', ]}
  />),

  (<ContractCard
    name="Pressurization Unit"
    type="Contract"
    route={[ 'Square', 'Circle', 'Droplet', ]}
    bonuses={[ 'Rocket', ]}
  />),

  (<ContractCard
    name="Forcefield Generator"
    type="Contract"
    route={[ 'Circle', 'Square', 'Square', 'Circle', ]}
    bonuses={[ 'Rocket', 'Ally', ]}
  />),

  (<ContractCard
    name="Life Support System"
    type="Contract"
    route={[ 'Square', 'Square', 'Droplet', 'Droplet', ]}
    bonuses={[ 'Rocket', 'Ally', ]}
  />),

  (<ContractCard
    name="Stasis Chamber"
    type="Contract"
    route={[ 'Square', 'Droplet', 'Droplet', 'Square', ]}
    bonuses={[ 'Contract', 'Ally', ]}
  />),

  (<ContractCard
    name="Fuel Optimizer"
    type="Contract"
    route={[ 'Droplet', 'Droplet', 'Circle', 'Circle', ]}
    bonuses={[ 'Contract', 'Ally', ]}
  />),

  (<ContractCard
    name="Life-Sign Detector"
    type="Contract"
    route={[ 'Droplet', 'Square', 'Square', 'Droplet', ]}
    bonuses={[ 'Rocket', 'Ally', ]}
  />),

  (<ContractCard
    name="Escape Pod"
    type="Contract"
    route={[ 'Circle', 'Droplet', 'Droplet', 'Circle', ]}
    bonuses={[ 'Contract', 'Ally', ]}
  />),

  (<ContractCard
    name="Basic AI System"
    type="Contract"
    route={[ 'Circle', 'Circle', 'Square', 'Square', ]}
    bonuses={[ 'Rocket', 'Ally', ]}
  />),

  (<ContractCard
    name="Additive Printer"
    type="Contract"
    route={[ 'Square', 'Circle', 'Circle', 'Square', ]}
    bonuses={[ 'Contract', 'Ally', ]}
  />),

  (<ContractCard
    name="Waste Recycler"
    type="Contract"
    route={[ 'Droplet', 'Circle', 'Circle', 'Droplet', ]}
    bonuses={[ 'Rocket', 'Ally', ]}
  />),

  (<ContractCard
    name="Carbon Reclaimer"
    type="Contract"
    route={[ 'Circle', 'Droplet', 'Circle', 'Droplet', ]}
    bonuses={[ 'Contract', 'Ally', ]}
  />),

  (<ContractCard
    name="Thrusters"
    type="Contract"
    route={[ 'Droplet', 'Square', 'Droplet', 'Square', ]}
    bonuses={[ 'Rocket', 'Ally', ]}
  />),

  (<ContractCard
    name="Control Console"
    type="Contract"
    route={[ 'Square', 'Circle', 'Square', 'Circle', ]}
    bonuses={[ 'Contract', 'Ally', ]}
  />),

  (<ContractCard
    name="Luxury Timepiece"
    type="Contract"
    route={[ 'Circle', 'Circle', 'Droplet', 'Square', 'Square']}
    bonuses={[ 'Contract', 'Ally', ]}
  />),

  (<ContractCard
    name="Space Yacht"
    type="Contract"
    route={[ 'Droplet', 'Droplet', 'Square', 'Circle', 'Circle']}
    bonuses={[ 'Rocket', 'Ally', ]}
  />),

  (<ContractCard
    name="Pristine Biodome"
    type="Contract"
    route={[ 'Square', 'Square', 'Circle', 'Droplet', 'Droplet']}
    bonuses={[ 'Contract', 'Ally', ]}
  />),

  (<ContractCard
    name="Robot Hive"
    type="Contract"
    route={[ 'Square', 'Droplet', 'Circle', 'Droplet', 'Square']}
    bonuses={[ 'Contract', 'Ally', ]}
  />),

  (<ContractCard
    name="Warp Drive"
    type="Contract"
    route={[ 'Circle', 'Square', 'Droplet', 'Square', 'Circle']}
    bonuses={[ 'Rocket', 'Ally', ]}
  />),

  (<ContractCard
    name="Synthetic Lifeform"
    type="Contract"
    route={[ 'Droplet', 'Circle', 'Square', 'Circle', 'Droplet']}
    bonuses={[ 'Rocket', 'Ally', ]}
  />),

  /*
  (<ContractCard
    name="Cryo-Barracks"
    type="Contract"
    route={[ 'Droplet', 'Square', 'Circle', 'Square', 'Droplet', ]}
    bonuses={[ 'Ally', 'Rocket', ]}
  />),

  (<ContractCard
    name="Terraforming Cannon"
    type="Contract"
    route={[ 'Square', 'Circle', 'Droplet', 'Circle', 'Square', ]}
    bonuses={[ 'Ally', 'Faction', ]}
  />),

  (<ContractCard
    name="Fusion Reactor"
    type="Contract"
    route={[ 'Circle', 'Droplet', 'Square', 'Droplet', 'Circle', ]}
    bonuses={[ 'Ally', 'Contract', ]}
  />),
  */

].map((contract) => [React.cloneElement(contract, { key: contract.props.name })]).flat();
