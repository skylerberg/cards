import victoryPointsImage from './assets/general/victory-points.svg';

const allyImages = import.meta.glob('./assets/images/allies/*.png', { eager: true });
const rocketImages = import.meta.glob('./assets/images/rockets/*.png', { eager: true });

export function FactionCard({name, score, ability}) {
  return (
    <div className="card" style={
      {
        backgroundSize: '2.5in',
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: 'center',
      }
    }>
      <div className="ally-top-line">
        <div className="ally-name-box overlay-box">
          {name}
          <div className="card-type">Faction Card</div>
        </div>
        <div className="ally-score-box overlay-box">
          {score}
        </div>
      </div>
      <div className="ally-action-box overlay-box">
        {ability}
      </div>
    </div>
  );
}

export function AllyCard({name, score, ability}) {
  const pngName = `${name.toLowerCase().replaceAll(' ', '-')}.png`;
  const imageUrl = allyImages[`./assets/images/allies/${pngName}`].default;
  return (
    <div className="card" style={
      {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: '2.5in',
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: 'center',
      }
    }>
      <div className="ally-top-line">
        <div className="ally-name-box overlay-box">
          {name}
          <div className="card-type">Ally</div>
        </div>
        <div className="ally-score-box overlay-box">
          <img src={victoryPointsImage} style={
            {
              marginBottom: '-4px',
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
      </div>
      <div className="ally-action-box overlay-box">
        {ability}
      </div>
    </div>
  );
}

export function RocketCard({name, score, ability}) {
  const imageUrl = rocketImages[`./assets/images/rockets/rocket.png`].default;
  return (
    <div className="card" style={
      {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: '2.5in',
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: 'center',
      }
    }>
      <div className="ally-top-line">
        <div className="ally-name-box overlay-box">
          {name}
          <div className="card-type">Rocket</div>
        </div>
        <div className="ally-score-box overlay-box">
          {score}
        </div>
      </div>
      <div className="ally-action-box overlay-box">
        {ability}
      </div>
    </div>
  );
}
