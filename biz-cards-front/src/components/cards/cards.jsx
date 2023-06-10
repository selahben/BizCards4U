import { Link } from "react-router-dom";
import { PageHeader } from "../common/pageHeader";
import { useMyCards } from "../../hooks/useMyCards";
import { Card } from "./card";

export function MyCards() {
  const cards = useMyCards();

  return (
    <>
      <PageHeader title={<>My Cards</>} />
      <div className="row mt-3">
        <p className="text-center">Here you can find ALL YOUR CARDS.</p>
        <p className="text-center">
          You can CREATE new ones, EDIT existing cards, and DELETE the ones you
          don't like..
        </p>
        <p className="text-center">
          You can also VIEW and SHARE their full version.
        </p>
        <Link id="newCardBTN" to="/create-card">
          <span className="btn btn-success rounded-circle">
            <i className="bi bi-plus"></i>
          </span>
        </Link>
      </div>
      <div className="row d-flex justify-content-center gap-2">
        {!cards?.length ? (
          <p className="text-center fw-bold fs-3 mt-3">No Cards Yet..</p>
        ) : (
          cards.map((card) => <Card key={card._id} card={card} />)
        )}
      </div>
    </>
  );
}
