import { CardBack, EmptyCard } from './cardTemplates.jsx';

export function FactionMatPage({ factionMats }) {
  return (
    <>
      <div className="page">
        {factionMats}
      </div>
    </>
  );
}

export function CardPage({ cards }) {
  const backs = [];
  for (let card of cards) {
    backs.push(CardBack({type: card.props.type}));
  }
  for (let i = 0; i < cards.length; i += 3) {
    while (backs.length <= i + 2) {
      backs.push(EmptyCard());
    }
    let first = backs[i];
    let third = backs[i + 2];
    backs[i] = third;
    backs[i + 2] = first;
  }
  return (
    <>
      <div className="page">
        <div className="card-grid">
          {cards}
        </div>
      </div>
      <div className="page">
        <div className="card-grid">
          {backs}
        </div>
      </div>
    </>
  );
}

export function CardPages({ cards }) {
  let cardGroups = [];
  for (let i = 0; i < cards.length; i += 9) {
    cardGroups.push(cards.slice(i, i + 9));
  }
  let pages = cardGroups.map((cardGroup, i) => <CardPage key={i} cards={cardGroup} />)
  return (
    <>
      {pages}
    </>
  );
}
