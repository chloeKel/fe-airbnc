import axios from "axios";
import { useState, useEffect } from "react";
import { useErrorContext } from "../Contexts/Contexts";
const url = import.meta.env.VITE_API_URL;

export default function useFetchProps(userId) {
  const { setError } = useErrorContext();
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { properties },
        } = await axios.get(`${url}/api/properties?user_id=${userId}`);
        setProperties(properties);
      } catch (error) {
        setError(error);
      }
    })();
  }, [userId, setError]);

  return properties;
}
