import cometIcon from './assets/images/icons/comet-small.png';
import contractCardImage from './assets/images/icons/contract-card.svg';
import allyCardImage from './assets/images/icons/ally-card.svg';
import rocketCardImage from './assets/images/icons/rocket-card.svg';
import factionCardImage from './assets/images/icons/faction-card.svg';
import asteroidImage from './assets/images/icons/asteroid.png';
import researchImage from './assets/images/icons/bead.png';
import droplet from './assets/images/icons/droplet.svg';
import circle from './assets/images/icons/circle.svg';
import square from './assets/images/icons/square.svg';
import achievement from './assets/images/icons/achievement.svg';
import actionImage from './assets/images/icons/action.svg';
import gemImage from './assets/images/icons/gem.svg';

export function Icon({name}) {
  return (<i className={`icon-${name}`} />);
}

export function Funds({cost}) {
  return <>
    <span className="cost">{cost}</span>
    <img src={actionImage} className="funding" />
  </>;
}

export function Droplet({ color, large }) {
  let className = 'specific-facility-icon';
  if (color === 'blue') {
    className += ' filter-blue';
  }
  if (large) {
    className += ' shape-large';
  }
  return <img src={droplet} className={className} />;
}

export function Circle({ color, large }) {
  let className = 'specific-facility-icon';
  if (color === 'blue') {
    className += ' filter-blue';
  }
  if (large) {
    className += ' shape-large';
  }
  return <img src={circle} className={className} />;
}

export function Square({ color, large }) {
  let className = 'specific-facility-icon';
  if (color === 'blue') {
    className += ' filter-blue';
  }
  if (large) {
    className += ' shape-large';
  }
  return <img src={square} className={className} />;
}

export function Contract({large}) {
  let className = 'card-icon-image icon-margins';
  if (large) {
    className += ' card-icon-image-large';
  }
  return <>
    <nobr>
      <img src={contractCardImage} className={className} />
    </nobr>
  </>
}

export function FactionCardIcon({large}) {
  let className = 'card-icon-image icon-margins';
  if (large) {
    className += ' card-icon-image-large';
  }
  return <>
    <nobr>
      <img src={factionCardImage} className={className} />
    </nobr>
  </>
}

export function Rocket({large}) {
  let className = 'card-icon-image icon-margins';
  if (large) {
    className += ' card-icon-image-large';
  }
  return <>
    <nobr>
      <img src={rocketCardImage} className={className} />
    </nobr>
  </>
}

export function Ally({large}) {
  let className = 'card-icon-image icon-margins';
  if (large) {
    className += ' card-icon-image-large';
  }
  return <>
    <nobr>
      <img src={allyCardImage} className={className} />
    </nobr>
  </>
}

export function Rotate() {
  return <span>Rotate</span>;
  //return <Icon name="rotate" />;
}

export function To() {
  return <span>→</span>;
}

export function Asteroid({large}) {
  let className = 'asteroid';
  if (large) {
    className += ' asteroid-large';
  }
  return <img src={asteroidImage} className={className} />;
}

export function Research({large}) {
  let className = 'asteroid';
  if (large) {
    className += ' asteroid-large';
  }
  return <img src={researchImage} className={className} />;
}

export function Mineral({large}) {
  let className = 'asteroid';
  if (large) {
    className += ' asteroid-large';
  }
  return <img src={gemImage} className={className} />;
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

export function Action({large}) {
  let className = 'icon-image ';
  if (large) {
    className += ' icon-image-large';
  }
  return <img src={actionImage} className={className} />
}

export function TakeAnotherAction() {
  return <>
  <nobr>
     Take another <Action />.
   </nobr>
  </>
  }

export function Move() {
  return <span>Move</span>;
  //return <Icon name="move" />;
}

export function Comet({large}) {
  let className = 'icon-image comet';
  if (large) {
    className += ' icon-image-large';
  }
  return <img src={cometIcon} className={className} />;
}

export function Achievement() {
  return <img src={achievement} className="icon-image" />;
}

export function VictoryPoints() {
  return <Icon name="victory-points" />;
}

export function Contracts() {
  return (
    <>
      <nobr>
        <span className="first-contract">
          <img src={contractCardImage} className="card-icon-image" />
        </span>
        <span className="second-contract">
          <img src={contractCardImage} className="card-icon-image" />
        </span>
        <span className="third-contract">
          <img src={contractCardImage} className="card-icon-image" />
        </span>
      </nobr>
    </>
  );
}
