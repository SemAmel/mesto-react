import React from "react";

function Card({card, handle}){

  const handleClick = () => {
    handle(card)
  }

  return (
    <li className="gallery__item">
      <img className="gallery__image" alt={card.name} src={card.link} onClick={handleClick} />
      <div className="gallery__description">
        <h2 className="gallery__place">{card.name}</h2>
        <div className="gallery__mark">
          <button className="gallery__heart" type="button"></button>
          <span className="gallery__count">{card.likes.length}</span>
        </div>
      </div>
      <button className="gallery__trash" type="button"></button>
    </li>
  );
}

export default Card;