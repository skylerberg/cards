import plateImage from './assets/general/plate.png';
import victoryPointsImage from './assets/general/victory-points.svg';
import allyIconImage from './assets/general/ally.svg';
import factionIconImage from './assets/images/icons/faction.svg';
import rocketIconImage from './assets/general/rocket.svg';
import defaultObjectiveImage from './assets/images/objectives/default.png';
import defaultTurnOrderImage from './assets/images/turn-order/default.png';
import defaultContractImage from './assets/images/contracts/default.png';
import objectiveIcon from './assets/images/icons/objective.svg';
import turnOrderIcon from './assets/images/icons/turn-order.svg';
import contractIcon from './assets/images/icons/contract.svg';
import droplet from './assets/images/icons/droplet.svg';
import circle from './assets/images/icons/circle.svg';
import square from './assets/images/icons/square.svg';
import cometIcon from './assets/images/icons/comet.svg';
import contractCardImage from './assets/general/contract.svg';
import allyCardImage from './assets/general/ally-card.svg';
import rocketCardImage from './assets/general/rocket-card.svg';
import factionCardImage from './assets/general/faction-card.svg';
import { Contracts, FactionCardIcon, Action, Facility, Rocket, Contract } from './icons.jsx';

const allyImages = import.meta.glob('./assets/images/allies/*.png', { eager: true });
const leaderImages = import.meta.glob('./assets/images/leaders/*.png', { eager: true });
const factionCardImages = import.meta.glob('./assets/images/faction-cards/*.png', { eager: true });
const rocketImages = import.meta.glob('./assets/images/rockets/*.png', { eager: true });
const backImages = import.meta.glob('./assets/images/backs/*.png', { eager: true });
const iconImages = import.meta.glob('./assets/images/icons/*.svg', { eager: true });

function Banner({score, typeImage}) {
  return (
    <div className="banner-plate-box">
      <img src={plateImage} style={
        {
          position: 'absolute',
          marginTop: '-5px',
          height: '105px',
          width: '50px',
        }
      } />

      <div className="victory-points">
        <img src={victoryPointsImage} style={
          {
            marginBottom: '-4px',
            opacity: '80%',
          }
        }/>
        <span style={
          {
            position: 'absolute',
            margin: 'auto',
          }
        }>
          {score}
        </span>
      </div>

      <div className="card-type">
        <img src={typeImage} style={
          {
            width: '45px',
            maxHeight: '42px',
            marginTop: '40px',
            position: 'absolute',
            opacity: '80%',
          }
        }/>
      </div>
    </div>
  );
}

function Newspaper({ name, text }) {
  return (
      <div className="card-text-box newspaper newspaper-border">
        <h1 className="card-title">{name}</h1>
        <hr style={
          {
            'marginLeft': '20px',
            'marginRight': '20px',
          }
        }/>
        {text}
      </div>
  );
}

export function FactionCard({name, score, ability}) {
  const pngName = `${name.toLowerCase().replaceAll(' ', '-').replaceAll('\'', '').replaceAll('"', '')}.png`;
  const imageUrl = factionCardImages[`./assets/images/faction-cards/${pngName}`]?.default;
  return (
    <div className="card" style={
      {
        backgroundSize: '2.5in',
        backgroundImage: imageUrl ? `url(${imageUrl})` : undefined,
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: 'top',
      }
    }>
      <Banner score={score} typeImage={factionIconImage} />
      <Newspaper name={name} text={ability} />
    </div>
  );
}

export function AllyCard({name, score, ability}) {
  const pngName = `${name.toLowerCase().replaceAll(' ', '-')}.png`;
  const imageUrl = allyImages[`./assets/images/allies/${pngName}`]?.default;
  return (
    <div className="card" style={
      {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: '2.5in',
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: 'top',
      }
    }>
      <Banner score={score} typeImage={allyIconImage} />
      <Newspaper name={name} text={ability} />
    </div>
  );
}

export function LeaderCard({name}) {
  const pngName = `${name.toLowerCase().replaceAll(' ', '-')}.png`;
  const imageUrl = leaderImages[`./assets/images/leaders/${pngName}`]?.default;
  const actions =
    (<>
      <Action /> Build a <Facility />
      <br />
      <Action /> Complete <Contracts />
      <br />
      <Action /> Draw <FactionCardIcon /> or <Rocket /> or <Contract />
      <br />
      <Action /> Play <FactionCardIcon /> or <Rocket />
    </>);
  return (
    <div className="card" style={
      {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: '2.5in',
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: 'top',
      }
    }>
      <Newspaper name={name} text={actions} />
    </div>
  );
}

export function RocketCard({name, score, ability}) {
  const pngName = `${name.toLowerCase().replaceAll(' ', '-').replaceAll('\'', '')}.png`;
  const imageUrl = rocketImages[`./assets/images/rockets/${pngName}`]?.default;

  return (
    <div className="card" style={
      {
        backgroundSize: '2.5in',
        backgroundImage: imageUrl ? `url(${imageUrl})` : undefined,
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: 'top',
      }
    }>
      <Banner score={score} typeImage={rocketIconImage} />
      <Newspaper name={name} text={ability} />
    </div>
  );
}

export function ObjectiveCard({name, score, text}) {
  return (
    <div className="card" style={
      {
        backgroundSize: '2.5in',
        backgroundImage: `url(${defaultObjectiveImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: 'top',
      }
    }>
      <Banner score={score} typeImage={objectiveIcon} />
      <Newspaper name={name} text={text} />
    </div>
  );
}

export function TurnOrderCard({name, score, text}) {
  return (
    <div className="card" style={
      {
        backgroundSize: '2.5in',
        backgroundImage: `url(${defaultTurnOrderImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: 'top',
      }
    }>
      <Banner score={score} typeImage={turnOrderIcon} />
      <Newspaper name={name} text={text} />
    </div>
  );
}


export function FacilityShape({image}) {
    return <img src={image} className='facility' />;
}

function BonusCardImage({color}) {
  let cardImage;
  if (color === 'Blue') {
    cardImage = contractCardImage;
  }
  else if (color === 'Red') {
    cardImage = rocketCardImage;
  }
  else if (color === 'Green') {
    cardImage = factionCardImage;
  }
  else if (color === 'Gold') {
    cardImage = allyCardImage;
  }

  return (
    <img src={cardImage} className='bonus-line-item bonus-line-card' />
  );
}

export function Bonus({small, doubleComets, colors}) {
  const cards = colors.map(color => BonusCardImage({color}));
  const secondComet = doubleComets ? 
      <img src={cometIcon} className='bonus-line-item bonus-comet' />
    : <></>;

  const additionalClass = small ? 'bonus-line-small' : '';

  return (
    <div class={`bonus-line ${additionalClass}`}>
      <img src={cometIcon} className='bonus-line-item bonus-comet' />
      {secondComet}
      <h1 className="bonus-line-item bonus-colon">: </h1>
      {cards}
    </div>
  );
}

export function ContractCard({name, route, bonuses}) {
  const routeImages = route.map((name) => {
    if (name === 'Square') {
      return <FacilityShape image={square} />;
    }
    if (name === 'Circle') {
      return <FacilityShape image={circle} />;
    }
    if (name === 'Droplet') {
      return <FacilityShape image={droplet} />;
    }
  });

  const bonusText = bonuses.length === 1 ? 'Bonus' : 'Bonuses';
  const bonusBoxSize = bonuses.length === 1 ? 'bonus-box-small' : 'bonus-box-large';

  const bonusLines = [];

  if (bonuses.length === 3) {
      bonusLines.push(<Bonus colors={bonuses.slice(0, 2)} doubleComets={false} small={false}/>)
      bonusLines.push(<Bonus colors={[bonuses[2]]} doubleComets={true} small={false}/>)
  }
  else {
    for (const [index, color] of bonuses.entries()) {
      bonusLines.push(<Bonus colors={[color]} doubleComets={index > 0} small={bonuses.length === 1}/>)
    }
  }

  for (let i = bonusLines.length - 1; i > 0; i--) {
    bonusLines.splice(i, 0, <hr className="bonus-seperator" />);
  }

  return (
    <div className="card" style={
      {
        backgroundSize: '2.5in',
        backgroundImage: `url(${defaultContractImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: 'top',
      }
    }>
      <Banner score={route.length} typeImage={contractIcon} />
      <h1 className="card-title contract-title white-shadow-intense">{name}</h1>
      <div className="contract-boxes">
        <div className="route-box overlay-box">
          <span className="overlay-box-label" style={{
            marginBottom: '-7px',  // counter-act the margin-top on .facility
          }}>Route</span>
          {routeImages}
        </div>
        <div className={`bonus-box ${bonusBoxSize} overlay-box`}>
          <span className="overlay-box-label">{bonusText}</span>
          {bonusLines}
        </div>
      </div>
    </div>
  );
}


export function GenericCardBack({type}) {
  const pngName = `${type.toLowerCase().replaceAll(' ', '-').replaceAll('\'', '')}.png`;
  const svgName = `${type.toLowerCase().replaceAll(' ', '-').replaceAll('\'', '')}.svg`;
  const imageUrl = backImages[`./assets/images/backs/${pngName}`]?.default;
  const iconUrl = iconImages[`./assets/images/icons/${svgName}`]?.default;
  return (
    <div className="card" style={
      {
        backgroundSize: '2.5in',
        backgroundImage: imageUrl ? `url(${imageUrl})` : undefined,
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: 'top',
      }
    }>
      <h1 className="card-back-title">{type}</h1>
      <img src={iconUrl} className="white-shadow" style={
        {
          width: '2in',
          maxHeight: '2in',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 'auto',
          marginBottom: 'auto',
        }
      }/>
    </div>
  );
}

export function FactionCardBack({faction}) {
  const svgName = `${faction.toLowerCase().replaceAll(' ', '-').replaceAll('\'', '')}.svg`;
  const backgroundUrl = backImages[`./assets/images/backs/faction.png`]?.default;
  const iconUrl = iconImages[`./assets/images/icons/${svgName}`]?.default;
  return (
    <div className="card" style={
      {
        backgroundSize: '2.5in',
        backgroundImage: backgroundUrl ? `url(${backgroundUrl})` : undefined,
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: 'top',
      }
    }>
      <h1 className="card-back-title faction-card-back-title">{faction}</h1>
      <img src={iconUrl} className="white-shadow" style={
        {
          width: '2in',
          maxHeight: '2in',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 'auto',
          marginBottom: 'auto',
        }
      }/>
    </div>
  );
}

export function CardBack({type}) {
  if (type === 'Ally' || type === 'Rocket' || type === 'Contract') {
    return GenericCardBack({type});
  }
  else {
    return FactionCardBack({faction: type});
  }
}

export function EmptyCard() {
  return (
    <div className="card"></div>
  );
}
