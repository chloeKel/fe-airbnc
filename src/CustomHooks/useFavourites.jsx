import { useState, useEffect, useContext } from "react";
import { ErrorContext, UserContext } from "../Contexts/Contexts";
import { setErrorMsg } from "../Utils/setErrorMsg";
import { fetchFavourites } from "../Utils/api";
import useProperties from "./useProperties";

export default function useFavourites() {
  const { id } = useContext(UserContext);
  const { setError } = useContext(ErrorContext);
  const [favouritesRef, setFavouritesRef] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const { favourites } = await fetchFavourites(id);
        const ref =
          favourites.length > 0
            ? favourites.map(({ property_id, favourite_id }) => {
                return {
                  [property_id]: favourite_id,
                };
              })
            : [];
        setFavouritesRef(ref);
      } catch (error) {
        setError(setErrorMsg(error.response));
      }
    })();
  }, []);

  return { favouritesRef };
}
