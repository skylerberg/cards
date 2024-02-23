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
    bonuses={[ 'Red', ]}
  />),

  (<ContractCard
    name="Gubbins"
    type="Contract"
    route={[ 'Droplet', 'Circle', ]}
    bonuses={[ 'Blue', ]}
  />),

  (<ContractCard
    name="Doodad"
    type="Contract"
    route={[ 'Circle', 'Square', ]}
    bonuses={[ 'Green', ]}
  />),

  (<ContractCard
    name="Water Purifier"
    type="Contract"
    route={[ 'Droplet', 'Droplet', 'Droplet', ]}
    bonuses={[ 'Green', 'Blue', ]}
  />),

  (<ContractCard
    name="Decorative Plating"
    type="Contract"
    route={[ 'Circle', 'Circle', 'Circle', ]}
    bonuses={[ 'Green', 'Red', ]}
  />),

  (<ContractCard
    name="Compute Cluster"
    type="Contract"
    route={[ 'Square', 'Square', 'Square', ]}
    bonuses={[ 'Blue', 'Red', ]}
  />),

  (<ContractCard
    name="Diamond Press"
    type="Contract"
    route={[ 'Circle', 'Droplet', 'Circle', ]}
    bonuses={[ 'Blue', 'Red', ]}
  />),

  (<ContractCard
    name="Medi-Gel Capsules"
    type="Contract"
    route={[ 'Droplet', 'Square', 'Droplet', ]}
    bonuses={[ 'Green', 'Red', ]}
  />),

  (<ContractCard
    name="Navigation System"
    type="Contract"
    route={[ 'Square', 'Circle', 'Square', ]}
    bonuses={[ 'Green', 'Blue', ]}
  />),

  (<ContractCard
    name="Coolant Pack"
    type="Contract"
    route={[ 'Droplet', 'Circle', 'Droplet', ]}
    bonuses={[ 'Blue', 'Red', ]}
  />),

  (<ContractCard
    name="Neuromorphic Circuits"
    type="Contract"
    route={[ 'Square', 'Droplet', 'Square', ]}
    bonuses={[ 'Green', 'Red', ]}
  />),

  (<ContractCard
    name="Solar Sail"
    type="Contract"
    route={[ 'Circle', 'Square', 'Circle', ]}
    bonuses={[ 'Green', 'Blue', ]}
  />),

  (<ContractCard
    name="Laser Cannon"
    type="Contract"
    route={[ 'Circle', 'Droplet', 'Square', ]}
    bonuses={[ 'Blue', 'Red', ]}
  />),

  (<ContractCard
    name="Gravity Generator"
    type="Contract"
    route={[ 'Droplet', 'Square', 'Circle', ]}
    bonuses={[ 'Green', 'Red', ]}
  />),

  (<ContractCard
    name="Pressurization Unit"
    type="Contract"
    route={[ 'Square', 'Circle', 'Droplet', ]}
    bonuses={[ 'Green', 'Blue', ]}
  />),

  (<ContractCard
    name="Forcefield Generator"
    type="Contract"
    route={[ 'Circle', 'Square', 'Square', 'Circle', ]}
    bonuses={[ 'Green', 'Blue', 'Gold', ]}
  />),

  (<ContractCard
    name="Life Support System"
    type="Contract"
    route={[ 'Square', 'Square', 'Droplet', 'Droplet', ]}
    bonuses={[ 'Green', 'Blue', 'Gold', ]}
  />),

  (<ContractCard
    name="Stasis Chamber"
    type="Contract"
    route={[ 'Square', 'Droplet', 'Droplet', 'Square', ]}
    bonuses={[ 'Green', 'Red', 'Gold', ]}
  />),

  (<ContractCard
    name="Fuel Optimizer"
    type="Contract"
    route={[ 'Droplet', 'Droplet', 'Circle', 'Circle', ]}
    bonuses={[ 'Blue', 'Red', 'Gold', ]}
  />),

  (<ContractCard
    name="Life-Sign Detector"
    type="Contract"
    route={[ 'Droplet', 'Square', 'Square', 'Droplet', ]}
    bonuses={[ 'Green', 'Red', 'Gold', ]}
  />),

  (<ContractCard
    name="Escape Pod"
    type="Contract"
    route={[ 'Circle', 'Droplet', 'Droplet', 'Circle', ]}
    bonuses={[ 'Blue', 'Red', 'Gold', ]}
  />),

  (<ContractCard
    name="Basic AI System"
    type="Contract"
    route={[ 'Circle', 'Circle', 'Square', 'Square', ]}
    bonuses={[ 'Green', 'Red', 'Gold', ]}
  />),

  (<ContractCard
    name="Additive Printer"
    type="Contract"
    route={[ 'Square', 'Circle', 'Circle', 'Square', ]}
    bonuses={[ 'Blue', 'Red', 'Gold', ]}
  />),

  (<ContractCard
    name="Waste Recycler"
    type="Contract"
    route={[ 'Droplet', 'Circle', 'Circle', 'Droplet', ]}
    bonuses={[ 'Green', 'Red', 'Gold', ]}
  />),

  (<ContractCard
    name="Carbon Reclaimer"
    type="Contract"
    route={[ 'Circle', 'Droplet', 'Circle', 'Droplet', ]}
    bonuses={[ 'Green', 'Red', 'Gold', ]}
  />),

  (<ContractCard
    name="Thrusters"
    type="Contract"
    route={[ 'Droplet', 'Square', 'Droplet', 'Square', ]}
    bonuses={[ 'Blue', 'Red', 'Gold', ]}
  />),

  (<ContractCard
    name="Control Console"
    type="Contract"
    route={[ 'Square', 'Circle', 'Square', 'Circle', ]}
    bonuses={[ 'Green', 'Blue', 'Gold', ]}
  />),

  (<ContractCard
    name="Luxury Timepiece"
    type="Contract"
    route={[ 'Circle', 'Circle', 'Droplet', 'Square', 'Square']}
    bonuses={[ 'Blue', 'Red', 'Gold', ]}
  />),

  (<ContractCard
    name="Space Yacht"
    type="Contract"
    route={[ 'Droplet', 'Droplet', 'Square', 'Circle', 'Circle']}
    bonuses={[ 'Green', 'Red', 'Gold', ]}
  />),

  (<ContractCard
    name="Pristine Biodome"
    type="Contract"
    route={[ 'Square', 'Square', 'Circle', 'Droplet', 'Droplet']}
    bonuses={[ 'Green', 'Blue', 'Gold', ]}
  />),

  (<ContractCard
    name="Robot Hive"
    type="Contract"
    route={[ 'Square', 'Droplet', 'Circle', 'Droplet', 'Square']}
    bonuses={[ 'Blue', 'Red', 'Gold', ]}
  />),

  (<ContractCard
    name="Warp Drive"
    type="Contract"
    route={[ 'Circle', 'Square', 'Droplet', 'Square', 'Circle']}
    bonuses={[ 'Green', 'Red', 'Gold', ]}
  />),

  (<ContractCard
    name="Synthetic Lifeform"
    type="Contract"
    route={[ 'Droplet', 'Circle', 'Square', 'Circle', 'Droplet']}
    bonuses={[ 'Green', 'Blue', 'Gold', ]}
  />),

].map((contract) => [React.cloneElement(contract, { key: contract.props.name })]).flat();
