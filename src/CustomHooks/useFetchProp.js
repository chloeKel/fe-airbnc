import axios from "axios";
import { useState, useEffect } from "react";
import { useErrorContext } from "../Contexts/Contexts";
const url = import.meta.env.VITE_API_URL;

export default function useFetchProp(propertyId, userId) {
  const { setError } = useErrorContext();
  const [prop, setProp] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        let endpoint = `${url}/api/properties/${propertyId}`;
        if (userId) endpoint += `?user_id=${userId}`;
        const {
          data: { property },
        } = await axios.get(endpoint);
        setProp(property);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    })();
  }, [propertyId, userId, setError]);

  return { isLoading, prop };
}
