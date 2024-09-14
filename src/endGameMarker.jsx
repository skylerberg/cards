import { FactionMatPage } from './pages.jsx';
import starscapeImage from './assets/images/starscape.jpg';
import { Contract } from './icons.jsx';

export function EndGameMarkerPage() {
  return (
    <>
      <FactionMatPage factionMats={(
        <>
          <EndGameMarker />
          <div style={{
            width: '30px',
          }}>
          </div>
          <EndGameMarker />
        </>
      )} />
    </>
  );
}

export function EndGameMarker() {
  return (
    <>
      <div className="end-game-marker" style={
          {
            backgroundSize: 'cover',
            backgroundImage: `url(${starscapeImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundPositionY: 'top',
            zIndex: '-4',
          }
        }>
          <span className="end-game-title end-game-bottom white-shadow-intense card-title">End Game</span>

          <span className="end-game-title end-game-top white-shadow-intense card-title">End Game</span>

          <div className="end-game-titles">

            <span className="end-game-title end-game-left white-shadow-intense card-title">End Game</span>

            <span className="end-game-title end-game-right white-shadow-intense card-title">End Game</span>

          </div>

          <div className="end-game-card-box">
            <div className="end-game-heading">
              Setup
            </div>
              <br />
            <div className="">
              Put 6 <Contract /> under this divider.
            </div>
              <br />
            <div>
              Put the rest on top.
            </div>
            <br />
            <br />
            <div className="end-game-heading">
              When Revealed
            </div>
            <br />
            <div className="">
              Remove this divider.
            </div>
            <br />
            <div className="">
              This is your last turn.
            </div>
            <br />
            <div className="">
              Each other player <br /> takes 1 more turn.
            </div>
          </div>
      </div>
    </>
  );
}
