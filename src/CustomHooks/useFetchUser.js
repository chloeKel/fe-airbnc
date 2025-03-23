import axios from "axios";
import { useState, useEffect } from "react";
import { useErrorContext } from "../Contexts/Contexts";
const url = import.meta.env.VITE_API_URL;

export default function useFetchUser(userId) {
  const { setError } = useErrorContext();
  const [user, setUser] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { user },
        } = await axios.get(`${url}/api/users/${userId}`);
        setUser(user);
      } catch (error) {
        setError(error);
      }
    })();
  }, [userId, setError]);

  return user;
}
