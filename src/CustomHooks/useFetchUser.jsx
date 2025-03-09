import axios from "axios";
import { useCallback } from "react";
import { useErrorContext } from "../Contexts/Contexts";

export default function useFetchUser() {
  const { setError } = useErrorContext();

  const fetchUser = useCallback(
    async (userId) => {
      try {
        const {
          data: { user },
        } = await axios.get(`https://airbnc-k7rs.onrender.com/api/users/${userId}`);
        return user;
      } catch (error) {
        setError(error);
      }
    },
    [setError]
  );

  return { fetchUser };
}
