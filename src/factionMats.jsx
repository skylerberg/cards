import { FactionMatPage } from './pages.jsx';
import { Facility, Funds, Research, Asteroid, Rocket, Contract, Contracts, Ally } from './icons.jsx';
import backImage from './assets/images/backs/faction-mat-back-big.jpg';

const factionImages = import.meta.glob('./assets/images/mats/*.jpg', { eager: true });
const treeImages = import.meta.glob('./assets/images/mats/*.svg', { eager: true });
const iconImages = import.meta.glob('./assets/images/icons/*.svg', { eager: true });

export function FactionMats() {
  return (
    <>
      <FactionMatPage factionMats={(
        <div className="faction-mat-grid">
          <FactionMat name="Theodore Thorne" />
          <FactionMat name="Laura Lymm" />
        </div>
      )} />
      <FactionMatPage factionMats={(
        <div className="faction-mat-grid">
          <FactionMat name="Florence Fleet" />
          <FactionMat name="Ian Ipswich" />
        </div>
      )} />
      <FactionMatPage factionMats={(
        <div className="faction-mat-grid">
          <FactionMat name="Norman Newcastle" />
          <FactionMat name="Peter Pickwell" />
        </div>
      )} />
      <FactionMatPage factionMats={(
        <div className="faction-mat-grid">
          <FactionMat name="Beatrice  Bolton" />
          <FactionMat name="Edward Edgecote" />
        </div>
      )} />
      <FactionMatPage factionMats={(
        <div className="faction-mat-grid">
          <FactionMat name="Sophia St. Michael" />
          <FactionMat name="Crux Cabal" />
        </div>
      )} />
      <FactionMatPage factionMats={(
        <div className="faction-mat-grid">
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
  const treeName = `${name.toLowerCase().replaceAll(' ', '-').replaceAll('\'', '')}-tree.svg`;
  const backgroundImageUrl = factionImages[`./assets/images/mats/${jpgName}`]?.default;
  const tree = treeImages[`./assets/images/mats/${treeName}`]?.default;
  const factionIconImage = iconImages[`./assets/images/icons/${svgName}`]?.default;
  let edgeColor = '';
  let factionAbility = null;
  let factionAction = null;
  if (name === 'Theodore Thorne') {
    edgeColor = 'rgba(210, 0, 0, 80%)';
    factionAction = <span><Funds cost={1} /> Rotate an <Asteroid /> to any position.</span>;
  }
  else if (name === 'Florence Fleet') {
    edgeColor = 'rgba(59, 198, 59, 80%)';
    factionAction = <span><Funds cost={1} /> Move 1 <Facility /> you own</span>;
  }
  else if (name === 'Beatrice Bolton') {
    edgeColor = 'rgba(250, 142, 0, 80%)';
    factionAbility = <span>
      At the end of your turn, you may <br />
      complete 1<Contract /> from your hand <br />
    </span>;
  }
  else if (name === 'Ian Ipswich') {
    edgeColor = 'rgba(250, 142, 0, 80%)';
    factionAction = <span><Funds cost={1} /> Replace 1 <Facility /> you own.</span>;
  }
  else if (name === 'Peter Pickwell') {
    edgeColor = 'rgba(240, 240, 11, 80%)';
    factionAbility = <span>
      When you draw <Ally />, draw 2, keep 1 and <br />put the other on the bottom of the deck.
    </span>;
  }
  else if (name === 'Edward Edgecote') {
    edgeColor = 'rgba(198, 0, 252, 80%)';
    factionAction = <span>
      <Funds cost={2} /> Complete 1<Contract /> treating 1 <Facility /> owned by 
    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; an opponent as though it were your <Facility />.</span>;
  }
  else if (name === 'Norman Newcastle') {
    edgeColor = 'rgba(255, 255, 255, 80%)';
    factionAction = <span><Funds cost={1} /> Build a <Facility /> on an <Asteroid /> <br />you do not have a <Facility /> on.</span>;
  }
  else if (name === 'Laura Lymm') {
    edgeColor = 'rgba(83, 166, 238, 80%)';
    factionAction = <span><Funds cost={1} /> Complete 1<Contract /></span>;
  }
  else if (name === 'Sophia St. Michael') {
    edgeColor = 'rgba(255, 255, 255, 80%)';
    factionAbility = <span>
      At the end of your turn, draw <Contract /> <br />
      until you have 3 <Contract /> in your hand. <br />
      You cannot complete any public <Contract />.
    </span>;
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
      <img src={tree} className="white-shadow" style={{
        position: 'absolute',
      }}/>

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
            <span className="action-box-title">Spend <Funds cost={2} /> per turn</span>
            <br />
            <span style={{
              position: 'relative'
            }}>
              &nbsp;&nbsp;<Funds cost={2} /> Build a <Facility />
            </span>
            <br />
            <span>
              &nbsp;&nbsp;<Funds cost={2} /> Complete <Contracts />
            </span>
            <br />
            <span>
              &nbsp;&nbsp;<Funds cost={1} /> Place a <Research />
            </span>
            <br />
          </div>
          <div className="overlay-box action-box">
            <span className="action-box-title">Faction { !!factionAbility ? 'Ability' : 'Action' }</span>
            <br />
            <span>
              {factionAction ? <>&nbsp;&nbsp;</> : <></>}{factionAbility}{factionAction}
            </span>
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
