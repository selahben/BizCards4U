import { Card } from "../cards/card";

export function CardsMapping({
  cards,
  numOfCardsToShow = null,
  isReversed = false,
  isBiz = true,
}) {
  let cardsToShow = [...cards];
  if (isReversed) {
    cardsToShow = cards.toReversed();
  }
  return (
    <>
      {cardsToShow.map((card, index) => {
        if (numOfCardsToShow) {
          if (index < numOfCardsToShow) {
            return <Card key={card._id} card={card} isBiz={isBiz} />;
          }
          return null;
        } else {
          return <Card key={card._id} card={card} isBiz={isBiz} />;
        }
      })}
    </>
  );
}
