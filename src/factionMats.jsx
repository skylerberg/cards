import { FactionMatPage } from './pages.jsx';
import objectiveIcon from './assets/images/icons/objective.svg';
import { Facility, Action, Rocket, Contract, FactionCardIcon, Contracts, Ally } from './icons.jsx';

const factionImages = import.meta.glob('./assets/images/mats/*.jpg', { eager: true });
const iconImages = import.meta.glob('./assets/images/icons/*.svg', { eager: true });

export function FactionMats() {
  return (
    <>
      <FactionMatPage factionMats={(
        <div className="faction-mat-grid">
          <FactionMat name="Hydrus Gang" />
          <FactionMat name="Explorer Society" />
          <FactionMat name="The Scavengers" />
        </div>
      )} />
      <FactionMatPage factionMats={(
        <div className="faction-mat-grid">
          <FactionMat name="Cyborg Union" />
          <FactionMat name="Crux Cabal" />
          <FactionMat name="Zenith Capital" />
        </div>
      )} />
    </>
  );
}

function FactionMat({ name }) {
  const jpgName = `${name.toLowerCase().replaceAll(' ', '-').replaceAll('\'', '')}.jpg`;
  const svgName = `${name.toLowerCase().replaceAll(' ', '-').replaceAll('\'', '')}.svg`;
  const backgroundImageUrl = factionImages[`./assets/images/mats/${jpgName}`]?.default;
  const factionIconImage = iconImages[`./assets/images/icons/${svgName}`]?.default;
  console.log(svgName);
  console.log(iconImages);

  return (
    <div className='faction-mat' style={{
        backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : undefined,
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: 'top',
    }}>
      <div className="faction-deck-arrow">
        <span style={{
          marginTop: 'auto',
          marginBottom: 'auto',
        }}>
          ↑ <FactionCardIcon /> Deck ↑
        </span>
      </div>

      <div className="scored-cards-arrow">
        <span style={{
          marginTop: 'auto',
          marginBottom: 'auto',
        }}>
          ↑ Scored Cards ↑
        </span>
      </div>

      <div className="allies-arrow">
        <span style={{
          marginTop: 'auto',
          marginBottom: 'auto',
        }}>
          ↑ Whenever you draw <Ally />, place it face-up here ↑
        </span>
      </div>

      <div className="faction-mat-interior">

        <div className="faction-icon-and-title">
          <img src={factionIconImage} className="faction-mat-faction-icon" />
          <div>
            <div className="overlay-box faction-title-box">
              <h1 className="faction-title">{name}</h1>
            </div>
          </div>
        </div>

        <div className="faction-info-boxes">
          <div className="turn-order">
            <div className="overlay-box turn-order-box-inner">
              <b>On your turn</b>
              <br />
              &nbsp;&nbsp;Take 1 action (<Action />)
              <br />
              &nbsp;&nbsp;Restock public contracts (<Contracts />)
              <br />
              &nbsp;&nbsp;Complete objectives (<img src={objectiveIcon} className="objective-symbol" />)
            </div>
          </div>

          <div className="overlay-box action-box">
            <b>Available Actions</b>
            <br />
            &nbsp;&nbsp;<Action /> Build a <Facility />
            <br />
            &nbsp;&nbsp;<Action /> Complete <Contracts />
            <br />
            &nbsp;&nbsp;<Action /> Draw <FactionCardIcon /> or <Rocket /> or <Contract />
            <br />
            &nbsp;&nbsp;<Action /> Play <FactionCardIcon /> or <Rocket />
            <br />
            &nbsp;&nbsp;<Action /> Use an <Ally />
          </div>
        </div>
      </div>
    </div>
  );
}
