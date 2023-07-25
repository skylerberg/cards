function Page({ cards }) {
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

export default function Pages({ cards }) {
  let cardGroups = [];
  for (let i = 0; i < cards.length; i += 9) {
    cardGroups.push(cards.slice(i, i + 9));
  }
  let pages = cardGroups.map((cardGroup, i) => <Page key={i} cards={cardGroup} />)
  return (
    <>
      {pages}
    </>
  );
}
