import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { useErrorContext } from "../Contexts/Contexts";
const url = import.meta.env.VITE_API_URL;

export function useFetchUser(userId) {
  const { setError } = useErrorContext();
  const [user, setUser] = useState({});
  const [refresh, setRefresh] = useState(0);

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
  }, [userId, setError, refresh]);

  return { user, setRefresh };
}

export function usePostUser() {
  const { setError } = useErrorContext();

  const postUser = useCallback(
    async (userId, details) => {
      try {
        const { data } = await axios.patch(`${url}/api/users/${userId}`, details);
        return data;
      } catch (error) {
        setError(error);
      }
    },
    [setError]
  );

  return { postUser };
}
