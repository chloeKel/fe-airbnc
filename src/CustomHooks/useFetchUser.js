import axios from "axios";
import { useState, useEffect } from "react";
import { useErrorContext } from "../Contexts/Contexts";

export default function useFetchUser(userId) {
  const { setError } = useErrorContext();
  const [user, setUser] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { user },
        } = await axios.get(`https://airbnc-k7rs.onrender.com/api/users/${userId}`);
        setUser(user);
      } catch (error) {
        setError(error);
      }
    })();
  }, [userId, setError]);

  return user;
}
