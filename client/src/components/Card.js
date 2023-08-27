import './Card.css';

function Card({day, style}) {
  return (
    <div className={style}>
        <h5>{day}</h5>
    </div>
  );
}

export default Card;