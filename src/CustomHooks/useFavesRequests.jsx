import axios from "axios";
import { useState, useEffect, useContext, useCallback } from "react";
import { ErrorContext } from "../Contexts/Contexts";

export function useFavesRef(userId) {
  const { setError } = useContext(ErrorContext);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { favourites },
        } = await axios.get(`https://airbnc-k7rs.onrender.com/api/favourites/${userId}`);
        setFavourites(favourites);
      } catch (error) {
        setError(error);
      }
    })();
  }, [userId, setError]);

  const favouritesRef =
    favourites.length > 0
      ? favourites.reduce((acc, { property_id, favourite_id }) => {
          acc[property_id] = favourite_id;
          return acc;
        }, {})
      : [];

  return { favouritesRef };
}

export function useFavesRequests() {
  const { setError } = useContext(ErrorContext);

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
