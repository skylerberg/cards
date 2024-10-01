import { FactionMatPage } from './pages.jsx';
import starscapeImage from './assets/images/starscape.jpg';
import { Contract, Facility, FactionCardIcon, Rocket } from './icons.jsx';

export function EndGameMarkerPage() {
  return (
    <>
      <FactionMatPage factionMats={(
        <>
          <div style={{
            marginLeft: '50px',
          }}
          >
            <EndGameMarker />
            <EndGameMarker />
          </div>
          <div style={{
            width: '100%',
            margin: '10px',
          }}
          >
            <TheRushMarker />
            <TheRushMarker />
          </div>
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
              Put this tile 6 cards from the bottom of the <Contract /> deck.
            </div>
            <br />
            <br />
            <div className="end-game-heading">
              When Revealed
            </div>
            <br />
            <div className="">
              Remove this tile.
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

export function TheRushMarker() {
  return (
    <>
      <div className="end-game-marker">
          <img className="divider-background-image" src={starscapeImage} style={
            {
              filter: 'hue-rotate(160deg) brightness(1.0) contrast(1.3)',
            }
          }>
          </img>

          <span className="end-game-title end-game-bottom white-shadow-intense card-title">The Rush</span>

          <span className="end-game-title end-game-top white-shadow-intense card-title">The Rush</span>

          <div className="end-game-titles">

            <span className="end-game-title end-game-left white-shadow-intense card-title">The Rush</span>

            <span className="end-game-title end-game-right white-shadow-intense card-title">The Rush</span>

          </div>

          <div className="end-game-card-box">
            <div className="end-game-heading">
              Setup
            </div>
              <br />
            <div className="">
              Put this tile 6 cards above the End Game tile.
            </div>
            <br />
            <div className="end-game-heading">
              When Revealed
            </div>
            <br />
            <div className="">
              Put this tile by the board.
            </div>
            <br />
            <div className="">
              At the start of each player's turn, that player gets to:
            </div>
            <br />
            <div className="">
              Build a <Facility />
            <br />
            OR
            <br />
              Draw <FactionCardIcon /> or <Rocket /> or <Contract whiteShadow="true"/>
            </div>
          </div>
      </div>
    </>
  );
}
