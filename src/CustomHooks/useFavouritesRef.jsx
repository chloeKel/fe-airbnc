import { useState, useEffect, useContext } from "react";
import { ErrorContext, UserContext } from "../Contexts/Contexts";
import { setErrorMsg } from "../Utils/setErrorMsg";
import { fetchFavourites } from "../Utils/api";

export default function useFavouritesRef() {
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
                acc[property_id] = favourite_id;
                return acc;
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
