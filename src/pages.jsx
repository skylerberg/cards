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
  return (
    <>
      <div className="page">
        <div className="card-grid">
          {cards}
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
