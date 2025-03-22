import axios from "axios";
import { useState, useEffect } from "react";
import { useErrorContext } from "../Contexts/Contexts";

export default function useFetchProps(userId) {
  const { setError } = useErrorContext();
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { properties },
        } = await axios.get(`https://airbnc-k7rs.onrender.com/api/properties?userId=${userId}`);
        setProperties(properties);
      } catch (error) {
        setError(error);
      }
    })();
  }, [userId, setError]);

  return properties;
}
