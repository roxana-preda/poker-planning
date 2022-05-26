import Card from "./Card";


const Cards = ({cards, selectedCardId, handleClickOnCard}) => {
    // const cards = props.cards;

    return (
        <div className="cards-container">
            { cards.map((card) => 
                <Card key={card.id} card={card} selectedCardId={selectedCardId} handleClickOnCard={handleClickOnCard}/>
            )}
        </div>
    );
}

export default Cards;

