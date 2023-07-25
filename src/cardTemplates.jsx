const allyImages = import.meta.glob('./assets/images/allies/*.png', { eager: true });

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
          {score}
        </div>
      </div>
      <div className="ally-action-box overlay-box">
        {ability}
      </div>
    </div>
  );
}
