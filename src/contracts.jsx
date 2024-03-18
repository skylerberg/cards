import React from 'react';
import { Rotate, Asteroid, Action } from './icons.jsx';
import { ContractCard } from './cardTemplates.jsx';

export const contracts = [
  (<ContractCard
    name="Widget"
    type="Contract"
    route={[ 'Circle', 'Circle', ]}
    bonuses={[ 'Blue', ]}
  />),

  (<ContractCard
    name="Gizmo"
    type="Contract"
    route={[ 'Square', 'Square', ]}
    bonuses={[ 'Green', ]}
  />),

  (<ContractCard
    name="Thingymajig"
    type="Contract"
    route={[ 'Droplet', 'Droplet', ]}
    bonuses={[ 'Red', ]}
  />),

  (<ContractCard
    name="Doohicky"
    type="Contract"
    route={[ 'Droplet', 'Square', ]}
    bonuses={[ 'Blue', ]}
  />),

  (<ContractCard
    name="Gubbins"
    type="Contract"
    route={[ 'Droplet', 'Circle', ]}
    bonuses={[ 'Green', ]}
  />),

  (<ContractCard
    name="Doodad"
    type="Contract"
    route={[ 'Circle', 'Square', ]}
    bonuses={[ 'Red', ]}
  />),

  (<ContractCard
    name="Water Purifier"
    type="Contract"
    route={[ 'Droplet', 'Droplet', 'Droplet', ]}
    bonuses={[ 'Gold', ]}
  />),

  (<ContractCard
    name="Decorative Plating"
    type="Contract"
    route={[ 'Circle', 'Circle', 'Circle', ]}
    bonuses={[ 'Gold', ]}
  />),

  (<ContractCard
    name="Compute Cluster"
    type="Contract"
    route={[ 'Square', 'Square', 'Square', ]}
    bonuses={[ 'Gold', ]}
  />),

  (<ContractCard
    name="Diamond Press"
    type="Contract"
    route={[ 'Circle', 'Droplet', 'Circle', ]}
    bonuses={[ 'Blue', ]}
  />),

  (<ContractCard
    name="Medi-Gel Capsules"
    type="Contract"
    route={[ 'Droplet', 'Square', 'Droplet', ]}
    bonuses={[ 'Red', ]}
  />),

  (<ContractCard
    name="Navigation System"
    type="Contract"
    route={[ 'Square', 'Circle', 'Square', ]}
    bonuses={[ 'Green', ]}
  />),

  (<ContractCard
    name="Coolant Pack"
    type="Contract"
    route={[ 'Droplet', 'Circle', 'Droplet', ]}
    bonuses={[ 'Red', ]}
  />),

  (<ContractCard
    name="Neuromorphic Circuits"
    type="Contract"
    route={[ 'Square', 'Droplet', 'Square', ]}
    bonuses={[ 'Green', ]}
  />),

  (<ContractCard
    name="Solar Sail"
    type="Contract"
    route={[ 'Circle', 'Square', 'Circle', ]}
    bonuses={[ 'Blue', ]}
  />),

  (<ContractCard
    name="Laser Cannon"
    type="Contract"
    route={[ 'Circle', 'Droplet', 'Square', ]}
    bonuses={[ 'Blue', ]}
  />),

  (<ContractCard
    name="Gravity Generator"
    type="Contract"
    route={[ 'Droplet', 'Square', 'Circle', ]}
    bonuses={[ 'Red', ]}
  />),

  (<ContractCard
    name="Pressurization Unit"
    type="Contract"
    route={[ 'Square', 'Circle', 'Droplet', ]}
    bonuses={[ 'Green', ]}
  />),

  (<ContractCard
    name="Forcefield Generator"
    type="Contract"
    route={[ 'Circle', 'Square', 'Square', 'Circle', ]}
    bonuses={[ 'Green', 'Gold', ]}
  />),

  (<ContractCard
    name="Life Support System"
    type="Contract"
    route={[ 'Square', 'Square', 'Droplet', 'Droplet', ]}
    bonuses={[ 'Blue', 'Gold', ]}
  />),

  (<ContractCard
    name="Stasis Chamber"
    type="Contract"
    route={[ 'Square', 'Droplet', 'Droplet', 'Square', ]}
    bonuses={[ 'Red', 'Gold', ]}
  />),

  (<ContractCard
    name="Fuel Optimizer"
    type="Contract"
    route={[ 'Droplet', 'Droplet', 'Circle', 'Circle', ]}
    bonuses={[ 'Blue', 'Gold', ]}
  />),

  (<ContractCard
    name="Life-Sign Detector"
    type="Contract"
    route={[ 'Droplet', 'Square', 'Square', 'Droplet', ]}
    bonuses={[ 'Green', 'Gold', ]}
  />),

  (<ContractCard
    name="Escape Pod"
    type="Contract"
    route={[ 'Circle', 'Droplet', 'Droplet', 'Circle', ]}
    bonuses={[ 'Red', 'Gold', ]}
  />),

  (<ContractCard
    name="Basic AI System"
    type="Contract"
    route={[ 'Circle', 'Circle', 'Square', 'Square', ]}
    bonuses={[ 'Green', 'Gold', ]}
  />),

  (<ContractCard
    name="Additive Printer"
    type="Contract"
    route={[ 'Square', 'Circle', 'Circle', 'Square', ]}
    bonuses={[ 'Blue', 'Gold', ]}
  />),

  (<ContractCard
    name="Waste Recycler"
    type="Contract"
    route={[ 'Droplet', 'Circle', 'Circle', 'Droplet', ]}
    bonuses={[ 'Red', 'Gold', ]}
  />),

  (<ContractCard
    name="Carbon Reclaimer"
    type="Contract"
    route={[ 'Circle', 'Droplet', 'Circle', 'Droplet', ]}
    bonuses={[ 'Gold', 'Red', ]}
  />),

  (<ContractCard
    name="Thrusters"
    type="Contract"
    route={[ 'Droplet', 'Square', 'Droplet', 'Square', ]}
    bonuses={[ 'Gold', 'Blue', ]}
  />),

  (<ContractCard
    name="Control Console"
    type="Contract"
    route={[ 'Square', 'Circle', 'Square', 'Circle', ]}
    bonuses={[ 'Gold', 'Green', ]}
  />),

  (<ContractCard
    name="Luxury Timepiece"
    type="Contract"
    route={[ 'Circle', 'Circle', 'Droplet', 'Square', 'Square']}
    bonuses={[ 'Gold', 'Red', 'Green',]}
  />),

  (<ContractCard
    name="Space Yacht"
    type="Contract"
    route={[ 'Droplet', 'Droplet', 'Square', 'Circle', 'Circle']}
    bonuses={[ 'Gold', 'Green', 'Blue',]}
  />),

  (<ContractCard
    name="Pristine Biodome"
    type="Contract"
    route={[ 'Square', 'Square', 'Circle', 'Droplet', 'Droplet']}
    bonuses={[ 'Gold', 'Blue', 'Red',]}
  />),

  (<ContractCard
    name="Robot Hive"
    type="Contract"
    route={[ 'Square', 'Droplet', 'Circle', 'Droplet', 'Square']}
    bonuses={[ 'Gold', 'Blue', 'Green',]}
  />),

  (<ContractCard
    name="Warp Drive"
    type="Contract"
    route={[ 'Circle', 'Square', 'Droplet', 'Square', 'Circle']}
    bonuses={[ 'Gold', 'Red', 'Blue',]}
  />),

  (<ContractCard
    name="Synthetic Lifeform"
    type="Contract"
    route={[ 'Droplet', 'Circle', 'Square', 'Circle', 'Droplet']}
    bonuses={[ 'Gold', 'Green', 'Red', ]}
  />),

  /*
  (<ContractCard
    name="Cryo-Barracks"
    type="Contract"
    route={[ 'Droplet', 'Square', 'Circle', 'Square', 'Droplet', ]}
    bonuses={[ 'Gold', 'Red', ]}
  />),

  (<ContractCard
    name="Terraforming Cannon"
    type="Contract"
    route={[ 'Square', 'Circle', 'Droplet', 'Circle', 'Square', ]}
    bonuses={[ 'Gold', 'Green', ]}
  />),

  (<ContractCard
    name="Fusion Reactor"
    type="Contract"
    route={[ 'Circle', 'Droplet', 'Square', 'Droplet', 'Circle', ]}
    bonuses={[ 'Gold', 'Blue', ]}
  />),
  */

].map((contract) => [React.cloneElement(contract, { key: contract.props.name })]).flat();
