import { useState, useEffect, useContext } from "react";
import { ErrorContext, UserContext } from "../Contexts/Contexts";
import { setErrorMsg } from "../Utils/setErrorMsg";
import { fetchProperties } from "../Utils/api";

export default function useProperties() {
  const { id: userId } = useContext(UserContext);
  const { setError } = useContext(ErrorContext);
  const [properties, setProperties] = useState([]);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const properties = await fetchProperties(userId);
        const favourites = properties.filter((property) => property.favourited);
        setProperties(properties);
        setFavourites(favourites);
      } catch (error) {
        setError(setErrorMsg(error.response));
      }
    })();
  }, []);

  return { properties, favourites };
}
