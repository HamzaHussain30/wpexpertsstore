export default function BtnRoll({ children }) {
  return (
    <span className="btn__roll">
      <span className="btn__roll-inner">
        <span>{children}</span>
        <span aria-hidden="true">{children}</span>
      </span>
    </span>
  );
}
