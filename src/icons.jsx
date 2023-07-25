export function Icon({name}) {
  return (<i className={`icon-${name}`} />);
}

export function ContractsIcon() {
  return (
    <>
      <span className="first-contract"><Icon name="contract" /></span>
      <span className="second-contract"><Icon name="contract" /></span>
      <span className="third-contract"><Icon name="contract" /></span>
    </>
  );
}
