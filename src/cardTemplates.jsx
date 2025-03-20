import victoryPointsImage from './assets/images/icons/victory-points.svg';
import fundingImage from './assets/images/icons/action.svg';
import defaultAchievementImage from './assets/images/achievements/default.jpg';
import turnOrderDiagram from './assets/images/turn-order/diagram.svg';
import turnOrderDiagramFirstPlayer from './assets/images/turn-order/diagram-first-player.svg';
import droplet from './assets/images/icons/droplet.svg';
import circle from './assets/images/icons/circle.svg';
import square from './assets/images/icons/square.svg';
import cometIcon from './assets/images/icons/comet.png';
import contractCardImage from './assets/images/icons/contract-card.svg';
import allyCardImage from './assets/images/icons/ally-card.svg';
import rocketCardImage from './assets/images/icons/rocket-card.svg';
import factionCardImage from './assets/images/icons/faction-card.svg';
import { Ally, Achievement, VictoryPoints, Research, Asteroid, Comet, Funds, Contracts, Circle, Square, Droplet, Action, Facility, Rocket, Contract, Destroy } from './icons.jsx';
import starscapeImage from './assets/images/starscape.jpg';
import researchImage from './assets/images/icons/bead.png';

const allyPngs = import.meta.glob('./assets/images/allies/*.png', { eager: true });
const allyJpgs = import.meta.glob('./assets/images/allies/*.jpg', { eager: true });
const leaderImages = import.meta.glob('./assets/images/leaders/*.png', { eager: true });
const factionCardImages = import.meta.glob('./assets/images/faction-cards/*.png', { eager: true });
const factionCardJpgs = import.meta.glob('./assets/images/faction-cards/*.jpg', { eager: true });
const rocketImages = import.meta.glob('./assets/images/rockets/*', { eager: true });
const backImages = import.meta.glob('./assets/images/backs/*.jpg', { eager: true });
const iconImages = import.meta.glob('./assets/images/icons/*.svg', { eager: true });

function Banner({score, cost}) {
  let costSection = <></>;
  if (cost !== undefined) {
    costSection = 
      <div className="header-left">
        <div className="funding-points white-shadow">
          <img class="" src={fundingImage} style={
            {
              width: '40px',
            }
          }/>
          <span class="funding-text" style={
            {
              position: 'absolute',
            }
          }>
            {cost}
          </span>
        </div>
      </div>;
  }
  return (
    <>
      {costSection}

      <div className="header-right">

        <div className="victory-points white-shadow">
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

export function FactionCard({name, score, ability, cost, type}) {
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
      <Banner cost={cost} score={score} />
      <Cloud name={name} ability={ability} />
    </div>
  );
}

export function AllyCard({name, score, ability, cost}) {
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
      <div className="card-text-box text-box">
        <div className="title-box">
          <h1 className="card-title">🙚 {name} 🙘</h1>
        </div>

        <div style={
          {
            textAlign: 'center',
          }
        }>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
          }}>
            <span><Funds cost={cost}/></span>
            &nbsp;
            <span>
              <p className={'cloud-text'}>
                {ability}
              </p>
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}

export function RocketCard({name, score, cost, ability, shrinkName}) {
  const imageName = `${name.toLowerCase().replaceAll(' ', '-').replaceAll('\'', '')}`;
  const imageUrl = rocketImages[`./assets/images/rockets/${imageName}.png`]?.default ||
    rocketImages[`./assets/images/rockets/${imageName}.jpg`]?.default;
  let backgroundImage = backImages[`./assets/images/backs/rocket.jpg`]?.default;
  const filter = 'hue-rotate(160deg) brightness(0.6) contrast(1.3)';
  console.log(shrinkName);

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
          marginTop: '0.25in',
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
          marginTop: '0.30in',
          alignSelf: 'center',
          width: '2.20in',
          height: '2.20in',
          borderRadius: '20.5in',
          zIndex: '-1',
        }
      }/>
      <Banner cost={cost} score={score} />
      <div className="card-text-box text-box">
        <div className="title-box">
          <h1 className={'card-title' + (shrinkName ? ' small-title' : '')}>🙚 {name} 🙘</h1>
        </div>

        <div style={
          {
            textAlign: 'center',
          }
        }>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
          }}>
            <span>
              <p className={'cloud-text'} style={{
                textAlign: 'center',
              }}>
                {ability}
              </p>
            </span>
          </div>
        </div>
      </div>

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
      <Banner score={score} />
      <Cloud name={name} ability={text} largeText={true} />
    </div>
  );
}

export function TurnOrderCard({name, score, cards}) {
  const backgroundImage = backImages[`./assets/images/backs/turn-order.jpg`]?.default;
  const diagram = name === '1st Player' ? turnOrderDiagram : turnOrderDiagram;
  const filter = 'grayscale() brightness(1.4)';
  return (
    <div className="card">
      <img className="card-background-image" src={backgroundImage} style={
        {
          filter: filter,
        }
      }>
      </img>
      <Banner score={score} />
      <h1 className="card-title turn-order-title white-shadow-intense">{name}</h1>

      <p className="turn-order-score-text white-shadow-intense">Score this card</p>
      <span className="scored-cards-text">Scored <br /> cards</span>
      <img className="turn-order-diagram white-shadow-intense" src={diagram}></img>
      <div className="turn-order-draw">
        <h4 className="turn-order-draw-text white-shadow-intense">Starting hand</h4>
        <div style={{
        }}>
          {cards}
        </div>
      </div>
    </div>
  );
}

export function HelperCard() {
  const backgroundImage = backImages[`./assets/images/backs/faction.jpg`]?.default;
  const filter = 'brightness(0.5) grayscale() invert()';

  return (
    <div className="card">
      <img className="card-background-image" src={backgroundImage} style={
        {
          filter: filter,
        }
      }>
      </img>

      <div class="helper-card-section">
        <div class="card-title">
          🙚 Icon Reference 🙘
        </div>

        <div class="helper-card-icon-grid">

          <div class="legend-item double-column">
            <Contracts /> Any number of contracts
          </div>

          <div class="legend-item double-column">
            <Asteroid /> Asteroid
          </div>

          <div class="legend-item double-column">
            <Comet /> Comet
          </div>

          <div class="legend-item double-column">
            <Research /> Research marker
          </div>

          <div class="legend-item double-column">
            <Facility /> Facility <i>(<Circle />, <Square />, or <Droplet />)</i>
          </div>

          <div class="legend-item double-column">
            <Destroy /> Destroy <i class="legend-parenthetical">(return <Facility /> to supply)</i>
          </div>

          {/*
          <div class="legend-item double-column">
            <TakeAnotherAction /> Take another action
          </div>
          */}

          <div class="legend-item double-column">
            <Funds cost="x" /> Funding cost
          </div>

          <div class="legend-item double-column">
            <VictoryPoints value="x" /> Victory points
          </div>

        </div>
      </div>
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

  let backgroundImage = backImages[`./assets/images/backs/contract.jpg`]?.default;
  let bonusWord = route.length >= 4 ? 'per' : 'for';

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
      <Banner score={route.length} />
      <h1 className="card-title contract-title white-shadow-intense">{name}</h1>
      <div className="contract-boxes">
        <div className="route-box overlay-box">
          <span className="overlay-box-label" style={{
            marginBottom: '-7px',  // counter-act the margin-top on .facility
          }}>Route</span>
          {routeImages}
        </div>
        <div className={`bonus-box bonus-box-large overlay-box`}>
          <span className="overlay-box-label">Bonus</span>
          <div class={`bonus-line`}>
            <img src={researchImage} className='bonus-line-research' />
            <h1 className="bonus-word">{bonusWord}</h1>
            <img src={cometIcon} className='bonus-line-comet comet' />
          </div>
        </div>
      </div>
    </div>
  );
}


export function GenericCardBack({type, style}) {
  const jpgName = `${type.toLowerCase().replaceAll(' ', '-').replaceAll('\'', '')}.jpg`;
  const svgName = `${type.toLowerCase().replaceAll(' ', '-').replaceAll('\'', '')}.svg`;
  let imageUrl = backImages[`./assets/images/backs/${jpgName}`]?.default;
  const iconUrl = iconImages[`./assets/images/icons/${svgName}`]?.default;
  const additionalStyle = style || {};

  let filter = '';
  if (type === 'Contract') {
    filter = 'brightness(1.0)';
  }
  else if (type === 'Ally') {
    filter = 'hue-rotate(200deg) brightness(2.0)';
  }
  else if (type === 'Rocket') {
    filter = 'hue-rotate(160deg) brightness(1.0) contrast(1.3)';
  }
  else if (type === 'Achievement') {
    filter = 'grayscale() brightness(0.2)';
  }
  else if (type === 'Turn Order') {
    //filter = 'hue-rotate(250deg) brightness(1.4)';
    filter = 'grayscale() brightness(1.4)';
  }
  else {
    imageUrl = backImages[`./assets/images/backs/faction.jpg`]?.default;
    filter = 'brightness(0.5) grayscale() invert()';
  }

  return (
    <div className="card" style={additionalStyle}>
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
  if (type === 'Helper') {
    return HelperCard();
  }
  return GenericCardBack({type});
}

export function EmptyCard() {
  return (
    <div className="card"></div>
  );
}
