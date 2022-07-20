export function Card({ symbol, title, keywords }) {
  return (
    <div className="main__cart">
      <div className="main__picture">{title}</div>
      <p className="main__title">{symbol}</p>
      <p className="main__text">{keywords}</p>
    </div>
  );
}
