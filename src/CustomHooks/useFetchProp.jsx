import axios from "axios";
import { useContext, useCallback } from "react";
import { ErrorContext } from "../Contexts/Contexts";

export default function useFetchProp() {
  const { setError } = useContext(ErrorContext);

  const fetchProp = useCallback(
    async (propertyId, userId = null) => {
      try {
        let endpoint = `https://airbnc-k7rs.onrender.com/api/properties/${propertyId}`;
        if (userId) endpoint += `?user_id=${userId}`;
        const {
          data: { property },
        } = await axios.get(endpoint);
        return property;
      } catch (error) {
        setError(error);
      }
    },
    [setError]
  );

  return { fetchProp };
}
