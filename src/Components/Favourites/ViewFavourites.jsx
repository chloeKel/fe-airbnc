import { useState, useEffect, useContext } from "react";
import { ErrorContext, UserContext } from "../../Contexts/Contexts";
import { setErrorMsg } from "../../Utils/setErrorMsg";
import { fetchFavourites } from "../../Utils/api";
import PropertyCards from "../ExplorePage/PropertyCards";
import DefaultContent from "../DefaultContent";

export default function ViewFavourites() {
  const { setError } = useContext(ErrorContext);
  const { id } = useContext(UserContext);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { favourites } = await fetchFavourites(id);
        if (favourites.length > 0) {
          const favouriteProperties = await Promise.all(
            favourites.map(async ({ property_id }) => {
              const { property } = await fetchSingleProperty(property_id);
              return property;
            })
          );
          setProperties(favouriteProperties);
        } else {
          setProperties([]);
        }
      } catch (error) {
        setError(setErrorMsg(error.response));
      }
    })();
  }, []);

  return <>{properties.length > 0 ? <PropertyCards properties={properties} /> : <DefaultContent component="favourites" />}</>;
}
