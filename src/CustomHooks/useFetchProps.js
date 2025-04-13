import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useErrorContext } from "../Contexts/Contexts";
const url = import.meta.env.VITE_API_URL;

export default function useFetchProps(userId, sort = null, minprice = null, maxprice = null) {
  const { setError } = useErrorContext();
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);

  let endpoint;
  switch (sort) {
    case "Most Popular":
      endpoint = `${url}/api/properties?user_id=${userId}&sort=popularity`;
      break;
    case "Highest price first":
      endpoint = `${url}/api/properties?user_id=${userId}&sort=price_per_night&order=desc`;
      break;
    case "Lowest price first":
      endpoint = `${url}/api/properties?user_id=${userId}&sort=price_per_night&order=asc`;
      break;
    default:
      endpoint = `${url}/api/properties?user_id=${userId}`;
  }

  if (minprice !== null && maxprice !== null) endpoint = `${url}/api/properties?user_id=${userId}&minprice=${minprice}&maxprice=${maxprice}&sort=price_per_night&order=asc`;

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
    (async () => {
      try {
        const {
          data: { properties },
        } = await axios.get(endpoint);
        setProperties(properties);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    })();
  }, [userId, setError, endpoint]);

  return { isLoading, properties, containerRef };
}
