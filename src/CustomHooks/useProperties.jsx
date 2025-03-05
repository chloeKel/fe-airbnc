import { useState, useEffect, useContext } from "react";
import { ErrorContext } from "../Contexts/Contexts";
import { setErrorMsg } from "../Utils/setErrorMsg";
import { fetchProperties } from "../Utils/api";
import { useFavourites } from "./useFavourites";

export default function useProperties() {
  const { setError } = useContext(ErrorContext);
  const { favouritesRef } = useFavourites();
  const [properties, setProperties] = useState([]);

  function formatProperties(properties, favourites) {
    return properties.map(({ property_id, ...rest }) => {
      const favourited = favourites[property_id] ? true : false;
      return {
        ...rest,
        property_id,
        favourited,
        ...(favourited && { favourite_id: favourites[property_id] }),
      };
    });
  }

  useEffect(() => {
    (async () => {
      try {
        const { properties } = await fetchProperties();
        setProperties(formatProperties(properties, favouritesRef));
      } catch (error) {
        setError(setErrorMsg(error.response));
      }
    })();
  }, []);

  return { properties };
}
