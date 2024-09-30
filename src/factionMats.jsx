import { FactionMatPage } from './pages.jsx';
import { Facility, Action, Rocket, Contract, FactionCardIcon, Contracts, Ally } from './icons.jsx';
import backImage from './assets/images/backs/faction-mat-back.jpg';

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
          <FactionMatBack />
          <FactionMatBack />
          <FactionMatBack />
        </div>
      )} />
      <FactionMatPage factionMats={(
        <div className="faction-mat-grid">
          <FactionMat name="Cyborg Union" />
          <FactionMat name="Crux Cabal" />
          <FactionMat name="Unearth Inc." />
        </div>
      )} />
      <FactionMatPage factionMats={(
        <div className="faction-mat-grid">
          <FactionMatBack />
          <FactionMatBack />
          <FactionMatBack />
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
  let edgeColor = '';
  if (name === 'Hydrus Gang') {
    edgeColor = 'rgba(210, 0, 0, 80%)';
  }
  else if (name === 'Explorer Society') {
    edgeColor = 'rgba(83, 166, 238, 80%)';
  }
  else if (name === 'The Scavengers') {
    edgeColor = 'rgba(250, 142, 0, 80%)';
  }
  else if (name === 'Cyborg Union') {
    edgeColor = 'rgba(240, 240, 11, 80%)';
  }
  else if (name === 'Crux Cabal') {
    edgeColor = 'rgba(198, 0, 252, 80%)';
  }
  else if (name === 'Unearth Inc.') {
    edgeColor = 'rgba(59, 198, 59, 80%)';
  }
  /*
          <div className="turn-order">
            <div className="overlay-box turn-order-box-inner">
              <b>On your turn</b>
              <br />
              &nbsp;&nbsp;Take 1 action (<Action />)
              <br />
              &nbsp;&nbsp;Restock public contracts (<Contracts />)
              <br />
              &nbsp;&nbsp;Claim achievements (<img src={achievementIcon} className="achievement-symbol" />)
            </div>
          </div>
          */

  return (
    <div className='faction-mat' style={{
        backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : undefined,
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: 'top',
    }}>
      <div className="faction-deck-arrow" style={{
          background: edgeColor,
      }}>
        <span style={{
          marginTop: 'auto',
          marginBottom: 'auto',
        }}>
          ↑ <FactionCardIcon /> Deck ↑
        </span>
      </div>

      <div className="scored-cards-arrow" style={{
        background: edgeColor,
      }}>
        <span style={{
          marginTop: 'auto',
          marginBottom: 'auto',
        }}>
          ↑ Scored cards ↑
        </span>
      </div>

      <div className="allies-arrow" style={{
          background: edgeColor,
      }}>
        <span style={{
          marginTop: 'auto',
          marginBottom: 'auto',
        }}>
          ↑ Whenever you draw <Ally />, play it here ↑
        </span>
      </div>

      <div className="faction-mat-interior">

        <div className="faction-icon-and-title">
          <img src={factionIconImage} className="faction-mat-faction-icon" />
          <div className="faction-title-box">
            <h1 className="faction-title">&nbsp; &nbsp; {name}</h1>
          </div>
        </div>

        <div className="faction-info-boxes">
          <div className="overlay-box action-box">
            <span class="action-box-title">Actions</span> <i>(1 <Action/> per turn)</i>
            <br />
            &nbsp;&nbsp;<Action /> Build a <Facility />
            <br />
            &nbsp;&nbsp;<Action /> Complete <Contracts />
            <br />
            &nbsp;&nbsp;<Action /> Play <FactionCardIcon /> or <Rocket />
            <br />
            &nbsp;&nbsp;<Action /> Draw <FactionCardIcon /> or <Rocket /> or <Contract whiteShadow="true"/>
          </div>
        </div>
      </div>
    </div>
  );
}

function FactionMatBack() {
  const factionIconImage = iconImages[`./assets/images/icons/faction-generic.svg`]?.default;

  return (
    <div className='faction-mat' style={{}}>
        <img className="" src={backImage} style={
          {
            filter: 'brightness(0.5) grayscale() invert()',
            position: 'absolute',
            width: '7.5in',
            zIndex: '-4',
          }
        }>
        </img>
        <img src={factionIconImage} className="faction-mat-icon-back" />
    </div>
  );
}
