import victoryPointsImage from './assets/general/victory-points.svg';
import allyIconImage from './assets/general/ally.svg';
import factionIconImage from './assets/images/icons/faction.svg';
import rocketIconImage from './assets/general/rocket.svg';
import defaultObjectiveImage from './assets/images/objectives/default.jpg';
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
import starscapeImage from './assets/images/starscape.jpg';

const allyPngs = import.meta.glob('./assets/images/allies/*.png', { eager: true });
const allyJpgs = import.meta.glob('./assets/images/allies/*.jpg', { eager: true });
const leaderImages = import.meta.glob('./assets/images/leaders/*.png', { eager: true });
const factionCardImages = import.meta.glob('./assets/images/faction-cards/*.png', { eager: true });
const factionCardJpgs = import.meta.glob('./assets/images/faction-cards/*.jpg', { eager: true });
const rocketImages = import.meta.glob('./assets/images/rockets/*', { eager: true });
const backImages = import.meta.glob('./assets/images/backs/*.png', { eager: true });
const iconImages = import.meta.glob('./assets/images/icons/*.svg', { eager: true });

function Banner({score, typeImage}) {
  let cardType = <></>;
  if (typeImage) {
    cardType = (
        <div style={
          {
            position: 'absolute',
          }
        }>
          <div className="type-icon">
            <div className="victory-points">
              <img class="white-shadow-intense" src={typeImage} style={
                {
                  marginBottom: '-4px',
                  width: '40px',
                  maxHeight: '40px',
                }
              }/>
            </div>
          </div>
        </div>
    );
  }
  return (
    <>
      {cardType}
      <div className="banner-plate-box">

        <div className="victory-points">
          <img class="white-shadow-intense" src={victoryPointsImage} style={
            {
              marginBottom: '-4px',
            }
          }/>
          <span class="white-shadow" style={
            {
              position: 'absolute',
              margin: 'auto',
            }
          }>
            {score}
          </span>
        </div>

      </div>
    </>
  );
}
  /*
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
      */

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

function Cloud({ name, ability, largeText }) {
  return (
      <div className="card-text-box white-shadow-main-text">
        <h1 className="card-title">{name}</h1>
        <hr style={
          {
            'marginLeft': '20px',
            'marginRight': '20px',
          }
        }/>
        <div style={
          {
            'textAlign': 'center',
          }
        }>
          <p className={'cloud-text' + (largeText ? ' cloud-text-large' : '')}>
            {ability}
          </p>
        </div>
      </div>
  );
}

export function FactionCard({name, score, ability, type}) {
  const imageName = `${name.toLowerCase().replaceAll(' ', '-').replaceAll('\'', '').replaceAll('"', '')}`;
  const imageUrl = factionCardImages[`./assets/images/faction-cards/${imageName}.png`]?.default ||
    factionCardJpgs[`./assets/images/faction-cards/${imageName}.jpg`]?.default || console.log(imageName);
  const factionSvgName = `${type.toLowerCase().replaceAll(' ', '-').replaceAll('\'', '')}.svg`;
  const iconUrl = iconImages[`./assets/images/icons/${factionSvgName}`]?.default;

  return (
    <div className="card" style={
      {
        backgroundColor: 'black',
      }
    }>
      <img src={imageUrl ? imageUrl : undefined} style={
        {
          position: 'absolute',
          marginTop: '0.25in',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '2.45in',
          height: '2.45in',
          clipPath: 'polygon(50% 0%, 100% 22%, 100% 78%, 50% 100%, 0% 78%, 0% 22%)',
        }
      }/>
      <Banner score={score} typeImage={iconUrl} />
      <Cloud name={name} ability={ability} />
    </div>
  );
}

export function AllyCard({name, score, ability}) {
  const imageName = `${name.toLowerCase().replaceAll(' ', '-')}`;
  const imageUrl = allyPngs[`./assets/images/allies/${imageName}.png`]?.default ||
    allyJpgs[`./assets/images/allies/${imageName}.jpg`]?.default;
  return (
    <div className="card" style={
      {
        backgroundImage: `url(${imageUrl})`,
        backgroundColor: 'black',
        backgroundSize: '2.5in',
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: 'top',
      }
    }>
      <Banner score={score} typeImage={allyIconImage} />
      <Cloud name={name} ability={ability} />
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
  const imageName = `${name.toLowerCase().replaceAll(' ', '-').replaceAll('\'', '')}`;
  const imageUrl = rocketImages[`./assets/images/rockets/${imageName}.png`]?.default ||
    rocketImages[`./assets/images/rockets/${imageName}.jpg`]?.default;

  return (
    <div className="card" style={
      {
        backgroundColor: 'black',
      }
    }>
      <img src={imageUrl ? imageUrl : undefined} style={
        {
          position: 'absolute',
          marginTop: '0.25in',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '2.45in',
          height: '2.45in',
          borderRadius: '20.5in',
        }
      }/>
      <Banner score={score} typeImage={rocketIconImage} />
      <Cloud name={name} ability={ability} />
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
        backgroundColor: 'black',
      }
    }>
      <Banner score={score} typeImage={objectiveIcon} />
      <Cloud name={name} ability={text} largeText={true} />
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
      <Banner score={route.length} typeImage={contractIcon}/>
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
  if (!type) {
    return EndGameCard();
  }
  else if (type === 'Ally' || type === 'Rocket' || type === 'Contract') {
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

export function EndGameCard() {
  return (
    <div className="card" style={
      {
        backgroundSize: 'cover',
        backgroundImage: `url(${starscapeImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: 'top',
      }
    }>
      <Banner score={0} />
      <div className="card-text-box white-shadow-main-text">
        <h1 className="card-title">End Game</h1>
        <hr style={
          {
            'marginLeft': '20px',
            'marginRight': '20px',
          }
        }/>
        <p style={
          {
            'textAlign': 'center',
          }
        }>
          When this card is revealed, score it immediately. This is your last turn. Each other player gets one more turn.
        </p>
      </div>
    </div>
  );
}
