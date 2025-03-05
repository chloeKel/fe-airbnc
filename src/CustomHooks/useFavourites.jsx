import { useState, useEffect, useContext } from "react";
import { ErrorContext, UserContext } from "../Contexts/Contexts";
import { setErrorMsg } from "../Utils/setErrorMsg";
import { deleteFavourite, fetchFavourites, postFavourite } from "../Utils/api";

export function useFavourites() {
  const { id } = useContext(UserContext);
  const { setError } = useContext(ErrorContext);
  const [favouritesRef, setFavouritesRef] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const { favourites } = await fetchFavourites(id);
        const ref =
          favourites.length > 0
            ? favourites.reduce((acc, { property_id, favourite_id }) => {
                return { ...acc, [property_id]: favourite_id };
              }, {})
            : [];
        setFavouritesRef(ref);
      } catch (error) {
        setError(setErrorMsg(error.response));
      }
    })();
  }, []);

  return { favouritesRef };
}

export function useFavouriteButton() {
  const { setError } = useContext(ErrorContext);

  const addFavourite = async (propertyId, userId) => {
    try {
      await postFavourite(propertyId, userId);
    } catch (error) {
      setError(setErrorMsg(error.response));
    }
  };

  const removeFavourite = async (favouriteId) => {
    try {
      await deleteFavourite(favouriteId);
    } catch (error) {
      setError(setErrorMsg(error.response));
    }
  };

  return { addFavourite, removeFavourite };
}
