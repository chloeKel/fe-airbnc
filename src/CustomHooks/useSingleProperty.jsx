import { useState, useContext, useEffect } from "react";
import { ErrorContext } from "../Contexts/Contexts";
import { setErrorMsg } from "../Utils/setErrorMsg";
import { fetchSingleProperty } from "../Utils/api";

export default function useSingleProperty(id) {
  const { setError } = useContext(ErrorContext);
  const [property, setProperty] = useState({});
  const [hostId, setHostId] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { property } = await fetchSingleProperty(id);
        setProperty(property);
        setHostId(property.host_id);
      } catch (error) {
        setError(setErrorMsg(error.response));
      }
    })();
  }, []);

  return { property, hostId };
}
