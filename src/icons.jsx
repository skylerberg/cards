import cometIcon from './assets/images/icons/comet-small.png';
import letterCardImage from './assets/images/icons/letter-card.png';
import facilityImage from './assets/images/icons/facility.svg';
import destroyImage from './assets/images/icons/destroy.svg';
import victoryPointsImage from './assets/images/icons/victory-points.svg';
import allyCardImage from './assets/images/icons/ally-card.svg';
import runeCardImage from './assets/images/icons/rune-card.png';
import factionCardImage from './assets/images/icons/faction-card.svg';
import researchImage from './assets/images/icons/book.svg';
import pigeon from './assets/images/icons/pigeon.svg';
import person from './assets/images/icons/person.svg';
import horse from './assets/images/icons/horse.svg';
import achievement from './assets/images/icons/achievement.svg';
import actionImage from './assets/images/icons/action.svg';
import gemImage from './assets/images/icons/gem.svg';
const stampImages = import.meta.glob('./assets/images/stamps/*.png', { eager: true });

export function Funds({cost}) {
  return <>
    <span className="cost">{cost}</span>
    <img src={actionImage} className="funding" />
  </>;
}

export function Pigeon({ color, large }) {
  let className = 'specific-facility-icon';
  if (color === 'blue') {
    className += ' filter-blue';
  }
  if (large) {
    className += ' shape-large';
  }
  return <img src={pigeon} className={className} />;
}

export function Person({ color, large }) {
  let className = 'specific-facility-icon';
  if (color === 'blue') {
    className += ' filter-blue';
  }
  if (large) {
    className += ' shape-large';
  }
  return <img src={person} className={className} />;
}

export function Horse({ color, large }) {
  let className = 'specific-facility-icon';
  if (color === 'blue') {
    className += ' filter-blue';
  }
  if (large) {
    className += ' shape-large';
  }
  return <img src={horse} className={className} />;
}

export function Contract({large}) {
  let className = 'card-icon-image icon-margins';
  if (large) {
    className += ' card-icon-image-large';
  }
  return <>
    <nobr>
      <img src={letterCardImage} className={className} style={{
        transform: 'rotate(270deg)',
        marginLeft: '4px',
        marginRight: '4px',
        marginBottom: '-5px',
      }}/>
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
      <img src={runeCardImage} className={className} />
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
}

export function To() {
  return <span>→</span>;
}

export function Asteroid({large}) {
  let className = 'asteroid-large';
  if (large) {
    className += ' asteroid-large';
  }
  return <span>lands</span>;
}

export function Research({large}) {
  let className = 'research';
  return <img src={researchImage} className={className} />;
}

export function Mineral({large}) {
  let className = 'asteroid';
  if (large) {
    className += ' asteroid-large';
  }
  return <img src={gemImage} className={className} />;
}

export function Destroy() {
  return <img src={destroyImage} className={'icon-image-large'} />;
}

export function Facility() {
  return <img src={facilityImage} className={'icon-image-large'} />;
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

export function VictoryPoints({value}) {
  const stampImage = stampImages[`./assets/images/stamps/${value}.png`]?.default;
  return <nobr>
    <img src={stampImage} className="icon-image-stamp" />
  </nobr>;
}

export function Contracts() {
  return (
    <>
      <nobr>
        <span className="first-contract">
          <img src={letterCardImage} className="card-icon-image" />
        </span>
        <span className="second-contract">
          <img src={letterCardImage} className="card-icon-image" />
        </span>
        <span className="third-contract">
          <img src={letterCardImage} className="card-icon-image" />
        </span>
      </nobr>
    </>
  );
}
