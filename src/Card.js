// import { useState } from 'react';

const Card = ({card, selectedCardId, handleClickOnCard}) => {

  return (
    <div className={selectedCardId == card.id ? "Card selected" : "Card"} 
      onClick={() => handleClickOnCard(card)}>
        {card.label}<br />
    </div>
  );
}

export default Card;