export function Icon({name}) {
  return (<i className={`icon-${name}`} />);
}

export function Contract() {
  return <Icon name="contract" />;
}

export function Rotate() {
  return <Icon name="rotate" />;
}

export function Asteroid() {
  return <Icon name="asteroid" />;
}

export function RotateClockwise() {
  return <Icon name="rotate-clockwise" />;
}

export function Destroy() {
  return <Icon name="destroy" />;
}

export function Facility() {
  return <Icon name="facility" />;
}

export function Contracts() {
  return (
    <>
      <span className="first-contract"><Icon name="contract" /></span>
      <span className="second-contract"><Icon name="contract" /></span>
      <span className="third-contract"><Icon name="contract" /></span>
    </>
  );
}
