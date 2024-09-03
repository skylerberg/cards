import victoryPointsImage from './assets/images/icons/victory-points.svg';
import allyIconImage from './assets/general/ally.svg';
import rocketIconImage from './assets/general/rocket.svg';
import defaultAchievementImage from './assets/images/achievements/default.jpg';
import defaultTurnOrderImage from './assets/images/turn-order/default.png';
import defaultContractImage from './assets/images/contracts/default.png';
import achievementIcon from './assets/images/icons/achievement.svg';
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
const backImages = import.meta.glob('./assets/images/backs/*.jpg', { eager: true });
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
              <img class="" src={typeImage} style={
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
  cardType = <></>;
  return (
    <>
      {cardType}
      <div className="banner-plate-box">

        <div className="victory-points white-shadow-intense">
          <img class="" src={victoryPointsImage} style={
            {
              width: '50px',
            }
          }/>
          <span class="white-shadow victory-point-text" style={
            {
              position: 'absolute',
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
  /*
        <hr style={
          {
            'marginTop': '3px',
            'marginBottom': '5px',
            'marginLeft': '20px',
            'marginRight': '20px',
          }
        }/>
        */
  return (
      <div className="card-text-box text-box">
        <div className="title-box">
          <h1 className="card-title">{name}</h1>
        </div>
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
  let backgroundImage = backImages[`./assets/images/backs/faction.jpg`]?.default;
  const filter = 'brightness(0.5) grayscale() invert()';

  return (
    <div className="card" style={
      {
      }
    }>
      <img className="card-background-image" src={backgroundImage} style={
        {
          filter: filter,
        }
      }>
      </img>
      <div style={
        {
          position: 'absolute',
          marginTop: '0.15in',
          width: '2.30in',
          height: '2.30in',
          alignSelf: 'center',
          clipPath: 'polygon(50% 0%, 100% 22%, 100% 78%, 50% 100%, 0% 78%, 0% 22%)',
          background: 'black',
          zIndex: '-1',
        }
      }>
      </div>
      <img src={imageUrl ? imageUrl : undefined} style={
        {
          position: 'absolute',
          marginTop: '0.20in',
          width: '2.20in',
          height: '2.20in',
          alignSelf: 'center',
          clipPath: 'polygon(50% 0%, 100% 22%, 100% 78%, 50% 100%, 0% 78%, 0% 22%)',
          zIndex: '-1',
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
        zIndex: '-4',
      }
    }>
      <Banner score={score} typeImage={allyIconImage} />
      <Cloud name={name} ability={ability} />
    </div>
  );
}

export function RocketCard({name, score, ability}) {
  const imageName = `${name.toLowerCase().replaceAll(' ', '-').replaceAll('\'', '')}`;
  const imageUrl = rocketImages[`./assets/images/rockets/${imageName}.png`]?.default ||
    rocketImages[`./assets/images/rockets/${imageName}.jpg`]?.default;
  let backgroundImage = backImages[`./assets/images/backs/rocket.jpg`]?.default;
  const filter = 'hue-rotate(150deg) brightness(0.6) contrast(1.3)';

  return (
    <div className="card" style={
      {
        //backgroundColor: 'black',
      }
    }>
      <img className="card-background-image" src={backgroundImage} style={
        {
          filter: filter,
        }
      }>
      </img>
      <div style={
        {
          position: 'absolute',
          marginTop: '0.15in',
          alignSelf: 'center',
          width: '2.30in',
          height: '2.30in',
          borderRadius: '20.5in',
          background: 'black',
          zIndex: '-1',
          filter: 'drop-shadow(0px 3px 3px)',
        }
      }>
      </div>
      <img src={imageUrl ? imageUrl : undefined} style={
        {
          position: 'absolute',
          marginTop: '0.20in',
          alignSelf: 'center',
          width: '2.20in',
          height: '2.20in',
          borderRadius: '20.5in',
          zIndex: '-1',
        }
      }/>
      <Banner score={score} typeImage={rocketIconImage} />
      <Cloud name={name} ability={ability} />
    </div>
  );
}

export function AchievementCard({name, score, text}) {
  return (
    <div className="card" style={
      {
        backgroundSize: '2.5in',
        backgroundImage: `url(${defaultAchievementImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: 'top',
        backgroundColor: 'black',
        zIndex: '-4',
      }
    }>
      <Banner score={score} typeImage={achievementIcon} />
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
        zIndex: '-4',
      }
    }>
      <Banner score={score} typeImage={turnOrderIcon} />
      <Newspaper name={name} text={text} />
    </div>
  );
}


export function FacilityShape({image, scale}) {
  return <img
    src={image}
    className='facility'
    style={{'scale': scale || '100%'}}
  />;
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
      return <FacilityShape image={square} scale="90%"/>;
    }
    if (name === 'Circle') {
      return <FacilityShape image={circle} scale="" />;
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

  let backgroundImage = backImages[`./assets/images/backs/contract.jpg`]?.default;
  const filter = 'hue-rotate(150deg) brightness(0.6) contrast(1.3)';

  return (
    <div className="card" style={
      {
        backgroundSize: '2.5in',
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: 'top',
        zIndex: '-4',
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
  const jpgName = `${type.toLowerCase().replaceAll(' ', '-').replaceAll('\'', '')}.jpg`;
  const svgName = `${type.toLowerCase().replaceAll(' ', '-').replaceAll('\'', '')}.svg`;
  let imageUrl = backImages[`./assets/images/backs/${jpgName}`]?.default;
  const iconUrl = iconImages[`./assets/images/icons/${svgName}`]?.default;

  let filter = '';
  if (type === 'Contract') {
    filter = 'brightness(1.0)';
  }
  else if (type === 'Ally') {
    filter = 'hue-rotate(180deg) brightness(2.0)';
  }
  else if (type === 'Rocket') {
    filter = 'hue-rotate(150deg) brightness(1.0) contrast(1.3)';
  }
  else if (type === 'Achievement') {
    filter = 'grayscale() brightness(0.5)';
  }
  else if (type === 'Turn Order') {
    filter = 'hue-rotate(250deg) brightness(1.4)';
  }
  else {
    imageUrl = backImages[`./assets/images/backs/faction.jpg`]?.default;
    filter = 'brightness(0.5) grayscale() invert()';
  }

  return (
    <div className="card">
      <img className="card-background-image" src={imageUrl} style={
        {
          filter: filter,
        }
      }>
      </img>
      <img src={iconUrl} className="white-shadow" style={
        {
          width: '2in',
          maxHeight: '1.75in',
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
  return GenericCardBack({type});
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
        zIndex: '-4',
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
