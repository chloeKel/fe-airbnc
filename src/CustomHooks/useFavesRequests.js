import axios from "axios";
import { useCallback } from "react";
import { useErrorContext } from "../Contexts/Contexts";

export default function useFavesRequests() {
  const { setError } = useErrorContext();

  const postFavourite = useCallback(
    async (propertyId, userId) => {
      try {
        await axios.post(`https://airbnc-k7rs.onrender.com/api/properties/${propertyId}/favourite`, {
          guest_id: userId,
        });
      } catch (error) {
        setError(error);
      }
    },
    [setError]
  );

  const deleteFavourite = useCallback(
    async (favouriteId) => {
      try {
        await axios.delete(`https://airbnc-k7rs.onrender.com/api/favourites/${favouriteId}`);
      } catch (error) {
        setError(error);
      }
    },
    [setError]
  );

  return { postFavourite, deleteFavourite };
}
