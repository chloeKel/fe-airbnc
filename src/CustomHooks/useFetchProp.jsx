import axios from "axios";
import { useState, useEffect } from "react";
import { useErrorContext } from "../Contexts/Contexts";

export default function useFetchProp(userId, propertyId) {
  const { setError } = useErrorContext();
  const [prop, setProp] = useState({});

  useEffect(() => {
    (async () => {
      try {
        let endpoint = `https://airbnc-k7rs.onrender.com/api/properties/${propertyId}`;
        if (userId) endpoint += `?user_id=${userId}`;
        const {
          data: { property },
        } = await axios.get(endpoint);
        setProp(property);
      } catch (error) {
        setError(error);
      }
    })();
  }, [propertyId, userId, setError]);

  return { prop };
}
