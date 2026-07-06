export default function Card({ card, onCardClick }) {
  return (
    <li className="places__card">
      <button className="places__card-delete-button" type="button"></button>
      <img
        className="places__card-image"
        src={card.link}
        alt={card.name}
        onClick={() => onCardClick(card)}
      />
      <div className="places__card-info">
        <h2 className="places__card-title">{card.name}</h2>
        <button className="places__card-like-button" type="button"></button>
      </div>
    </li>
  );
}
