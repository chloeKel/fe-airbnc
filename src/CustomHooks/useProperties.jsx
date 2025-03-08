import { useState, useEffect, useContext } from "react";
import { ErrorContext } from "../Contexts/Contexts";
import { fetchProperties } from "../Utils/api";

export default function useProperties(userId) {
  const { setError } = useContext(ErrorContext);
  const [properties, setProperties] = useState([]);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const properties = await fetchProperties(userId);
        console.log("Fetched properties:", properties);
        const favourites = properties.filter((property) => property.favourited);
        setProperties(properties);
        setFavourites(favourites);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [userId]);

  return { properties, favourites };
}
