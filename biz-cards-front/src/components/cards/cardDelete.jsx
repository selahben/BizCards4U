import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import cardsService from "../../services/cardsService";
import { toast } from "react-toastify";

export const CardDelete = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const deleteCard = async () => {
      await cardsService.deleteCard(id);
      toast.error("The Card was deleted successfully..");
      navigate("/my-cards");
    };
    deleteCard();
  }, [id, navigate]);

  return null;
};
