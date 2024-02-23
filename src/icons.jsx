import cometIcon from './assets/general/comet.svg';
import contractCardImage from './assets/general/contract.svg';
import allyCardImage from './assets/general/ally-card.svg';
import rocketCardImage from './assets/general/rocket-card.svg';
import factionCardImage from './assets/general/faction-card.svg';
import asteroidImage from './assets/general/asteroid.png';
import droplet from './assets/images/icons/droplet.svg';
import circle from './assets/images/icons/circle.svg';
import square from './assets/images/icons/square.svg';

export function Icon({name}) {
  return (<i className={`icon-${name}`} />);
}

export function Droplet({ color }) {
  let className = 'specific-facility-icon';
  if (color === 'blue') {
    className += ' filter-blue';
  }
  return <img src={droplet} className={className} />;
}

export function Circle({ color }) {
  let className = 'specific-facility-icon';
  if (color === 'blue') {
    className += ' filter-blue';
  }
  return <img src={circle} className={className} />;
}

export function Square({ color }) {
  let className = 'specific-facility-icon';
  if (color === 'blue') {
    className += ' filter-blue';
  }
  return <img src={square} className={className} />;
}

export function Contract() {
  return <img src={contractCardImage} className="card-icon-image" />;
}

export function FactionCardIcon() {
  return <img src={factionCardImage} className="card-icon-image icon-margins" />;
}

export function Rocket() {
  return <img src={rocketCardImage} className="card-icon-image icon-margins" />;
}

export function Ally() {
  return <img src={allyCardImage} className="card-icon-image icon-margins" />;
}

export function Rotate() {
  return <span>Rotate</span>;
  //return <Icon name="rotate" />;
}

export function Asteroid() {
  return <img src={asteroidImage} className="asteroid" />;
}

export function RotateClockwise() {
  return <Icon name="rotate-clockwise" />;
}

export function Destroy() {
  return <Icon name="destroy" />;
}

export function Facility() {
  return <Icon name="facility" />;
}

export function Action() {
  return <Icon name="action" />;
}

export function Move() {
  return <span>Move</span>;
  //return <Icon name="move" />;
}

export function Comet() {
  return <img src={cometIcon} className="icon-image" />;
}

export function VictoryPoints() {
  return <Icon name="victory-points" />;
}

export function Contracts() {
  return (
    <>
      <span className="first-contract">
        <img src={contractCardImage} className="card-icon-image" />
      </span>
      <span className="second-contract">
        <img src={contractCardImage} className="card-icon-image" />
      </span>
      <span className="third-contract">
        <img src={contractCardImage} className="card-icon-image" />
      </span>
    </>
  );
}
