import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { useErrorContext } from "../Contexts/Contexts";
const url = import.meta.env.VITE_API_URL;

export function useFetchFavourites(userId) {
  const { setError } = useErrorContext();
  const [favourites, setFavourites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { favourites },
        } = await axios.get(`${url}/api/favourites/${userId}`);
        setFavourites(favourites);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    })();
  }, [userId, setError]);

  return { isLoading, favourites };
}

export function useFavesRequests() {
  const { setError } = useErrorContext();

  const postFavourite = useCallback(
    async (propertyId, userId) => {
      try {
        const { data } = await axios.post(`${url}/api/properties/${propertyId}/favourite`, {
          guest_id: userId,
        });
        return data;
      } catch (error) {
        setError(error);
      }
    },
    [setError]
  );

  const deleteFavourite = useCallback(
    async (favouriteId) => {
      try {
        const { data } = await axios.delete(`${url}/api/favourites/${favouriteId}`);
        return data;
      } catch (error) {
        console.error(error);
        setError(error);
      }
    },
    [setError]
  );

  return { postFavourite, deleteFavourite };
}
