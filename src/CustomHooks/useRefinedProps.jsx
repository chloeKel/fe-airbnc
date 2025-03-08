import axios from "axios";
import { useState, useEffect, useContext, useMemo } from "react";
import { ErrorContext } from "../Contexts/Contexts";
import useFetchProp from "./useFetchProp";
import { useFavesRef } from "./useFavesRequests";

export default function useRefinedProps(userId) {
  const { setError } = useContext(ErrorContext);
  const { favouritesRef } = useFavesRef(userId);
  const { fetchProp } = useFetchProp();
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { properties },
        } = await axios.get("https://airbnc-k7rs.onrender.com/api/properties");

        const propsWithFaveSpecs = await Promise.all(
          properties.map(async ({ property_id }) => {
            return fetchProp(property_id, userId);
          })
        );
        setData(propsWithFaveSpecs);
      } catch (error) {
        setError(error);
      }
    })();
  }, [fetchProp, userId, setError]);

  const refinedProps = useMemo(() => {
    return data.map(({ property_id, ...rest }) => {
      return {
        ...rest,
        property_id,
        favourite_id: favouritesRef[property_id],
      };
    });
  }, [data, favouritesRef]);

  return { refinedProps };
}
