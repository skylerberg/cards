import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/fonts/icons.css';
const allyImages = import.meta.glob('./assets/images/allies/*.png', { eager: true });

const rootDiv = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(rootDiv);


function AllyCard({name, score, ability}) {
  const pngName = `${name.toLowerCase().replaceAll(' ', '-')}.png`;
  const imageUrl = allyImages[`./assets/images/allies/${pngName}`].default;
  console.log(imageUrl);
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

function Icon({name}) {
  return (<i className={`icon-${name}`} />);
}

function ContractsIcon() {
  return (
    <>
      <span className="first-contract"><Icon name="contract" /></span>
      <span className="second-contract"><Icon name="contract" /></span>
      <span className="third-contract"><Icon name="contract" /></span>
    </>
  );
}

function Page() {
  return (
    <>
      <div className="page">
        <div className="card-grid">
          <AllyCard name="Rogue Pilot" score={1} ability={(
            <>
              <Icon name="action" /> <Icon name="move" /> 1 of your <Icon name="facility" /> to any <Icon name="empty-space" />.
            </>
          )}/>
          <AllyCard name="Rocket Scientist" score={1} ability={(
              <>
                <Icon name="action" /> Draw 2 <Icon name="rocket" />.
              </>
          )}/>
          <AllyCard name="Warlord" score={1} ability={(
            <>
              <Icon name="action" /> Score a <Icon name="rocket" /> without performing its ability. Then <Icon name="destroy" /> any 1 <Icon name="facility" />.
            </>
          )}/>
          <AllyCard name='Remodeler' score={1} ability={(
              <>
                <Icon name="action" /> Swap the position of 2 of your <Icon name="facility" />.
              </>
            )
          }/>
          <AllyCard name="Opportunist" score={0} ability={(
            <>
              <Icon name="action" /> Complete <ContractsIcon />. If you completed any public <ContractsIcon />, restock them immediately and take this <Icon name="action" /> again.
            </>
          )}/>
          <AllyCard name="Planner" score={1} ability={(
            <>
              <Icon name="action" /> Place a <Icon name="facility" /> from your supply on this card. Then, you may build all <Icon name="facility" /> on this card.
            </>
          )}/>
          <AllyCard name="Coordinator" score={1} ability={(
            <>
              <Icon name="action" /> Play <Icon name="rocket" />. Then, complete 1 <Icon name="contract" /> you have a route for.
            </>
          )}/>
          <AllyCard name='Launch Director' score={1} ability={(
            <>
              <Icon name="action" /> Play <Icon name="rocket" />. Then, <Icon name="rotate-clockwise" /> any <Icon name="asteroid" /> 1 space clockwise.
            </>
          )}/>
          <AllyCard name="Spy" score={1} ability={(
            <>
              <Icon name="action" /> Draw from another player’s faction deck.
            </>
          )}/>
        </div>
      </div>

      <div className="page">
        <div className="card-grid">
          <AllyCard name="Negotiator" score={1} ability={(
            <>
              <Icon name="action" /> Complete 1 <Icon name="contract" /> treating 1 <Icon name="facility" /> that is not yours as though it were your <Icon name="facility" />.
            </>
          )}/>
          <AllyCard name="Researcher" score={0} ability={(
            <>
              <Icon name="action" /> Put a card from your hand onto the bottom of its deck. Draw from that deck. Take a different <Icon name="action" />.
            </>
          )}/>
          <AllyCard name="Recycling Expert" score={0} ability={(
            <>
              <Icon name="action" /> <Icon name="destroy" /> 1 of your <Icon name="facility" /> to build 2 <Icon name="facility" />.
            </>
          )}/>
          <AllyCard name="Streamliner" score={0} ability={(
            <>
              <Icon name="action" /> Complete 1 <Icon name="contract" /> from your hand. Draw a <Icon name="contract" />.
            </>
          )}/>
          <AllyCard name="Broker" score={1} ability={(
            <>
              <Icon name="action" /> Give another player a card from your hand. Replace 1 of their <Icon name="facility" /> with a <Icon name="facility" /> of the same shape belonging to you.
            </>
          )}/>
        </div>
      </div>
    </>
  );
}

function Pages() {
  return (
    <>
      <Page />
    </>
  );
}

reactRoot.render(
  <React.StrictMode>
    <Pages />
  </React.StrictMode>
);
