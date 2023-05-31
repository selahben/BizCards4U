import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getCard } from "../services/cardsService";
import { Map } from "./common/map";

export function CardFullView() {
  const [card, setCard] = useState();

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getCardInfo = async () => {
      const { data } = await getCard(id);
      if (
        data.bizImage ===
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
      ) {
        data.bizImage = "/images/CardTopDefaultBG.jpg";
      }
      setCard(data);
    };
    getCardInfo();
  }, [id]);

  return (
    <>
      <button
        id="backToCards"
        className="btn btn-success rounded-circle"
        onClick={() => navigate("/my-cards")}
      >
        <i className="bi bi-arrow-left"></i>
      </button>
      {card && (
        <div className="text-center">
          <div
            id="fullCardTop"
            style={{ backgroundImage: `url(${card.bizImage})` }}
          ></div>
          <h1 id="fullCardName">{card.bizName}</h1>
          <p id="fullCardDescription" className="mt-4 mb-5">
            {card.bizDescription}
          </p>
          <a
            id="fullCardPhone"
            className="btn btn-primary fw-bold fs-5"
            href={`tel:${card.bizPhone}`}
          >
            <i className="bi bi-telephone-fill"></i>
            <span className="ms-2">Call Us at: {card.bizPhone}</span>
          </a>
          <p id="fullCardAddress" className="mt-3 fs-5 fw-bold">
            <i className="bi bi-geo-alt-fill"></i>
            <span className="ms-2">Find Us at: {card.bizAddress}</span>
          </p>
          <Map address={card.bizAddress} />
        </div>
      )}
    </>
  );
}
